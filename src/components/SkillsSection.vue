<template>
  <div class="py-16 bg-gray-50">
    <div class="max-w-screen-xl mx-auto px-4">

      <!-- Section Header -->
      <div class="text-center">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-gray-900">
          My Skills
        </h2>
        <p class="mt-4 font-nunito text-lg sm:text-xl md:text-2xl text-gray-400">
          Technologies and Tools I'm proficient in
        </p>
      </div>

      <!-- Skills Grid -->
      <div v-if="skills.length"
        class="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">

        <div v-for="(skill, index) in skills" :key="skill.id"
          class="text-center bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition-all transform"
          :class="`skill-card skill-${index % 4}`"
          :style="{
            animationDelay: `${index * 0.3}s`,
            animationDuration: '1s'
          }">

          <!-- Skill Content Wrapper -->
          <div class="flex flex-col items-center">

            <!-- Skill Icon -->
            <div class="text-5xl text-primary mb-4">
              <template v-if="skill.icon === 'tailwind-logo-svg'">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"
                  class="w-16 h-16 sm:w-20 sm:h-20">
                  <path
                    d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                    style="fill:#FDC435"></path>
                </svg>
              </template>
              <template v-else>
                <span v-html="skill.icon" class="w-16 h-16 sm:w-20 sm:h-20"></span>
              </template>
            </div>

            <!-- Skill Name -->
            <h3 class="text-lg sm:text-xl font-semibold text-gray-800">
              {{ skill.name }}
            </h3>

            <!-- Skill Details -->
            <div class="mt-3">
              <p class="text-gray-500 text-sm sm:text-base">
                {{ skill.category }}
              </p>
              <p class="text-sm sm:text-base font-medium text-primary">
                {{ skill.level }}
              </p>
            </div>
          </div>

        </div>

      </div>

      <!-- Loading Message -->
      <p v-else class="text-center text-lg text-gray-600 mt-8">Loading skills...</p>

    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const skills = inject('skills');
</script>

<style scoped>
/* Animation for sliding in from left to right */
@keyframes slide-left-to-right {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Animation for sliding in from right to left */
@keyframes slide-right-to-left {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Animation for splash effect */
@keyframes splash {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Add animation effects based on the index of the skill */
.skill-card {
  opacity: 0;
  transform: translateY(30px);
  animation: 1s ease-in-out forwards;
}

.skill-card.skill-0 {
  animation-name: slide-left-to-right;
}

.skill-card.skill-1 {
  animation-name: slide-right-to-left;
}

.skill-card.skill-2 {
  animation-name: splash;
}

.skill-card.skill-3 {
  animation-name: slide-left-to-right;
}

.skill-card:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
}

/* Add a staggered effect for animations */
.skill-card:nth-child(odd) {
  animation-delay: 0.3s;
}

.skill-card:nth-child(even) {
  animation-delay: 0.6s;
}

.grid > div {
  animation-duration: 1s;
  animation-delay: 0.3s;
}
</style>
