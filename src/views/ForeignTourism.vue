<template>
  <div class="domestic">
    <h2 class="text-center">Foreign Tourism</h2>
  </div>
  <section class="item container pt-5">
    <div class="row">
        <div class="col package" v-for="item in items" :key="item.id">
          <div class="image">
            <img :src="item.imgFo" alt="Domestic Tourism" style="width: 20rem">
          </div>
          <router-link :to="{name: 'ForeignTourismTrip', params: { id: item.id }}" class="bodyCard">
            <h4 class="titleName">{{item.nameTrForeign}}</h4>
            <span class="price">{{item.price}} egp</span>
            <p class="des">{{item.information}}</p>
          </router-link>
      </div>
    </div>
  </section>
  <FooTer />
</template>

<script>
// import SlideBasteT from "../components/SlideBasteT.vue";
import FooTer from "@/components/FooTer.vue";

export default {
    name: "DomesticTourism",
    data() {
        return {
            items: [],
        };
    },
    mounted() {
        fetch("http://localhost:3000/foreignTourism")
            .then(res => res.json())
            .then(data => this.items = data)
            .catch(err => console.log(err.message));
    },
    components: {  FooTer }
}
</script>

<style lang="scss">
  .domestic {
    background-image: url(https://img.lovepik.com/photo/40006/8309.jpg_wh860.jpg);
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-par);
    height: 100vh;
  }

  .bodyCard {
    .price {
      color: #999;
      font-size: 1rem;
    }
    .des {
      color: var(--text-par);
      font-size: 1.1rem;
      width: 20rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
</style>