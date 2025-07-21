import type { Meal } from "../types"

type MealCardProps = {
    meal : Meal 
}
export default function MealCard({meal} : MealCardProps) {
  return (
    <div>
        <h2>{meal.strMeal}</h2>
    </div>
  )
}
