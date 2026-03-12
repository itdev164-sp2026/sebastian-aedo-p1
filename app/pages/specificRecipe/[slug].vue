<template>
  <div>
    <main
      v-if="recipe"
      class="container mx-auto px-4 py-8"
    >
      <div class="max-w-3xl mx-auto">
        <img
          v-if="recipe.fields.image"
          :src="'https:' + recipe.fields.image.fields.file.url"
          :alt="recipe.fields.title"
          class="w-full max-h-[400px] object-cover rounded-xl mb-6"
        >

        <h1 class="text-4xl font-bold mb-4">
          {{ recipe.fields.title }}
        </h1>

        <p class="text-lg text-gray-600 mb-4">
          {{ recipe.fields.description }}
        </p>

        <p
          v-if="recipe.fields.cookingTime"
          class="mb-6 text-sm text-gray-500"
        >
          <strong>Cook Time:</strong> {{ recipe.fields.cookingTime }}
        </p>

        <div class="mb-8">
          <h2 class="text-2xl font-semibold mb-3">
            Ingredients
          </h2>
          <p class="whitespace-pre-line text-gray-700">
            {{ recipe.fields.ingredients }}
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-3">
            Instructions
          </h2>
          <p class="whitespace-pre-line text-gray-700">
            {{ recipe.fields.instructions }}
          </p>
        </div>
      </div>
    </main>

    <main
      v-else
      class="container mx-auto px-4 py-8"
    >
      <h1 class="text-2xl font-bold mb-4">
        Recipe not found
      </h1>
      <p class="text-gray-600 mb-4">
        The recipe you are looking for does not exist or is not published.
      </p>
      <NuxtLink
        to="/recipes"
        class="inline-block rounded-md bg-orange-500 px-4 py-2 text-white hover:bg-orange-600 transition"
      >
        Back to Recipes
      </NuxtLink>
    </main>
  </div>
</template>

<script setup>
const route = useRoute()
const { getRecipeBySlug } = useContentful()

const recipe = await getRecipeBySlug(route.params.slug)
</script>
