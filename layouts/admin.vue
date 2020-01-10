<template>
    <v-app>
        <app-notification></app-notification>
        <v-content>
            <v-container>
                <v-row>
                    <v-col cols="2">
                        <app-admin-navigation></app-admin-navigation>
                    </v-col>
                    <v-col cols="10">
                        <nuxt />
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import AdminNavigation from "~/components/navigation/AdminNavigation.vue";
import Notification from "~/components/Notification.vue";

export default {
    middleware: ["check-auth", "auth"],
    components: {
        "app-admin-navigation": AdminNavigation,
        "app-notification": Notification
    }
};
</script>
