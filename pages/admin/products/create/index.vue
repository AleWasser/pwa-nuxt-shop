<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h3 class="display-2">Create Product</h3>
            </v-col>
        </v-row>
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
                        <v-row>
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
                                <v-textarea name="description" label="Description"></v-textarea>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-card-actions class="justify-center">
                        <v-btn color="primary">Create</v-btn>
                        <v-btn color="primary">Cancel</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    layout: "admin",
    data() {
        return {
            title: "",
            price: "",
            editions: ["Standard", "Special", "Ultimate"],
            selectedEditions: [],
            countFiles: 0
        };
    },
    methods: {
        selectFile() {
            this.$refs.inputFile.click();
        },
        onFileSelected(event) {
            this.countFiles = event.target.files.length;
        }
    }
};
</script>