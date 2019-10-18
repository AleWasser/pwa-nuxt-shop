<template>
    <v-container fluid pt-0>
        <v-row justify="center" align="center" class="text-center">
            <v-col cols="12" class="pa-0">
                <v-img src="/images/joystick.png" aspect-ratio="5"></v-img>
            </v-col>
            <v-col cols="12" class="py-5 my-4">
                <h3 class="display-2">Video Games</h3>
                <v-btn outlined large class="mt-2" color="white" to="/games">Shop now</v-btn>
            </v-col>
            <v-col cols="12" class="pa-0">
                <v-img src="/images/books.jpg" aspect-ratio="5"></v-img>
            </v-col>
            <v-col cols="12" class="py-5 my-4">
                <h3 class="display-2">Books</h3>
                <v-btn outlined large class="mt-2" color="white" to="/books">Shop now</v-btn>
            </v-col>
            <v-col cols="12" class="pa-0">
                <v-img src="/images/phones.jpg" aspect-ratio="5"></v-img>
            </v-col>
            <v-col cols="12" class="py-5 my-4">
                <h3 class="display-2">Phones</h3>
                <v-btn outlined large class="mt-2" color="white" to="/phones">Shop now</v-btn>
            </v-col>
        </v-row>
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
