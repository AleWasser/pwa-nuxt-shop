<template>
    <v-container grid-list-xs>
        <v-row>
            <v-col cols="12" md="6">
                <v-img src="/images/red_dead.jpg" aspect-ratio="1.1"></v-img>
            </v-col>
            <v-col cols="12" md="6">
                <h4 class="display-1">Red Dead Redemption 2</h4>
                <p class="headline">$40</p>
                <v-divider></v-divider>
                <v-row align="center">
                    <v-col cols="3">
                        <p class="headline">Edition</p>
                    </v-col>
                    <v-col cols="9">
                        <v-select></v-select>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-col>
                    <h5 class="headline pb-2">Descripcion</h5>
                    <p
                        class="body-2"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga delectus repellat et repellendus earum reprehenderit rem, distinctio expedita ipsum ducimus eos possimus obcaecati veritatis culpa. Exercitationem earum quam ullam nesciunt.In reiciendis perspiciatis maiores dolorem voluptate accusamus doloribus dolores mollitia blanditiis distinctio iure magnam, odit repellendus facere sed odio vel voluptas eveniet tempore iusto asperiores. Neque adipisci ex provident exercitationem.</p>
                </v-col>
                <v-col>
                    <v-btn large>Add to cart</v-btn>
                </v-col>
            </v-col>
        </v-row>
    </v-container>
</template>