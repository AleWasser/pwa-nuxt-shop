<template>
    <v-container fluid pt-0>
        <v-row class="justify-center">
            <v-col cols="6">
                <form action="#" @submit.prevent="onSubmit">
                    <v-card>
                        <v-card-title primary-title>Login</v-card-title>
                        <v-card-text>
                            <v-text-field v-model="email" name="email" label="Email" id="email"></v-text-field>
                            <v-text-field
                                v-model="password"
                                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show ? 'text' : 'password'"
                                name="password"
                                label="Password"
                                class="input-group--focused"
                                @click:append="show = !show"
                            ></v-text-field>
                        </v-card-text>
                        <v-card-actions class="justify-center">
                            <v-btn large color="primary" type="submit">Login</v-btn>
                        </v-card-actions>
                    </v-card>
                </form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data() {
        return {
            show: false,
            email: "",
            password: ""
        };
    },
    methods: {
        ...mapActions({
            userLogin: "user/userLogin"
        }),
        onSubmit() {
            this.userLogin({
                email: this.email,
                password: this.password
            }).then(() => this.$router.push("/admin"));
        }
    }
};
</script>