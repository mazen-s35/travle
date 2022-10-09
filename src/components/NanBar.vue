<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
        <router-link to="/" class="logo navbar-brand d-flex">
            <img src="../assets/images/logo.webp" alt="logo" width="40" height="24" class="align-text-top">
            <h3 class="titleLogo">travel</h3>
        </router-link>
        <button style="background: #fff" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div class="list collapse navbar-collapse" id="navbarText">
            <ul class="links navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link active" to="/DomesticTourism">Domestic Tourism</router-link>
                </li>
                <li>
                    <router-link class="nav-link" to="/ForeignTourism">Foreign Tourism</router-link>
                </li>
                <li>
                    <router-link class="nav-link" to="/PackageTravel">Package Travel</router-link>
                </li>
                <li>
                    <router-link class="nav-link" to="/BookingFlight">booking flight</router-link>
                </li>
                <li>
                    <router-link class="nav-link" to="/BookHotel">Book a hotel</router-link>
                </li>
            </ul>
        </div>
        <div class="icon">
            <input type="text" placeholder="Search"  class="searchShow" v-if="show">
            <span class="material-symbols-outlined" @click="showTrue">search</span>
            <ToggleBtn :mode="mode" @toggle="$emit('toggle')" />
        </div>
    </div>
  </nav>
</template>

<script>
import ToggleBtn from './ToggleBtn.vue';
export default {
  name: 'NavBar',
  components: {ToggleBtn},
  props: ["mode"],
  data() {
    return {
        show: false
    }
  },
  methods: {
    showTrue() {
        this.show = !this.show
    }
  }
};
</script>
<style lang="scss">
    .titleLogo {
        color: var(--main-color)
    }

    li a{
        color: var(--text-par) !important;
        &:hover {
            color: var(--main-color) !important;
        }
    }

    .icon{
        display: flex;
        span {
            margin: 3px;
            color: var(--text-par);
            font-size: 1.7rem;
            cursor: pointer;
            &:hover {
                color: var(--main-color);
                transition: .4s all ease;
            }
        }

        .searchShow {
            border-radius: 1rem;
            margin: 3px;
            border: none;
            outline: none;
            &:focus {
                border: var(--border-main-color);
                padding: 10px;
            }
        }
    }
</style>
