<template>
    <form action="#" method="post" @submit.prevent="onSubmit" enctype="multipart/form-data">
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-container>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field
                                    name="title"
                                    id="title"
                                    :value="getProduct.title"
                                    label="Title"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field
                                    name="price"
                                    id="price"
                                    :value="getProduct.price"
                                    label="Price"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row v-if="category == 'games'">
                            <v-col cols="12">
                                <v-select
                                    :value="getProduct.editions"
                                    :items="editions"
                                    @change="onChange"
                                    id="editions"
                                    label="Select editions"
                                    multiple
                                    chips
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row class="justify-center text-center">
                            <v-img
                                :src="getProduct.imageUrl"
                                max-width="300"
                                max-height="300"
                                class="mb-2"
                            ></v-img>
                            <v-col cols="12">
                                <v-btn color="success" @click="selectFile">Select an image</v-btn>
                                <p class="d-inline ml-2" v-if="countFiles == 1">Archivo Cargado</p>
                                <input
                                    type="file"
                                    ref="inputFile"
                                    class="d-none"
                                    id="image"
                                    @change="onFileSelected"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-textarea
                                    :value="getProduct.description"
                                    name="description"
                                    id="description"
                                    label="Description"
                                ></v-textarea>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-card-actions class="justify-center">
                        <v-btn color="primary" type="submit">Edit</v-btn>
                        <v-btn color="primary" to="/admin/products">Cancel</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data() {
        return {
            category: this.$route.params.category,
            editions: ["Standard", "Special", "Ultimate"],
            image: null,
            selectedEditions: [],
            countFiles: 0
        };
    },
    computed: {
        ...mapGetters({
            getProductById: "products/getProductById"
        }),
        getProduct() {
            return this.getProductById(
                this.$route.params.id,
                this.$route.params.category
            );
        }
    },
    methods: {
        ...mapActions({
            editProduct: "products/editProduct"
        }),
        selectFile() {
            this.$refs.inputFile.click();
        },
        onFileSelected(event) {
            this.countFiles = event.target.files.length;
            this.image = event.target.files[0];
        },
        onChange(e) {
            this.selectedEditions = e;
        },
        onSubmit() {
            let data = {
                id: this.getProduct.id,
                title: document.getElementById("title").value,
                price: document.getElementById("price").value,
                description: document.getElementById("description").value,
                editions: this.selectedEditions,
                category: this.category,
                image: this.image
            };
            this.editProduct(data);
        }
    }
};
</script>