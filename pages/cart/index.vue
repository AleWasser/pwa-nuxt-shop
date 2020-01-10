<template>
    <v-container fluid pt-0>
        <client-only>
            <v-row class="justify-center" v-if="getCartProducts && getCartProducts.length > 0">
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
                    <v-btn color="primary" class="mt-2" @click="dialog = true">Credit card payment</v-btn>
                </v-col>
            </v-row>
            <v-row v-else class="justify-center">
                <v-col cols="8">
                    <v-card>
                        <v-card-title class="justify-center" primary-title>No products in cart</v-card-title>
                    </v-card>
                </v-col>
            </v-row>
            <v-dialog v-model="dialog" width="400">
                <v-card>
                    <v-card-title class="headline justify-center">Payment</v-card-title>

                    <v-card-text class="justify-center">
                        <v-text-field v-model="name" name="name" label="Name" id="name"></v-text-field>
                        <v-text-field v-model="email" name="email" label="Email" id="email"></v-text-field>
                        <label>Credit card</label>
                        <card
                            class="stripe-card"
                            :class="{ complete }"
                            stripe="pk_test_udEPikKSL9kIEASnWD666esf"
                            @change="complete = $event.complete"
                        />
                    </v-card-text>

                    <v-card-actions class="justify-center">
                        <v-btn
                            class="pay-with-stripe primary"
                            @click="pay"
                            :disabled="!complete"
                        >Send</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </client-only>
    </v-container>
</template>

<script>
import { mapGetters } from "vuex";

import { Card, createToken } from "vue-stripe-elements-plus";

export default {
    components: { Card },
    data() {
        return {
            complete: false,
            dialog: false,
            name: "",
            email: ""
        };
    },
    computed: {
        ...mapGetters({
            getCartProducts: "cart/getCartProducts",
            getCartTotal: "cart/getCartTotal"
        })
    },
    methods: {
        pay() {
            createToken()
                .then(res => {
                    let data = {
                        name: this.name,
                        email: this.email,
                        token: res.token
                    };

                    return fetch("/api/invoice", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    });
                })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.$store.dispatch("orders/createOrder", {
                        email: this.email,
                        products: this.getCartProducts
                    });
                    this.$store.dispatch("cart/clearCart");
                    this.$store.commit("setNotification", {
                        text:
                            "Your order has been accepted, an email has been sent to your account",
                        color: "success"
                    });
                    this.dialog = false;
                })
                .catch(err => console.error(err));
        }
    }
};
</script>

<style>
.stripe-card {
    border: 1px solid grey;
    background-color: white;
}
.stripe-card.complete {
    border-color: green;
}
</style>