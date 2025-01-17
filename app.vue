<template>
  <div class="min-h-screen bg-[rgb(237,233,230)]">
    <!-- Header -->
    <header class="bg-red-600 text-white py-4 px-4">
      <h1 class="text-5xl font-impact text-left">SKÆBNER</h1>
    </header>



    <!-- Content -->
    <main class="container mx-auto flex flex-col md:flex-row gap-4 mt-6">

      <section class="w-full md:w-2/3">
        <!-- Top Picture -->
        <FeatureCard
            imgSrc="sadDog"
            altText="Top Feature"
            title="En læser fortæller"
            subtitle="jeg higede efter omsorg - del 2:5"
            :showPlayButton="true"
            style="height: 10rem"
        />

        <!-- Bottom Pictures -->
        <div class="grid grid-cols-2 gap-4">
          <FeatureCard
              imgSrc="family"
              altText="Bottom Left Feature"
              title="Når livet gør ondt"
              subtitle="33-årige Dagmar har måske kun få måneder tilbage"
              :showPlayButton="false"
              style="height: 10rem"
          />
          <FeatureCard
              imgSrc="couple"
              altText="Bottom Right Feature"
              title="Når livet gør ondt"
              subtitle="Stinne og Christian er uhelbredeligt syge med kræft"
              :showPlayButton="false"
              style="height: 10rem"
          />
        </div>
      </section>


      <!-- Right Section -->
      <aside class="w-full md:w-1/3">
        <div class="relative">
          <img
              src="@/assets/advertisment.png"
              alt="Advertisement"
              class="w-full h-60 object-cover"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <a
                href="#"
                class="bg-red-600 text-black py-2 px-4 rounded bg-slate-200 transition"
            >
              Shop her
            </a>
          </div>
        </div>
      </aside>
    </main>
  </div>
</template>

<script setup>
import FeatureCard from '@/src/FeatureCard.vue';

import sadDog from '@/assets/sad_dog.png';
import family from '@/assets/family.png';
import couple from '@/assets/couple.png';
</script>


<style>
/* Add custom styles if needed */
.font-impact {
  font-family: 'Impact', sans-serif;
}
</style>
