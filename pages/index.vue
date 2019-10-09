<template>
    <v-container fluid pt-0>
        <v-layout row justify-center align-center text-center>
            <v-flex xs12>
                <v-img src="/images/joystick.png" aspect-ratio="5"></v-img>
            </v-flex>
            <v-flex xs12 py-5 my-4>
                <h3 class="display-2">Video Games</h3>
                <v-btn outlined large class="mt-2" color="white" to="/games">Shop now</v-btn>
            </v-flex>
            <v-flex xs12>
                <v-img src="/images/books.jpg" aspect-ratio="5"></v-img>
            </v-flex>
            <v-flex xs12 py-5 my-4>
                <h3 class="display-2">Books</h3>
                <v-btn outlined large class="mt-2" color="white" to="/books">Shop now</v-btn>
            </v-flex>
            <v-flex xs12>
                <v-img src="/images/phones.jpg" aspect-ratio="5"></v-img>
            </v-flex>
            <v-flex xs12 py-5 my-4>
                <h3 class="display-2">Phones</h3>
                <v-btn outlined large class="mt-2" color="white" to="/phones">Shop now</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
    components: {
        Logo,
        VuetifyLogo
    }
};
</script>
