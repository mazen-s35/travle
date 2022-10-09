<template>
  <div class="container">
    <div class="row row-cols-lg-2 row-cols-sm-1">
        <div class="tf2syl col pt-5">
            <h4>details</h4>
            <div class="image">
                <img :src="pack.img" style="width: 100%" alt="PackageTravelTrip">
            </div>
            <div class="text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error odio quo consequatur beatae quae ad nemo velit earum quibusdam reiciendis facere dolores corporis, temporibus excepturi.</p>
                <p>{{pack.offer}}</p>
                <span>price: {{pack.price}}</span>
            </div>
        </div>
        <div class="col p-5" >
            <h5>Reserve your place</h5>
            <span>{{this.error}}</span>
            <form @submit.prevent="" v-if="notShow">
                <input type="text" class="form-control m-2" placeholder="name" v-model="data.nameOne" required>
                <input type="email" class="form-control m-2" placeholder="email" v-model="data.emailOne" required>
                <input type="number" class="form-control m-2" placeholder="mobile number" v-model="data.mobileOne" required>
                <textarea name="notes" class="form-control m-2" id="" cols="30" rows="10" v-model="data.notesOne"></textarea>
                <input type="submit" class="btn btu" value="Send" @click="sendPackage">
            </form>
        </div>
        
    </div>
    <div class="tm" v-if="onShow">Congratulations.. Your flight has been successfully booked</div>
  </div>
</template>

<script>
export default {
    name: 'PackageTravelTrip',
    props: ['id'],
    data() {
        return {
            pack: [],
            notShow: true,
            onShow: false,
            data: {
                nameOne: '',
                emailOne: '',
                mobileOne: null,
                notesOne: ''
            },
            error: ''
        }
    },
    methods: {
        sendPackage() {
            for(const i in this.data) {
                if(this.data[i] === "") {
                    this.error = 'Pleas all input required';
                } else {
                    this.notShow = false;
                    this.onShow = true;
                }
            }
        }
    },
    mounted() {
        fetch("http://localhost:3000/packageOffers/" + this.id)
            .then(res => res.json())
            .then(data => this.pack = data)
            .catch(err => console.log(err.massage));
    },
}
</script>

<style lang="scss">
    .tf2syl {
        h4 {
            color: var(--main-color);
            font-size: 1.4rem;
            line-height: 1.5;
        }

        .text {
            p {
                color: var(--text-par);
                font-size: 1.2rem;
                line-height: 1.6;
            }

            span {
                color: #000;
                font-size: 1.2rem;
                line-height: 1.6;
            }
            
        }
        
    }
    .btu {
            background-color: var(--main-color);
            color: #fff;
            margin: 10px;
        }

        h5 {
            color: var(--main-color);
            font-size: 1.4rem;
            line-height: 1.5;
        }
</style>