<template>
    <v-app-bar dark app>
        <nuxt-link to="/" tag="v-toolbar-title" id="title">Shop</nuxt-link>

        <v-spacer></v-spacer>

        <v-btn v-for="(item,index) in items" :key="index" :to="item.href" text x-large>{{item.text}}</v-btn>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-cart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    text: "Video Games",
                    href: "/games"
                },
                {
                    text: "Movies",
                    href: "/movies"
                },
                {
                    text: "Clothes",
                    href: "/clothes"
                }
            ]
        };
    }
};
</script>

<style scoped>
#title {
    cursor: pointer;
}
</style>