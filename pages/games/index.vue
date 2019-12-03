<template>
    <v-container fluid pt-0>
        <v-row justify="center" align="center" class="text-center">
            <v-col cols="12" class="pa-0">
                <v-img src="/images/joystick.png" aspect-ratio="5"></v-img>
            </v-col>
        </v-row>
        <v-container grid-list-xl>
            <v-row>
                <v-col cols="12" md="4" v-for="game in games" :key="game.id">
                    <nuxt-link :to="'/games/' + game.id" tag="v-card">
                        <v-img :src="game.imageUrl"></v-img>
                        <v-card-title primary-title class="justify-center text-center">
                            <div>
                                <h3 class="headline mb-0">{{game.title}}</h3>
                                <div>${{game.price}}</div>
                            </div>
                        </v-card-title>
                    </nuxt-link>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    computed: mapGetters({
        games: "products/getGames"
    })
};
</script>