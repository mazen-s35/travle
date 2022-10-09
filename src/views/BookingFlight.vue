<template>
  <div class="container">
    <h2 class="titleFlight">Booking Flight</h2>
    <form @submit.prevent="" class="stForm">
        <div class="row">
            <div class="col col-md-6 col-sm-1">
                <input class="form-control m-3 te" type="text" placeholder="First Name" v-model="formData.firstName">
                <span class="wrong" v-for="error in v$.firstName.$errors" :key="error.$uid">
                    {{error.$message}}
                </span>
            </div>
            <div class="col col-md-6 col-sm-1">
                <input class="form-control m-3 te" type="text" placeholder="List Name" v-model="formData.lastName">
                <span class="wrong" v-for="error in v$.firstName.$errors" :key="error.$uid">
                    {{error.$message}}
                </span>
            </div>
            <div class="col col-md-6 col-sm-1">
                <input class="form-control m-3 te" type="number" placeholder="Mobile Number" v-model="formData.mobile">
                <span class="wrong" v-for="error in v$.firstName.$errors" :key="error.$uid">
                    {{error.$message}}
                </span>
            </div>
            <div class="col col-md-6 col-sm-1">
                <input class="form-control m-3 te" type="email" placeholder="Email" v-model="formData.email">
                <span class="wrong" v-for="error in v$.firstName.$errors" :key="error.$uid">
                    {{error.$message}}
                </span>
            </div>
            <div class="col col-md-6 col-sm-1">
                <input class="form-control m-3 te" type="text" placeholder="where are you going?" v-model="formData.place">
                <span class="wrong" v-for="error in v$.firstName.$errors" :key="error.$uid">
                    {{error.$message}}
                </span>
            </div>
            <div class="col col-md-6 col-sm-1">
                <input class="form-control m-3 te" type="date" v-model="formData.date">
                <span class="wrong" v-for="error in v$.firstName.$errors" :key="error.$uid">
                    {{error.$message}}
                </span>
            </div>
        <textarea class="form-control" cols="30" rows="10"></textarea>
        <input type="submit" value="Send" class="btn btu" @click="sendBookingFlight">
        </div>
        <div class="done" v-if="done">
            <p>Congratulations, your flight has been successfully booked mr.{{formData.firstName}}</p>
        </div>
    </form>
  </div>
  <FooTer />
</template>

<script>
import FooTer from '@/components/FooTer.vue';
import {required} from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { reactive } from 'vue';

export default {
    name: "BookingFlight",
    components: { FooTer },
    setup () {
        const formData = reactive({
            firstName: '',
            lastName: '',
            email: '',
            mobile: null,
            place: '',
            date: '',
            done: false
        });

        const rules = {
            firstName: {required},
            lastName: {required},
            email: {required},
            mobile: {required},
            place: {required},
            date: {required},
        }

        const v$ = useVuelidate(rules, formData)

        const sendBookingFlight = async () => {
            const result = await v$.value.$validate();
            !formData.done.value;
            if (result) {
                console.log('success, form send')
            } else {
                console.log('error, form send')
            }
        }

        return {
            formData,
            rules,
            sendBookingFlight,
            v$,
        }
    }
}
</script>

<style lang="scss">
    .titleFlight {
        text-align: center;
        color: var(--main-color);
        font: {
            size: 1.3rem;
            weight: bold;
        }
        padding: 8px;
    }
    .stForm {
        // display: flex;
        // flex-wrap: wrap;

        .wrong {
            color: var(--main-color);
            margin-left: 1rem
        }
    }
</style>