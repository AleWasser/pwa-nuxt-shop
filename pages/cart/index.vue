<template>
    <v-container fluid pt-0>
        <client-only>
            <v-row class="justify-center" v-if="getCartProducts.length > 0">
                <v-col cols="12" class="text-center">
                    <h3 class="display-2">Your Cart</h3>
                    ({{getCartProducts.length}} items)
                </v-col>

                <v-col cols="8">
                    <v-card v-for="item in getCartProducts" :key="item.id" class="my-2">
                        <v-list>
                            <v-list-item>
                                <v-list-item-avatar tile>
                                    <v-img :src="item.imageUrl"></v-img>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title>{{item.title}}</v-list-item-title>
                                </v-list-item-content>

                                <v-spacer></v-spacer>

                                <v-list-item-content>
                                    <v-list-item-subtitle>${{item.price}}</v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-action>
                                    <v-btn icon>
                                        <v-icon
                                            color="grey lighten-1"
                                            @click="$store.dispatch('cart/deleteProductCartById',item.id)"
                                        >mdi-delete</v-icon>
                                    </v-btn>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
                <v-col cols="12" class="text-center">
                    <h4 class="display-1">Total: ${{getCartTotal}}</h4>
                    <v-btn color="primary" class="mt-2">Checkout</v-btn>
                </v-col>
            </v-row>
            <v-row v-else class="justify-center">
                <v-col cols="8">
                    <v-card>
                        <v-card-title class="justify-center" primary-title>No products in cart</v-card-title>
                    </v-card>
                </v-col>
            </v-row>
        </client-only>
    </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            getCartProducts: "cart/getCartProducts",
            getCartTotal: "cart/getCartTotal"
        })
    }
};
</script>