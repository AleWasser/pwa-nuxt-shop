<template>
    <v-container grid-list-xs>
        <v-row>
            <v-col cols="12" md="6">
                <v-img :src="product.imageUrl" aspect-ratio="1.1"></v-img>
            </v-col>
            <v-col cols="12" md="6">
                <h4 class="display-1">{{product.title}}</h4>
                <p class="headline">${{product.price}}</p>
                <v-divider></v-divider>
                <v-row align="center">
                    <v-col cols="3">
                        <p class="headline">Edition</p>
                    </v-col>
                    <v-col cols="9">
                        <v-select :items="product.editions"></v-select>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-col>
                    <h5 class="headline pb-2">Description</h5>
                    <p
                        class="body-2"
                    >{{product.description ? product.description : 'No description available'}}</p>
                </v-col>
                <v-col>
                    <v-btn large>Add to cart</v-btn>
                </v-col>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({ getProductById: "products/getProductById" }),
        product() {
            return this.getProductById("-LtPgj91zW3METQBODBq", "games");
        }
    }
};
</script>