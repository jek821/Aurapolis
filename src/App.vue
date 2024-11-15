<template>
  <div id="app">
    <!-- Navigation Header Component -->
    <Header />
    
    <!-- Main Content -->
    <h1>Welcome to Aurapolis</h1>
    <button @click="goToLogin">Login</button>
    
    <!-- Router View - This is where other pages will be displayed -->
    <router-view></router-view>
    
    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
// Component Imports
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { useRouter } from 'vue-router';

export default {
  name: "App",
  
  // Register child components
  components: { 
    Header, 
    Footer 
  },
  
  // Component data (reactive state)
  data() {
    return {
      isLoggedIn: false,
      username: ''
    }
  },
  
  // Methods - functions that can be called from template
  methods: {
    goToLogin() {
      this.$router.push('/login');
    }
  },
  
  // Lifecycle Hooks
  mounted() {
    console.log('App is ready');
  }
}
</script>

<style>
/* Global styles for the app */
#app {
  text-align: center;
  margin-top: 50px;
  font-family: Arial, sans-serif;
}

/* Button styling */
button {
  padding: 10px 20px;
  font-size: 1.2em;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

/* Main heading style */
h1 {
  color: #333;
  margin-bottom: 20px;
}
</style>