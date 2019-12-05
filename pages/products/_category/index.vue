<template>
    <v-container fluid pt-0>
        <app-index-image :category="this.$route.params.category"></app-index-image>
        <v-container grid-list-xl>
            <v-row>
                <v-col cols="12" md="4" v-for="item in products" :key="item.id">
                    <nuxt-link :to="'/products/' + item.category + '/' + item.id" tag="v-card">
                        <v-img :src="item.imageUrl"></v-img>
                        <v-card-title primary-title class="justify-center text-center">
                            <div>
                                <h3 class="headline mb-0">{{item.title}}</h3>
                                <div>${{item.price}}</div>
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

import IndexImage from "~/components/products/IndexImage";

export default {
    components: {
        "app-index-image": IndexImage
    },
    computed: {
        ...mapGetters({
            getProductByCategory: "products/getProductByCategory"
        }),
        products() {
            return this.getProductByCategory(this.$route.params.category);
        }
    }
};
</script>