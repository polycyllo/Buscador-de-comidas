import { z } from 'zod'
import { CategoriesAPIResponseSchema, MealAPIResponse, MealsAPIResponse, SearchFilterSchema } from '../utils/recipes-schema'
export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Meals = z.infer<typeof MealsAPIResponse>
export type Meal = z.infer<typeof MealAPIResponse>