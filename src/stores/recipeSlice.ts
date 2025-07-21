import type { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
import type { Categories, Meals, SearchFilter } from "../types"

export type RecipesSliceType = {
    categories: Categories
    meals: Meals
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>

}
export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        meals: []
    },
    meals: {
        meals: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (filters) => {
        const meals = await getRecipes(filters)
        set({
            meals
        })
    }
})