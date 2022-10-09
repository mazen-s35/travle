<template>
    <header>
        <div class="img">
        <img :src="item.img" alt="DomesticTourismFromTrip">
        </div>
    </header>
    <main class="details container pt-4">
        <div class="row">
            <div class="col p-5">
                <h5 class="titleDetails">details adventure {{item.nameTr}}</h5>
                <p class="text">
                    {{item.information}}
                </p>
                <button class="btn book" @click="onPopup">Book Now</button>
            </div>
            <div class="col">
                <img src="../assets/images/logo.webp" style="width: 20rem; height: 18rem" alt="">
            </div>
        </div>
    </main>
    <BookPopup :item="item" v-if="off" />

    <FooTer />
</template>

<script>
import BookPopup from '@/components/BookPopup.vue';
import FooTer from '@/components/FooTer.vue';
export default {
    name: "DomesticTourismFromTrip",
    props: ["id"],
    data() {
        return {
            item: [],
            off: null
        };
    },
    mounted() {
        fetch("http://localhost:3000/domesticTourism/" + this.id)
            .then(res => res.json())
            .then(data => this.item = data)
            .catch(err => console.log(err.message));
    },
    methods: {
        onPopup() {
            this.off = !this.off;
        }
    },
    components: { BookPopup, FooTer }
}
</script>

<style lang="scss">
    header{
        .img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .details {
        .titleDetails {
            color: var(--main-color);
            font-size: 1.4rem;
            font-weight: bold;
            line-height: 1.6;
        }

        .text {
            color: var(--text-par);
            font-size: 1.1rem;
            line-height: 1.5;
        }

        .book {
            color: #fff;
            background: var(--main-color);
        }
    }
</style>