<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h3 class="display-2">
                    Products
                    <v-menu offset-y>
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" dark v-on="on">Add product</v-btn>
                        </template>
                        <v-list>
                            <v-list-item
                                v-for="(item, index) in categories"
                                :key="index"
                                @click
                                :to="'/admin/products/' + item + '/create'"
                            >
                                <v-list-item-title>{{ item }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </h3>
            </v-col>
            <v-col cols="12">
                <v-card>
                    <v-card-title>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search product"
                            single-line
                        ></v-text-field>
                    </v-card-title>
                    <v-data-table :headers="headers" :items="getProducts" :search="search">
                        <template v-slot:item.action="{ item }">
                            <v-btn icon small :to="'/products/' + item.category + '/' + item.id">
                                <v-icon>mdi-eye</v-icon>
                            </v-btn>
                            <v-btn icon small :to="'products/' +item.category + '/edit/' + item.id">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn icon small>
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    layout: "admin",
    data() {
        return {
            search: "",
            headers: [
                {
                    text: "Title",
                    value: "title"
                },
                { text: "Category", value: "category" },
                { text: "Price", value: "price" },
                { text: "Actions", value: "action", sortable: false }
            ],
            categories: ["games", "books", "phones"]
        };
    },
    computed: {
        ...mapGetters({
            getProducts: "products/getProducts"
        })
    }
};
</script>