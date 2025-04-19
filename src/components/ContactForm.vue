<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center relative overflow-hidden">
        <!-- Moving Button -->
        <button @click="handleClick" :class="[
            'absolute px-6 py-3 bg-primary text-white rounded-xl font-bold text-lg transition-all duration-700 ease-in-out',
            moveRight ? 'translate-x-[300px] rotate-6' : 'translate-x-0',
            'z-20'
        ]">
            {{ showForm ? 'Wait for it...' : 'Click Me to Contact 😎' }}
        </button>

        <!-- Contact Form -->
        <transition name="raindrop">
            <div v-if="showForm"
                class="absolute top-20 w-[90%] max-w-md bg-white shadow-xl rounded-2xl p-6 z-10 animate__animated animate__fadeInDown">
                <button @click="handleClose"
                    class="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl font-bold">
                    &times;
                </button>

                <h2 class="text-2xl font-bold mb-3 text-gray-800">📬 Contact Me</h2>
                <p class="text-sm text-gray-500 mb-5">Let’s connect & create something awesome!</p>

                <form @submit.prevent="handleSubmit" class="space-y-4">
                    <input v-model="form.name" type="text" placeholder="Your name"
                        class="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:ring-2 outline-none"
                        required />
                    <input v-model="form.email" type="email" placeholder="Email address"
                        class="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:ring-2 outline-none"
                        required />
                    <textarea v-model="form.message" rows="3" placeholder="Type your message..."
                        class="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:ring-2 outline-none"
                        required></textarea>
                    <button type="submit"
                        class="w-full py-2 bg-primary text-white rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300">
                        Send 🚀
                    </button>
                </form>
                <p v-if="successMessage" class="text-green-500 text-sm mt-2">{{ successMessage }}</p>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const handleClose = () => {
    showForm.value = false;
    moveRight.value = false;
    successMessage.value = '';
};

const showForm = ref(false);
const moveRight = ref(false);
const form = ref({ name: '', email: '', message: '' });
const successMessage = ref('');

const handleClick = () => {
    moveRight.value = true;
    setTimeout(() => {
        showForm.value = true;
    }, 700); // wait for animation
};

const handleSubmit = () => {
    successMessage.value = "Message sent successfully! 🎉";
    form.value = { name: '', email: '', message: '' };
    setTimeout(() => {
        successMessage.value = '';
        showForm.value = false;
        moveRight.value = false;
    }, 3000);
};
</script>

<style scoped>
/* Raindrop Animation */
.raindrop-enter-active {
    animation: dropDown 0.8s ease-out;
}

@keyframes dropDown {
    0% {
        transform: translateY(-200px);
        opacity: 0;
    }

    80% {
        transform: translateY(10px);
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
