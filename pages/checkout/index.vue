<template>
    <v-container fluid pt-0>
        <client-only>
            <v-row class="justify-center" v-if="getCartProducts.length > 0">
                <v-container>
                    <v-row>
                        <v-col cols="12" class="text-center">
                            <h3 class="display-2">Checkout</h3>
                        </v-col>
                        <v-col cols="12">
                            <v-card>
                                <v-container>
                                    <v-row>
                                        <v-col cols="6">
                                            <v-text-field name="name" label="label" id="id"></v-text-field>
                                            <v-text-field name="name" label="label" id="id"></v-text-field>
                                        </v-col>

                                        <v-col cols="6">
                                            <v-text-field name="name" label="label" id="id"></v-text-field>
                                            <v-text-field name="name" label="label" id="id"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-col>

                        <v-col cols="12" class="text-center">
                            <v-btn color="success">Start payment</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
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