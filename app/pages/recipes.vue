<template>
  <div>
    <main class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">
        All Recipes
      </h1>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <RecipeCard
          v-for="recipe in recipes"
          :key="recipe.sys.id"
          :recipe="recipe"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
const { getRecipes } = useContentful()
const recipes = await getRecipes()
</script>
