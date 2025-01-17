<template>
  <div class="relative">
    <img :src="imgSrc" :alt="altText" class="w-full h-full object-cover" />
    <div class="bg-overlay">
      <div class="flex items-center gap-2" v-if="showPlayButton">
        <h3 class="section-title">{{ title }}</h3>
        <button class="play-button">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              class="w-4 h-4"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
      <h3 v-else class="section-title">{{ title }}</h3>
      <p class="section-subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgSrc: String,
  altText: String,
  title: String,
  subtitle: String,
  showPlayButton: Boolean,
});
  import sadDog from '@/assets/sad_dog.png';
  import family from '@/assets/family.png';
  import couple from '@/assets/couple.png';
</script>
