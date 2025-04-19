<template>
    <section class="relative py-16 px-6 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

            <!-- Left: Text Content -->
            <div class="text-center lg:text-left space-y-6 z-10">
                <span
                    class="inline-block text-yellow-600 bg-yellow-100 px-4 py-1 rounded-full font-semibold text-sm shadow">
                    Full Stack Developer
                </span>

                <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Hello, I'm <span class="text-primary">{{ userInfo.FirstName }} {{ userInfo.LastName }}</span>
                </h1>

                <p class="text-gray-600 text-lg">
                    Passionate about crafting modern web experiences, scalable backend systems, and sleek UI interfaces.
                </p>

                <div class="flex flex-wrap justify-center lg:justify-start gap-4">
                    <BaseButton @click="downloadResume" :text="'Download Resume'"
                        btnClass="bg-primary text-white px-6 py-3 rounded-xl shadow hover:bg-yellow-500 transition" />
                    <BaseButton @click="scrollToSection('contact')" text="Contact Me"
                        btnClass="border border-gray-900 text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-100 transition" />
                </div>
            </div>

            <!-- Right: Full Image with Glow and Decorations -->
            <div class="relative flex justify-center items-center">

                <!-- Glowing Ring Around Image -->
                <div
                    class="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-yellow-400 to-primary opacity-30 blur-3xl animate-pulse">
                </div>

                <!-- Main Image -->
                <div class="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl z-10">
                    <img src="../assets/hero.jpg" alt="Profile" class="w-full h-full object-cover" />
                </div>

                <!-- Floating Icons Around -->
                <div class="absolute top-2 left-6 animate-float1">
                    <a :href="userInfo.Github" target="_blank"
                        class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-yellow-500 transition">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
                <div class="absolute bottom-4 right-8 animate-float2">
                    <a :href="userInfo.LinkedIn" target="_blank"
                        class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-yellow-500 transition">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { inject } from 'vue'
import BaseButton from './BaseButton.vue'

const userInfo = inject('userInfo')

const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'resume.pdf'
    link.click()
}
</script>

<style scoped>
/* Floating icons animation */
@keyframes float1 {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0px);
    }
}

@keyframes float2 {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(10px);
    }

    100% {
        transform: translateY(0px);
    }
}

.animate-float1 {
    animation: float1 4s ease-in-out infinite;
}

.animate-float2 {
    animation: float2 6s ease-in-out infinite;
}
</style>
