<template>
  <main>
    <h1>All Recipes</h1>

    <div v-for="recipe in recipes" :key="recipe.sys.id">
      <ULink :to="`/recipes/${recipe.fields.slug}`">
        {{ recipe.fields.title }}
      </ULink>
    </div>
  </main>
</template>
