import { z } from 'zod'

export const CategoriesAPIResponseSchema = z.object({
    meals: z.array(z.object({
        strCategory: z.string()
    }))
})

export const SearchFilterSchema = z.object({
    ingredient: z.string(),
    category: z.string()
})

export const MealAPIResponse = z.object({
    idMeal: z.string(),
    strMeal: z.string(),
    strMealThumb: z.string()
})

export const MealsAPIResponse = z.object({
    meals: z.array(MealAPIResponse)
})