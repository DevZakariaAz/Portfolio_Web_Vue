<template>
    <div class="max-w-screen-xl mx-auto px-4 py-10">
        <div class="text-center">
            <h2 class="text-4xl font-playfair font-bold text-gray-900">My Projects</h2>
            <p class="mt-4 font-nunito text-xl text-gray-400">A showcase of my latest work</p>
        </div>

        <div v-if="projects.length" class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mt-10">
            <div v-for="(project, index) in projects" :key="project.id"
                :class="`project-card ${index % 3 === 0 ? 'left-to-right' : index % 3 === 1 ? 'right-to-left' : 'splash'}`"
                :style="{
                    animationDelay: `${index * 0.3}s`,
                    animationDuration: '1s'
                }">

                <div class="overflow-hidden rounded-lg shadow-xl bg-white">
                    <img v-if="project.image" :src="project.image" alt="Project Image"
                        class="w-full h-56 object-cover transition-transform transform hover:scale-105" />

                    <div class="p-6">
                        <h5 class="text-2xl font-extrabold text-gray-900 mb-2">{{ project.name }}</h5>
                        <span class="px-3 py-1 text-sm font-semibold rounded-lg" :class="{
                            'bg-green-100 text-green-800': project.status === 'active',
                            'bg-yellow-100 text-yellow-800': project.status === 'in-progress',
                            'bg-gray-100 text-gray-800': project.status === 'archived'
                        }">
                            {{ project.status }}
                        </span>
                        <p class="text-gray-600 mt-2">
                            {{ project.description || 'No description available' }}
                        </p>

                        <div v-if="project.technologies && project.technologies.length" class="mt-3">
                            <span class="text-sm font-semibold text-gray-700">Technologies:</span>
                            <div class="flex flex-wrap gap-2 mt-1">
                                <span v-for="tech in project.technologies" :key="tech"
                                    class="px-3 py-1 text-sm bg-gray-200 text-gray-900 rounded-lg">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>

                        <div class="flex gap-4 mt-5">
                            <a v-if="project.demo && project.demo !== '#'" :href="project.demo" target="_blank">
                                <BaseButton text="Live Demo"
                                    btnClass="px-5 py-2 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300" />
                            </a>
                            <BaseButton v-else text="Live Demo"
                                class="px-5 py-2 bg-gray-300 text-gray-500 font-semibold rounded-lg cursor-not-allowed" />

                            <a v-if="project.github" :href="project.github" target="_blank">
                                <BaseButton text="GitHub"
                                    btnClass="px-5 py-2 border border-gray-700 text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <p v-else class="text-center text-gray-700 text-lg mt-10">Loading projects...</p>
    </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue';
import { inject } from 'vue';

const projects = inject('projects');
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

/* Add classes to handle different movements for the cards */
.project-card {
    opacity: 0;
    transform: translateY(30px);
    animation: 1s ease-in-out forwards;
    transition: transform 0.3s ease-in-out;
}

.project-card.left-to-right {
    animation-name: slide-left-to-right;
}

.project-card.right-to-left {
    animation-name: slide-right-to-left;
}

.project-card.splash {
    animation-name: splash;
}

.grid>div {
    animation-duration: 1s;
    animation-delay: 0.3s;
}

/* Stagger animation delay for each card */
.grid>div:nth-child(odd) {
    animation-delay: 0.3s;
}

.grid>div:nth-child(even) {
    animation-delay: 0.6s;
}

/* Hover effect to scale cards */
.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.project-card .overflow-hidden {
    overflow: hidden;
}
</style>
