
import { streamText } from 'ai'
import { openrouter } from '../lib/ai'

export default {
    async generateRecipe(prompt: string){
        const result = streamText({
            model: openrouter('meta-llama/llama-3.3-70b-instruct:free'),
            system: "eres el mejor chef del mundo que tiene 65 años de experiencia",
            prompt
        })
        return result.textStream
    }
}