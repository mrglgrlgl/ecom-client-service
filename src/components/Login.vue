<template>
    <v-card
      class="mx-auto"
      max-width="344"
      title="User Login"
    >
      <v-container>
  
        <v-form ref="loginForm" v-model="valid">
          <v-text-field
            v-model="email"
            color="primary"
            label="Email"
            variant="underlined"
            :rules="[rules.required, rules.email]"
          ></v-text-field>
  
          <v-text-field
            v-model="password"
            color="primary"
            label="Password"
            placeholder="Enter your password"
            variant="underlined"
            type="password"
            :rules="[rules.required]"
          ></v-text-field>
  
          <v-divider></v-divider>
  
          <v-card-actions class="justify-center">
            <v-btn color="success" type="submit" @click="login" :disabled="!valid">
              Login  
              <v-icon icon="mdi-chevron-right" end></v-icon>
            </v-btn>
          </v-card-actions>
        </v-form>
  
      </v-container>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  const password = ref('')
  const valid = ref(false)
  
  const rules = {
    required: (value) => !!value || "This field is required.",
    email: (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "E-mail must be valid.",
  };
  
  const login = async () => {
    if (valid.value) {
      console.log('Login attempt with credentials:', {
        email: email.value,
        password: password.value,
      });
  
      try {
        // Example API call to authenticate user
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email.value, password: password.value }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Login successful:', data);
          // Handle successful login logic here (e.g., redirect to dashboard)
        } else {
          console.error('Login failed:', response.statusText);
          // Handle failed login logic here (e.g., show error message)
        }
      } catch (error) {
        console.error('Error during login:', error);
        // Handle error during login here (e.g., show error message)
      }
    }
  };
  </script>
  