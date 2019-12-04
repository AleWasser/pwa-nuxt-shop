<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h3 class="display-2">Edit Product</h3>
            </v-col>
        </v-row>
        <app-productos-edit-form></app-productos-edit-form>
    </v-container>
</template>

<script>
import Form from "~/components/products/EditForm.vue";

export default {
    layout: "admin",
    components: {
        "app-productos-edit-form": Form
    }
};
</script>