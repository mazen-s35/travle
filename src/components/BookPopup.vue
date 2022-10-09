<template>
  <div class="popup" v-if="end">
    <div class="body-popup">
        <span class="text-end" @click="showEnd">X</span>
        <h3 class="text-center pt-2">Late reservation {{item.nameTr}} {{item.nameTrForeign}}</h3>
        <span class="centerPrice">Price: {{item.price}} from/week</span>
        <span class="warning">{{this.warning}}</span>
        <form @submit.prevent="" v-if="endTwo">
            <input type="text" placeholder="name" v-model="form.name">
            <input type="email" placeholder="email" v-model="form.email">
            <input type="tel" placeholder="Phone" v-model="form.phone">
            <textarea cols="30" rows="10" v-model="form.text" name="your feedback"></textarea>
            <input type="submit" value="Send" class="btn but" @click="send">
        </form>
        <div class="con">
            <p class="text" v-if="con">Departure has been booked successfully</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'BookPopup',
    props: ['item', 'pack'],
    data() {
        return {
            end: true,
            endTwo: true,
            form: {
                name: "",
                email: "",
                phone: "",
                text: ""
            },
            warning: "",
            con: false
        }
    },
    methods: {
        showEnd() {
            this.end = false
        },

        send() {
            for(const i in this.form) {
                if(this.form[i] === "") {
                    this.warning = "Please enter the data"
                } else {
                    this.warning = ""
                    this.endTwo = false;
                    this.con = true
                }
            }
        }
    }
}
</script>

<style lang="scss">
    .popup {
        width: 26rem;
        box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.1);
        position: relative;
        
        
        .body-popup {
            position: absolute;
            transform: translate(104%, -77%);
            background-color: #fff;
            .centerPrice,
            .warning {
                font-size: 1.2rem;
                color: var(--text-par);
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .text-end {
                font-size: 1.4rem;
                padding: 10px;
                color: var(--text-par);
                cursor: pointer;
                display: flex;
                align-items: flex-end;
                justify-content: flex-end;
            }
            form {
                display: flex;
                align-items: center;
                flex-direction: column;
                padding: 20px;

                input,
                textarea {
                    margin: 15px;
                    width: 100%;
                    padding: 5px;
                    outline: none;

                    &:focus {
                        box-shadow: 1rem 1rem 1rem var(--main-color);
                    }
                }
                .but {
                        background-color: var(--main-color);
                    }
            }
        }
    }
    .con {
        padding: 20px;
        color: var(--text-par);
        text-align: center;
        font-size: 1.4rem;
    }

    @media (max-width: 858px) {
        .popup .body-popup {
            transform: translate(43%, -76%);
        }
    }

    @media (max-width: 578px) {
        .popup .body-popup {
            transform: translate(14%, -74%);
            width: 21rem;
        }
    }
</style>