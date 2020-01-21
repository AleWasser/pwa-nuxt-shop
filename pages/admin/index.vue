<template>
    <v-container grid-list-xs>
        <h3 class="display-2">Dashboard</h3>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title primary-title class="pb-0">Stats</v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <client-only>
                                        <my-bar :sales="sales" :height="100"></my-bar>
                                    </client-only>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card>
                    <v-card-title primary-title class="pb-0">Products</v-card-title>
                    <v-card-text>
                        <v-container pt-0>
                            <v-row>
                                <v-col cols="12">
                                    <p>Games: {{products.games}} listed.</p>
                                    <p>Books: {{products.books}} listed.</p>
                                    <p>Phones: {{products.phones}} listed.</p>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card>
                    <v-card-title primary-title class="pb-0">Sales</v-card-title>
                    <v-card-text>
                        <v-container pt-0>
                            <v-row>
                                <v-col cols="12">
                                    <v-list rounded dense flat>
                                        <v-list-item-group>
                                            <v-list-item
                                                v-for="(order, index) in orders"
                                                :key="index"
                                            >
                                                <v-list-item-icon>
                                                    <v-icon>mdi-cash</v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <v-list-item-title>{{order.email}} bought {{order.products.length}} products.</v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list-item-group>
                                    </v-list>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    layout: "admin",
    computed: {
        ...mapGetters({
            orders: "orders/getLastOrders",
            sales: "orders/getSales",
            products: "products/getProductsQuantity"
        })
    }
};
</script>