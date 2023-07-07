<template>
    <div>

        <div id="slideOutAnimation" class="container">
            <div id="rowTest" class="row">
                <div id="cardTest" class=" card" v-for="test in testimonials" :key="test.id" style="width: 18rem;">
                    <img :src="test.image" style="width:16rem; margin:9px auto">
                    <div id="testTextBody" class="card-body">
                        <h5 class="card-title">{{ test.name }}</h5>
                        <p class="card-textTest">{{ test.msg }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        testimonials() {
            return this.$store.state.testimonials
        }
    },
    mounted() {
        this.$store.dispatch('fetchTestimonials')
    }


}
</script>

<style scoped>
#testTextBody {
    width: 16rem;

}

#rowTest {
    margin: 40px auto;
    width: 70rem;
}

#cardTest {
    margin: 3px auto;
}

@media only screen and (max-width:310px) {

    img {
        width: 9rem;
        margin: 9px auto;

    }

    #row {
        margin: auto;
        width: 15rem;
    }


}

@media only screen and (max-width:1200px) {
    #rowTest {
        margin: auto;
        width: 40rem;
    }
}

@media only screen and (max-width:764px) {
    #rowTest {
        margin: auto;
        width: 30rem;
    }
}

@media only screen and (max-width:480px) {
    #rowTest {
        margin: auto;
        width: auto;
    }
}
</style>