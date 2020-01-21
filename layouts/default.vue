<template>
    <v-app dark>
        <app-navigation></app-navigation>
        <app-notification></app-notification>
        <v-content>
            <nuxt />
        </v-content>
        <v-footer fixed app>
            <span>&copy; 2020</span>
        </v-footer>
    </v-app>
</template>

<script>
import Navigation from "~/components/navigation/Navigation.vue";
import Notification from "~/components/Notification.vue";

export default {
    components: {
        "app-navigation": Navigation,
        "app-notification": Notification
    }
};
</script>
