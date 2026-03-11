<template>
  <div class="card">
    <img
      v-if="recipe.fields.image"
      :src="'https:' + recipe.fields.image.fields.file.url"
      :alt="recipe.fields.title"
      class="card-image"
    />
    <h2>{{ recipe.fields.title }}</h2>
    <p>{{ recipe.fields.description }}</p>
    <NuxtLink :to="`/recipes/${recipe.fields.slug}`">View Recipe</NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  recipe: Object,
});
</script>
