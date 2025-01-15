<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <header class="bg-red-600 text-white py-4 px-4">
      <h1 class="text-5xl font-impact text-left">SKÆBNER</h1>
    </header>

    <!-- Content -->
    <main class="container mx-auto flex flex-col md:flex-row gap-4 mt-6">
      <!-- Left Section -->
      <section class="w-full md:w-2/3">
        <!-- Top Picture -->
        <div class="relative mb-4">
          <img
              src="@/assets/sad_dog.png"
              alt="Top Feature"
              class="w-full h-60 object-cover"
          />
          <div
              class="absolute bottom-0 w-full flex flex-col justify-center items-center bg-white bg-opacity-75 p-4 text-center"
          >
            <h2 class="text-red-500 text-xl font-impact">En læser fortæller</h2>
            <p class="text-black text-sm font-impact">jeg higede efter omsorg - del 2:5</p>
          </div>
        </div>

        <!-- Bottom Pictures -->
        <div class="grid grid-cols-2 gap-4">
          <div class="relative">
            <img
                src="@/assets/family.png"
                alt="Bottom Left Feature"
                class="w-full h-32 object-cover"
            />
            <div
                class="absolute bottom-0 w-full flex flex-col justify-center items-center bg-white bg-opacity-75 p-4 text-center"
            >
              <h2 class="text-red-500 text-lg font-impact">Når livet gør ondt</h2>
              <p class="text-black text-xs font-impact">Subtitle</p>
            </div>
          </div>
          <div class="relative">
            <img
                src="@/assets/couple.png"
                alt="Bottom Right Feature"
                class="w-full h-32 object-cover"
            />
            <div
                class="absolute bottom-0 w-full flex flex-col justify-center items-center bg-white bg-opacity-75 p-4 text-center"
            >
              <h2 class="text-red-500 text-lg font-impact">Når livet gør ondt</h2>
              <p class="text-black text-xs font-impact">Subtitle</p>
            </div>
          </div>
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
/* Add setup logic if needed */
</script>

<style>
/* Add custom styles if needed */
.font-impact {
  font-family: 'Impact', sans-serif;
}
</style>
