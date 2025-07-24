import type { StateCreator } from 'zustand'
import type { Recipe } from '../types'
export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExists: (id: Recipe['idMeal']) => boolean
    loadFromStorage: () => void

}

export const createFavoritesSlice : StateCreator<FavoritesSliceType> = (set, get) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favoriteExists(recipe.idMeal)) { 
            set((state) => ({
                favorites: state.favorites.filter( favorite => favorite.idMeal !== recipe.idMeal)
            }))
        }else {
            set((state) => ({
                favorites: [...state.favorites,recipe]
            }))
        }
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idMeal == id)
    },
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')
        if(storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
})