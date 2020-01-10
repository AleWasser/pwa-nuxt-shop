<template>
    <form action="#" method="post" @submit.prevent="onSubmit" enctype="multipart/form-data">
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-container>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field name="title" v-model="title" label="Title"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field name="price" v-model="price" label="Price"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row v-if="category == 'games'">
                            <v-col cols="12">
                                <v-select
                                    v-model="selectedEditions"
                                    :items="editions"
                                    label="Select editions"
                                    multiple
                                    chips
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-btn color="success" @click="selectFile">Select an image</v-btn>
                                <p class="d-inline ml-2" v-if="countFiles == 1">Archivo Cargado</p>
                                <input
                                    type="file"
                                    ref="inputFile"
                                    class="d-none"
                                    @change="onFileSelected"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-textarea
                                    v-model="description"
                                    name="description"
                                    label="Description"
                                ></v-textarea>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-card-actions class="justify-center">
                        <v-btn color="primary" type="submit">Create</v-btn>
                        <v-btn color="primary" to="/admin/products">Cancel</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data() {
        return {
            title: "",
            price: "",
            description: "",
            category: this.$route.params.category,
            editions: ["Standard", "Special", "Ultimate"],
            image: null,
            selectedEditions: [],
            countFiles: 0
        };
    },
    methods: {
        ...mapActions({
            createProduct: "products/createProduct"
        }),
        selectFile() {
            this.$refs.inputFile.click();
        },
        onFileSelected(event) {
            this.countFiles = event.target.files.length;
            this.image = event.target.files[0];
        },
        onSubmit() {
            let data = {
                title: this.title,
                price: this.price,
                description: this.description,
                editions: this.selectedEditions,
                category: this.category,
                image: this.image
            };
            this.createProduct(data);
        }
    }
};
</script>