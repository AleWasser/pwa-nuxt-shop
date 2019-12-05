<template>
    <v-row justify="center" align="center" class="text-center">
        <v-col cols="12" class="pa-0">
            <v-img src="/images/joystick.png" aspect-ratio="5" v-if="category == 'games'"></v-img>
            <v-img src="/images/phones.jpg" aspect-ratio="5" v-else-if="category == 'phones'"></v-img>
            <v-img src="/images/books.jpg" aspect-ratio="5" v-else-if="category == 'books'"></v-img>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: ["category"]
};
</script>