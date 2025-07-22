import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import MealCard from "../components/MealCard"

export default function IndexPage() {
  const meals = useAppStore((state) => state.meals)
  const hasMeals = useMemo( () => meals.meals.length>0, [meals])
  return (
    <>
        <h1 className="text-6xl font-extrabold">Recetas</h1>
      {hasMeals?(
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
          {meals.meals.map((meal) => (
            <MealCard
              key={meal.idMeal}
              meal = {meal}
            />
          ))}
        </div>
      ):(
          <p className="my-10 text-center text-2xl">
            No hay restulados aún, utiliza el formulario para buscar recetas
          </p>
      )}
    </>
  )
}
