<template>
    <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-md">
        <div class="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
            <!-- Brand -->
            <div class="flex items-center gap-3">
                <span class="text-xl font-bold text-black drop-shadow-sm">Zakaria Azizi</span>
            </div>

            <!-- Hamburger for mobile -->
            <button @click="toggleMenu" class="md:hidden p-2 rounded-full text-gray-700 hover:bg-white/40 transition">
                <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <!-- Navigation Links -->
            <ul :class="[
                isMenuOpen ? 'block' : 'hidden',
                'md:flex items-center gap-8 text-gray-800 font-medium text-sm md:text-base mt-4 md:mt-0'
            ]"
                class="absolute md:static top-16 left-0 w-full md:w-auto bg-white/80 md:bg-transparent md:backdrop-blur-none px-6 py-4 md:p-0 md:flex md:space-x-6 rounded-b-lg md:rounded-none shadow-lg md:shadow-none transition-all">
                <li>
                    <router-link to="/" @click="scrollToSection('home')" class="nav-link"
                        :class="{ 'active-link': activeSection === 'home' }">
                        🏠 Home
                    </router-link>
                </li>
                <li>
                    <button @click="scrollToSection('about')" class="nav-link"
                        :class="{ 'active-link': activeSection === 'about' }">
                        👤 About
                    </button>
                </li>
                <li>
                    <button @click="scrollToSection('projects')" class="nav-link"
                        :class="{ 'active-link': activeSection === 'projects' }">
                        💼 Projects
                    </button>
                </li>
                <li>
                    <button @click="scrollToSection('certifications')" class="nav-link"
                        :class="{ 'active-link': activeSection === 'certifications' }">
                        🏅 Certifications
                    </button>
                </li>
                <li>
                    <router-link to="/resume" @click="scrollToSection('/resume')" class="nav-link"
                        :class="{ 'active-link': activeSection === '/resume' }">
                        📄 Resume
                    </router-link>
                </li>
                <li>
                    <button @click="scrollToSection('contact')" class="nav-link"
                        :class="{ 'active-link': activeSection === 'contact' }">
                        ✉️ Contact
                    </button>
                </li>
            </ul>
        </div>
    </nav>
</template>


<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const activeSection = ref(route.path === '/' ? 'home' : route.path);
const isMenuOpen = ref(false); // Track mobile menu visibility

// Toggle mobile menu
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

// Close mobile menu
const closeMenu = () => {
    isMenuOpen.value = false;
};

// Handle scroll to section
const scrollToSection = (section) => {
    closeMenu(); // Close menu when a link is clicked

    if (route.path !== '/' && section !== '/resume') {
        router.push('/').then(() => {
            setTimeout(() => {
                const target = document.getElementById(section);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
                activeSection.value = section;
            }, 100);
        });
    } else if (section === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        activeSection.value = 'home';
    } else if (section === '/resume') {
        router.push('/resume').then(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            activeSection.value = '/resume';
        });
    } else {
        const target = document.getElementById(section);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        activeSection.value = section;
    }
};

// Update active section based on scroll position
const updateActiveSection = () => {
    const sections = ['home', 'about', 'projects', 'contact'];
    for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                activeSection.value = section;
                break;
            }
        }
    }
};

// Watch route changes
watch(() => route.path, (newPath) => {
    activeSection.value = newPath === '/' ? 'home' : newPath;
});

// Add scroll listener on mount
onMounted(() => {
    if (route.path === '/') {
        window.addEventListener('scroll', updateActiveSection);
    }
});

// Clean up scroll listener on unmount
onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection);
});
</script>

<style scoped>
.nav-link {
    @apply block py-2 px-3 text-gray-900 rounded-sm md:border-0 md:p-0 relative transition-colors duration-300;
}

.nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: transparent;
    transition: background-color 0.3s ease-in-out;
}

.nav-link:hover::after,
.active-link::after {
    background-color: #000000;
}

.active-link {
    @apply border-b-2 border-black;
}
</style>