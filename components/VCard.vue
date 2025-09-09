<template>
  <Card>
    <template v-if="image" #header>
      <img :alt="alt" :src="image" />
    </template>
    <template #content>
      <div v-if="tags?.length > 0" class="flex align-items-center gap-2">
        <div v-for="(tag, index) in tags" class="tag mb-1" :class="tag">
          {{ tag }}
        </div>
      </div>
      <h3 v-if="title" class="my-1">{{ title }}</h3>
      <p v-if="description" class="my-1">
        {{ description }}
      </p>
    </template>
    <template #footer v-if="url">
      <div class="flex gap-4 my-1">
        <nuxt-link :to="url" target="_blank">
          <Button label="Learn More" />
        </nuxt-link>
      </div>
    </template>
  </Card>
</template>

<script setup>
const props = defineProps({
  alt: {
    type: String,
    required: false,
    default: null
  },
  description: {
    type: String,
    required: false,
    default: null
  },
  title: {
    type: String,
    required: false,
    default: null
  },
  image: {
    type: String,
    required: false,
    default: null
  },
  tags: {
    type: Array,
    required: false,
    default: 0
  },
  url: {
    type: String,
    required: false,
    default: null
  }
})
</script>
