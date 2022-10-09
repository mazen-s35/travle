<template>
    <!-- <LoadingPage /> -->
  <div class="container">
    <div class="row">
        <div class="col-6" v-for="hotel in hotels" :key="hotel.id">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                        <div class="col-md-4">
                            <img :src="hotel.img" style="height: 18rem" class="img-fluid rounded-start" alt="hotels">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body clk" @click="openPopup">
                                <h5 class="card-title">{{hotel.name}}</h5>
                                <p class="card-text info">{{hotel.information}}</p>
                                <div class="priceIcon">
                                    <div>
                                        <span class="price">{{hotel.price}}</span>
                                    </div>
                                    <div>
                                        <span class="reating">{{hotel.reat}}</span>
                                        <span class="material-symbols-outlined size">star</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    <DetailsHotel v-if="onPopup" />
  </div>
</template>

<script>
    // import LoadingPage from '@/components/LoadingPage.vue';
import DetailsHotel from '@/components/DetailsHotel.vue';
export default {
    name: 'BookHotel',
    components: { DetailsHotel },
    data() {
        return {
            hotels: [],
            onPopup: false
        };
    },
    mounted() {
        fetch("http://localhost:3000/hotel")
            .then(res => res.json())
            .then(data => this.hotels = data)
            .catch(err => console.log(err.massage));
    },
    methods: {
        openPopup () {
            this.onPopup = !this.onPopup
        }
    }
}
</script>

<style lang="scss">
    .info {
        color: var(--text-par)
    }

    .priceIcon {
        display: flex;
        justify-content: space-between;

        .size {
            font-size: 1.3rem;
            color: gold
        }

        .reating, .price {
            font-size: 1.3rem;
            color: #555;
        }
    }

    .clk {
        cursor: pointer;
    }
</style>