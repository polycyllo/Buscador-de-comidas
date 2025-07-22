import axios from 'axios'
import { CategoriesAPIResponseSchema, MealsAPIResponse, RecipeAPIResponseSchema } from '../utils/recipes-schema'
import type { Meal, SearchFilter } from '../types'
export async function getCategories() {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
    const { data } = await axios(url)
    const result = CategoriesAPIResponseSchema.safeParse(data)
    if(result.success) {
        return result.data
    }
}

export async function getRecipes(filters: SearchFilter) {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const { data } = await axios(url)
    const result = MealsAPIResponse.safeParse(data);
    if(result.success){
        return result.data
    }
}

export async function getRecipeById(id: Meal['idMeal']){
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    const { data } = await axios(url)
    const result = RecipeAPIResponseSchema.safeParse(data.meals[0])
    if(result.success){
        return result.data
    }
}