<template>
  <UHeader>
    <template #title>
      <div class="flex items-center gap-2 text-primary">
        <UIcon
          name="lucide:chef-hat"
          class="size-10"
        />
        <ULink
          to="/"
          class="flex items-center gap-2"
        >
          <div class="flex flex-col">
            <span class="text-2xl">AEDO'S KITCHEN</span>
            <span class="text-xs text-muted">Sebastian Aedo Project 1</span>
          </div>
        </ULink>
      </div>
    </template>
    <template #right>
      <ULink
        to="/recipes"
        class="flex items-center gap-2"
      >
        <UIcon
          name="arcticons:reciper"
          class="size-10"
        />
        <span>Recipes</span>
      </ULink>
    </template>
  </UHeader>
</template>
