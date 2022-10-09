<template>
  <div class="package">
    <div class="container">
        <div class="row">
            <div class="newCard col m-3" v-for="pack in packs" :key="pack.id">
                <div class="card" style="width: 20rem; height: 18rem;">
                    <img :src="pack.img" class="card-img-top stImg" alt="PackageTravel">
                    <div class="card-body">
                        <p class="card-text colorTex">{{pack.offer}}</p>
                        <router-link :to="{ name: 'PackageTravelTrip', params: { id: pack.id }}" class="btn btu" @click="onShowPopup">Book Offer</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  <FooTer />
</template>

<script>
import FooTer from '@/components/FooTer.vue';
export default {
    name: "PackageTravel",
    data() {
        return {
            packs: [],
            offShow: false
        };
    },
    mounted() {
        fetch("http://localhost:3000/packageOffers")
            .then(res => res.json())
            .then(data => this.packs = data)
            .catch(err => console.log(err.massage));
    },
    methods: {
        onShowPopup() {
            this.offShow = true
        }
    },
    components: { FooTer }
}
</script>

<style lang="scss">
    .newCard {
        width: 18rem !important;
        // background: #fff;

        .stImg {
            display: block;
            width: 100%;
            height: 50%;
            object-fit: cover;
        }

        .colorTex {
            color: #555;
        }

        .btu {
            background: var(--main-color);
            color: #fff;
            margin: 0;
        }
    }
</style>