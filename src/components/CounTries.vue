<template>
  <div class="container pt-5">
    <div class="row">
        <div class="col cards">
            <img src="../assets/images/Brazil.jpg" alt="">
            <div class="text">
                <h4 class="title">brazil</h4>
                <router-link class="btn button" to="/ForeignTourism">book now</router-link>
            </div>
        </div>

        <div class="col cards">
            <img src="../assets/images/island.jpg" alt="">
            <div class="text">
                <h4 class="title">island</h4>
                <router-link class="btn button" to="/ForeignTourism">book now</router-link>
            </div>
        </div>

        <div class="col cards">
            <img src="../assets/images/spain.jpg" alt="">
            <div class="text">
                <h4 class="title">spain</h4>
                <router-link class="btn button" to="/ForeignTourism">book now</router-link>
            </div>
        </div>

        <div class="col cards">
            <img src="../assets/images/Portugal.webp" alt="">
            <div class="text">
                <h4 class="title">Portugal</h4>
                <router-link class="btn button" to="/ForeignTourism">book now</router-link>
            </div>
        </div>

        <div class="col cards">
            <img src="../assets/images/Greek.jpg" alt="">
            <div class="text">
                <h4 class="title">Greek</h4>
                <router-link class="btn button" to="/ForeignTourism">book now</router-link>
            </div>
        </div>

        <div class="col cards">
            <img src="../assets/images/England.jpg" alt="">
            <div class="text">
                <h4 class="title">England</h4>
                <router-link class="btn button" to="/ForeignTourism">book now</router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.cards {
    margin: 0;
    padding: 0;
img {
    object-fit: cover;
    position: relative;
    width: 22rem;
    height: 22rem;
}

    .text {
        position: absolute;
        // top: 75rem;
        // right: 63rem;
        transform: translate(116%, -280%);
    }

    .button {
      background: var(--main-color);
    }

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
}


</style>