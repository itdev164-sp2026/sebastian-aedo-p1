<template>
  <div>
    <main class="container mx-auto px-4 py-10 space-y-16">
      <section class="grid gap-8 lg:grid-cols-2 items-center">
        <div class="space-y-6">
          <UBadge
            color="primary"
            variant="soft"
            size="lg"
          >
            Welcome to AEDO'S KITCHEN
          </UBadge>

          <h1 class="text-4xl md:text-5xl font-bold leading-tight">
            Simple recipes for everyday cooking
          </h1>

          <p class="text-lg text-muted">
            Discover easy and delicious recipes made for students, busy people,
            and anyone who loves good food without complicated steps.
          </p>

          <div class="flex flex-wrap gap-4">
            <UButton
              to="/recipes"
              size="lg"
              variant="outline"
              icon="i-lucide-chef-hat"
            >
              Browse Recipes
            </UButton>
          </div>
        </div>

        <UCard>
          <template #header>
            <div class="flex items-center gap-2">
              <UIcon
                name="i-lucide-info"
                class="text-primary"
              />
              <h2 class="text-2xl font-semibold">
                About This Blog
              </h2>
            </div>
          </template>

          <p class="text-base leading-7 text-muted">
            AEDO'S KITCHEN is a recipe blog that provides an easy way to browse
            recipes, view ingredients, and follow cooking instructions.
          </p>
        </UCard>
      </section>

      <section class="space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-semibold">
              Latest Recipes
            </h2>
            <p class="text-muted">
              Explore a few recipes from the collection
            </p>
          </div>

          <UButton
            to="/recipes"
            variant="ghost"
            icon="i-lucide-arrow-right"
          >
            View All
          </UButton>
        </div>

        <div
          v-if="previewRecipes.length"
          class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <RecipeCard
            v-for="recipe in previewRecipes"
            :key="recipe.sys.id"
            :recipe="recipe"
          />
        </div>

        <UCard v-else>
          <p class="text-muted">
            No recipes available yet. Add some in Contentful to see them here.
          </p>
        </UCard>
      </section>

      <section>
        <UCard class="text-center">
          <div class="space-y-4 py-4">
            <h2 class="text-2xl font-bold">
              Ready to explore more recipes?
            </h2>
            <p class="text-muted">
              Visit the recipes page to browse all available dishes and find
              your next meal idea.
            </p>

            <div class="flex justify-center">
              <UButton
                to="/recipes"
                size="lg"
                icon="i-lucide-utensils-crossed"
              >
                Go to Recipes
              </UButton>
            </div>
          </div>
        </UCard>
      </section>
    </main>
  </div>
</template>

<script setup>
const { getRecipes } = useContentful()
const recipes = await getRecipes()

const previewRecipes = recipes.slice(0, 3)
</script>
