<template>
  <div
    class="max-w-sm rounded-xl border border-gray-200 bg-white shadow-md overflow-hidden hover:shadow-lg transition"
  >
    <div
      class="w-full h-40 bg-gray-100 flex items-center justify-center overflow-hidden"
    >
      <img
        v-if="recipe.fields.image"
        :src="'https:' + recipe.fields.image.fields.file.url"
        :alt="recipe.fields.title"
        class="w-full h-full object-cover"
      />
      <UIcon v-else name="i-lucide-image-off" class="size-10 text-gray-400" />
    </div>

    <div class="p-4 flex flex-col gap-3">
      <div>
        <h2 class="text-lg font-semibold leading-tight">
          {{ recipe.fields.title }}
        </h2>

        <p v-if="recipe.fields.cookingTime" class="text-xs text-gray-500 mt-1">
          Cook Time: {{ recipe.fields.cookingTime }}
        </p>
      </div>

      <p class="text-sm text-gray-600 line-clamp-3">
        {{ recipe.fields.description }}
      </p>

      <NuxtLink
        :to="`/specificRecipe/${recipe.fields.slug}`"
        class="inline-block mt-2 rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 transition text-center"
      >
        View Recipe
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});
</script>
