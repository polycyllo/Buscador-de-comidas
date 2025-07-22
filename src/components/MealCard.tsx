import { useAppStore } from "../stores/useAppStore"
import type { Meal } from "../types"

type MealCardProps = {
    meal : Meal 
}
export default function MealCard({meal} : MealCardProps) {
  const selectRecipe = useAppStore((state) => state.selectRecipe)
  return (
    <div className="border shadow-lg">
      <div className="overflow-hidden">
        <img 
          src={meal.strMealThumb} 
          alt={`Imagen de ${meal.strMealThumb}`}
          className="hover:scale-125 transition-transform hover:rotate-2"
        />
      </div>
      <div>
        <h2 className="text-2xl font-black truncate">{meal.strMeal}</h2>
        <button
          type="button"
          className="bg-orange-400 hover:bg-orange-500 font-bold text-white w-full mt-5 p-3 text-lg"
          onClick={() => selectRecipe(meal.idMeal)}
        >Ver Receta</button>
      </div>
    </div>
  )
}
