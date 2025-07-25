import type { StateCreator } from 'zustand'
import AIService from '../services/AIService'

export type AISlice = {
    recipe: string
    isGenerating: boolean
    generateRecipe: (prommpt: string) => Promise<void>
}
export const createAISlice:StateCreator<AISlice, [], [], AISlice> = (set) => ({
    recipe: '',
    isGenerating: false,
    generateRecipe: async (prompt) => {
        const data = await AIService.generateRecipe(prompt)
        set({
            recipe: '', isGenerating: true
        })
        for await (const textPart of data){
            set((state => ({
                recipe: state.recipe + textPart
            })))
        }
        set({
            isGenerating: false
        })
    }
})