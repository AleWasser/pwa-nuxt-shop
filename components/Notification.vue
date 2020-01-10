<template>
    <v-snackbar v-model="snackbar" right top :color="notification.color" v-if="notification">
        {{notification.text}}
        <v-btn color="black" icon @click.native="snackbar = false">
            <v-icon>mdi-close</v-icon>
        </v-btn>
    </v-snackbar>
</template>
<script>
export default {
    data() {
        return {
            snackbar: false
        };
    },
    computed: {
        notification() {
            let notificaciones = { ...this.$store.getters.getNotification };
            if (Object.keys(notificaciones).length > 0) {
                this.snackbar = true;
                return notificaciones;
            }
        }
    }
};
</script>