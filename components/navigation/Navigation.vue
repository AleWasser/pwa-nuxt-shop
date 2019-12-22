<template>
    <div>
        <v-app-bar dark app>
            <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <nuxt-link to="/" tag="v-toolbar-title" id="title">Shop</nuxt-link>

            <v-spacer></v-spacer>

            <v-btn
                v-for="(item,index) in items"
                :key="index"
                :to="item.href"
                text
                x-large
                class="d-none d-md-flex"
            >{{item.text}}</v-btn>

            <v-spacer></v-spacer>

            <v-btn icon to="/cart" class="mr-5">
                <client-only>
                    <v-badge bottom>
                        <template
                            v-slot:badge
                            v-if="cartProducts && cartProducts.length > 0"
                        >{{cartProducts.length}}</template>
                        <v-icon>mdi-cart</v-icon>
                    </v-badge>
                </client-only>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute style="z-index: 99" temporary>
            <v-list dense>
                <v-list-item v-for="item in items" :key="item.title" link :to="item.href">
                    <!-- <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>-->

                    <v-list-item-content>
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            items: [
                {
                    text: "Video Games",
                    href: "/products/games"
                },
                {
                    text: "Books",
                    href: "/products/books"
                },
                {
                    text: "Phones",
                    href: "/products/phones"
                }
            ]
        };
    },
    computed: {
        cartProducts() {
            return this.$store.getters["cart/getCartProducts"];
        }
    }
};
</script>

<style scoped>
#title {
    cursor: pointer;
}
</style>