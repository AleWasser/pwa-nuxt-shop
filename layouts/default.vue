<template>
    <v-app dark>
        <app-navigation></app-navigation>
        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>
        <v-footer :fixed="fixed" app>
            <span>&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
import Navigation from "~/components/navigation/Navigation.vue";

export default {
    components: {
        "app-navigation": Navigation
    }
};
</script>
