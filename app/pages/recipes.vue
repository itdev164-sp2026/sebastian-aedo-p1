<template>
  <div>
    <main class="container">
      <h1>All Recipes</h1>
      <div class="grid">
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
const { getRecipes } = useContentful();
const recipes = await getRecipes();
</script>
