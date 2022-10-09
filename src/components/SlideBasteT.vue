<template>
  <h4 class="text-center pt-4 head">the baste in travel</h4>
  <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="baste in bastes" :key="baste.id">
      <div class="card" style="width: 20rem; height: 15rem;">
  <img :src="baste.img" class="card-img-top" alt="Baste Travel">
  <div class="card-body">
    <h5 class="card-title title">{{baste.title}}</h5>
    <div class="reat space">
        <span class="price">from{{baste.price}}egp/week</span>
        <div class="tkyym">
          <span class="reat">{{baste.reat}}</span>
          <span class="material-symbols-outlined" id="start">star</span>
        </div>
      </div>
  </div>
</div>
    </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      bastes: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/basteTravel')
    .then(res => res.json())
    .then(data => this.bastes = data)
    .catch(err => console.log(err.message));
  },
  setup() {
    return {
      modules: [Pagination],
      
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 80%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* background: #fff; */
  text-align: left;
  border-radius: 15px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.title {
  font-size: 1.2rem;
  color: var(--main-color);
  text-align: left;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 50%;
  object-fit: cover;
}

.head {
  color: var(--main-color);
  font-size: 1.3rem;
  font-weight: bold;
}

.price {
  font-size: 1rem;
  color: var(--text-par)
}

.tkyym .reat {
  font-size: 1.3rem;
  color: #000;
}

.tkyym #start {
  color: gold;
}

.space {
  display: flex;
  justify-content: space-between;
}

</style>