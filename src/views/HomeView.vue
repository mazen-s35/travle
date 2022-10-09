<template>
  <main class="home">
    <div class="container">
      <h1 class="text-center">find your adventure</h1>
      <router-link class="btn button" to="/BookingFlight">book now</router-link>
    </div>
  </main>

  <CounTries />

  <!-- Why Book Here Section -->
  <section class="container-fluid pt-5 bookWhy">
    <h3 class="text-center">Why book with Travel?</h3>
    <div class="row center">
      <div class="col">
        <span class="material-symbols-outlined">handshake</span>
        <h5 class="title">Best offers and trips</h5>
        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sapiente, sint earum reprehenderit iusto provident.</p>
      </div>
      <div class="col">
        <span class="material-symbols-outlined">diamond</span>
        <h5 class="title">Hotels of the highest standard</h5>
        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sapiente, sint earum reprehenderit iusto provident.</p>
      </div>
      <div class="col">
        <span class="material-symbols-outlined">public</span>
        <h5 class="title">Organizing trips all over the world</h5>
        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sapiente, sint earum reprehenderit iusto provident.</p>
      </div>
    </div>
  </section>


  <section class="trips container pt-5">
    <div class="row">
      <div class="col">
        <div class="image">
          <img src="../assets/images/England.jpg" alt="trips" @click="openShow">
        </div>
        <div class="bodyTrips" v-if="show">
          <h4>trips england</h4>
          <span class="price">5000$</span>
          <p class="TripDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur temporibus quas fugit, perspiciatis nam nemo commodi soluta ad blanditiis impedit?</p>
        </div>
      </div>
      <div class="col m-2">
          <div class="image">
          <img src="https://www.fluentu.com/blog/german/wp-content/uploads/sites/5/2014/07/speicherstadt-hamburg-133560662-1024x682.jpg" alt="trips" @click="openShow">
        </div>
        <div class="bodyTrips" v-if="show">
          <h4>trips germany </h4>
          <span class="price">4500$</span>
          <p class="TripDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur temporibus quas fugit, perspiciatis nam nemo commodi soluta ad blanditiis impedit?</p>
        </div>
      </div>
      <div class="col m-2">
          <div class="image">
          <img src="https://cdn2.civitatis.com/portugal/lisboa/guia/plaza-comercio-grid-m.jpg" alt="trips" @click="openShow">
        </div>
        <div class="bodyTrips" v-if="show">
          <h4>trips Portugal </h4>
          <span class="price">7500$</span>
          <p class="TripDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur temporibus quas fugit, perspiciatis nam nemo commodi soluta ad blanditiis impedit?</p>
        </div>
      </div>
      <div class="col m-2">
          <div class="image">
          <img src="https://thumbs.dreamstime.com/b/amazing-morning-view-mont-saint-michel-abbey-one-most-famous-tourist-attractions-france-landscape-photo-120580165.jpg" alt="trips" @click="openShow">
        </div>
        <div class="bodyTrips" v-if="show">
          <h4>trips Island </h4>
          <span class="price">8000$</span>
          <p class="TripDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur temporibus quas fugit, perspiciatis nam nemo commodi soluta ad blanditiis impedit?</p>
        </div>
      </div>
      <div class="col m-2">
          <div class="image">
          <img src="https://www.traveldom.com/uploads/cms/images/1646798230_02.jpg" alt="trips" @click="openShow">
        </div>
        <div class="bodyTrips" v-if="show">
          <h4>trips Greek </h4>
          <span class="price">2500$</span>
          <p class="TripDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur temporibus quas fugit, perspiciatis nam nemo commodi soluta ad blanditiis impedit?</p>
        </div>
      </div>
      <div class="col m-2">
          <div class="image">
          <img src="https://maketimetoseetheworld.com/wp-content/uploads/2020/07/Seville-Plaza-Espana.jpg" alt="trips" @click="openShow">
        </div>
        <div class="bodyTrips" v-if="show">
          <h4>trips Spain </h4>
          <span class="price">1500$</span>
          <p class="TripDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur temporibus quas fugit, perspiciatis nam nemo commodi soluta ad blanditiis impedit?</p>
        </div>
      </div>
    </div>
  </section>

<section class="services pt-5">
  <div class="container">
    <div class="row">
      <div class="col">
        <h3 class="titleSer">Services</h3>
        <p class="textSer">
          The tourism company has the honor to provide several services to facilitate matters for tourism in all parts of the world, for example.
Hajj and Umrah arena, medical tourism, international tourism in South America, North America and Germany, and exotic tourism in all of Egypt.
We offer you other services, such as booking airline tickets, booking visas and booking hotels.
        </p>
      </div>
      <div class="col">
        <img src="../assets/images/logo.webp" alt="LogoServices" style="width: 60%; height: 80%"/>
      </div>
    </div>
  </div>
</section>


<div class="news p-5">
  <div class="container">
    <div class="row">
    <div class="col">
      <h3>get updates & more</h3>
    </div>
    <div class="col d-flex">
      <input class="form-control" style="width: 40%" type="text" placeholder="get more">
      <button class="btn colorBtn m-1">send</button>
    </div>
  </div>
</div>
  </div>
  

  <FooTer />

</template>

<script>
import CounTries from '@/components/CounTries.vue';
import FooTer from '@/components/FooTer.vue';
export default {
  name: "HomeView",
  components: { CounTries, FooTer, },
  data () {
    return {
      show: false
    }
  },
  methods: {
    openShow() {
      this.show = !this.show
    }
  }
};
</script>

<style lang="scss">
  .home {
    background-image: url(../assets/images//headerSlider.webp);
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-par);

    .button {
      background: var(--main-color);
      display: block;
      width: 20%;
      margin: 10px auto;
    }
    .button:hover {
      opacity: .5;
    }
  }

  .searchBar {
    background-color: #eef2e657;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8rem 0;

    .btnColor {
      background-color: var(--main-color);
      color: var(--text-par);
      margin-left: 10px;
    }
  }

  .bookWhy {
    background-color: #5a8f7bfb;
    margin-top: 1.5rem;
  }
  .center {
    text-align: center;

    span {
      font-size: 10rem;
      color: var(--text-par);
      &:hover {
        color: rgb(13, 175, 13)
      }
    }

    .title {
      font-size: 1.2rem;
      color: #777;
    }

    .text {
      font-size: 1rem;
      line-height: 1.5;
      color: #eee;
    }
  }
  

  .image {
    position: relative;
    img {
      width: 20rem;
      height: 20rem;
      object-fit: cover;
      cursor: pointer;
    }
  }

  .bodyTrips {
    position: absolute;
    transform: translate(0%, -94%);
    background: #fff;
    width: 20rem;
    transition: .3s all ease;

    h4 {
      color: var(--main-color);
      font-weight: bold;
      font-size: 1.2rem;
    }

    .price {
      color: #000;
    }

    .TripDescription {
      color: var(--text-par);
      font-size: 1rem;
    }
  }

  .titleSer {
    color: var(--main-color);
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.3;
  }

  .textSer {
    color: var(--text-par);
    font-size: 1.2rem;
    line-height: 1.6;
  }

  .news {
    background-color: #eee;

    .colorBtn {
      background: var(--main-color);
      color: var(--text-light);
    }
  }


</style>