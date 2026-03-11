<template>
  <UHeader
    <template #title>
      <div class="flex items-center gap-2 text-primary">
      <UIcon name="streamline-plump:chef-toque-hat" class="size-10" />
      <ULink to="/" class="flex items-center gap-2">
      <div class="flex col">
        <span class="text-2xl">AEDO'S KITCHEN</span>
        <span class="text-xs text-muted">Sebastian Aedo Project 1</span>
      </div>
      </ULink>
      </div>
    </template>
    <template #right>
      <ULink to="/recipes" icon="arcticons:reciper"></ULink>
      <ULink to="/recipes/[slug]" icon="arcticons:recipe-keeper"></ULink>
    </template>
  </UHeader>
</template>
