<template>
  <div>
    <main class="container" v-if="recipe">
      <img
        v-if="recipe.fields.image"
        :src="'https:' + recipe.fields.image.fields.file.url"
        :alt="recipe.fields.title"
        class="detail-image"
      />
      <h1>{{ recipe.fields.title }}</h1>
      <p>{{ recipe.fields.description }}</p>
      <p><strong>Cook Time:</strong> {{ recipe.fields.cookTime }} minutes</p>

      <h2>Ingredients</h2>
      <p class="whitespace">{{ recipe.fields.ingredients }}</p>

      <h2>Instructions</h2>
      <p class="whitespace">{{ recipe.fields.instructions }}</p>
    </main>
  </div>
</template>

<script setup>
const route = useRoute();
const { getRecipeBySlug } = useContentful();

const recipe = await getRecipeBySlug(route.params.slug);
</script>
