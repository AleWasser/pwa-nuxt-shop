<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h3 class="display-2">Create Product</h3>
            </v-col>
        </v-row>
        <app-productos-form></app-productos-form>
    </v-container>
</template>

<script>
import Form from "~/components/products/Form.vue";

export default {
    layout: "admin",
    components: {
        "app-productos-form": Form
    }
};
</script>