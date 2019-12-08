<template>
    <v-navigation-drawer fixed>
        <v-list>
            <v-list-item v-for="item in items" :key="item.title" link :to="item.href" exact>
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <template v-slot:append>
            <div class="pa-2">
                <v-btn block @click="$store.dispatch('user/logout')">Logout</v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    title: "Dashboard",
                    icon: "mdi-monitor-dashboard",
                    href: "/admin"
                },
                {
                    title: "Products",
                    icon: "mdi-shopping",
                    href: "/admin/products"
                }
            ]
        };
    }
};
</script>