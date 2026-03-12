import { createClient } from 'contentful'

export const useContentful = () => {
  const config = useRuntimeConfig()

  const client = createClient({
    space: config.public.contentfulSpaceId,
    accessToken: config.public.contentfulAccessToken
  })

  const getRecipes = async () => {
    const response = await client.getEntries({
      content_type: 'recipe'
    })
    return response.items
  }

  const getRecipeBySlug = async (slug) => {
    const response = await client.getEntries({
      'content_type': 'recipe',
      'fields.slug': slug,
      'limit': 1
    })
    return response.items[0]
  }

  return {
    getRecipes,
    getRecipeBySlug
  }
}
