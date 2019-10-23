<template>
    <v-container grid-list-xs>
        <h3 class="display-2">Dashboard</h3>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Sales</h3>
                        </div>
                    </v-card-title>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Products</h3>
                        </div>
                    </v-card-title>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Log</h3>
                        </div>
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    layout: "admin"
};
</script>