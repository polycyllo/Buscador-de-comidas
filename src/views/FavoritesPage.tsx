import { useMemo } from "react"
import MealCard from "../components/MealCard"
import { useAppStore } from "../stores/useAppStore"

export default function FavoritesPage() {
  const favorites = useAppStore((state) => state.favorites)
  const hasFavorites = useMemo(() => favorites.length,[favorites])
  return (
    <>
      <h1 className="text-6xl font-extrabold">Favorito</h1>
      {hasFavorites ? (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
          {favorites.map(recipe => (
            <MealCard
            key={recipe.idMeal}
            meal={recipe}
            />
          ))}
        </div>):(
        <p className="text-center text-2xl my-10">
          Los favoritos se mostraran aquí
        </p>
      )}
    </>
  )
}
