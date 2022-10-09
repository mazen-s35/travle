<template>
  <div class="detail" v-if="closeData">
    <span class="material-symbols-outlined close" @click="close">close</span>
    <form @submit.prevent="" class="bookHotel">
      <div>
        <input type="text" class="form-control" placeholder="name" v-model="formData.name">
        <span class="wrong" v-for="error in v$.name.$errors" :key="error.$uid">
            {{error.$message}}
        </span>
      </div>
      <div>
        <input type="email" class="form-control" placeholder="email" v-model="formData.email">
        <span class="wrong" v-for="error in v$.email.$errors" :key="error.$uid">
            {{error.$message}}
        </span>
      </div>
      <div>
        <input type="number" class="form-control" placeholder="mobile" v-model="formData.mobile">
        <span class="wrong" v-for="error in v$.mobile.$errors" :key="error.$uid">
            {{error.$message}}
        </span>
      </div>
      <textarea name="" id="" class="form-control" cols="30" rows="10"></textarea>
      <input type="submit" value="Send" class="btn btu" @click="sendHotel">
    </form>
  </div>
</template>

<script>
  import {required} from '@vuelidate/validators';
  import { useVuelidate } from '@vuelidate/core';
  import { reactive } from 'vue';

export default {
    name: 'DetailsHotel',
    data() {
      return {
        closeData: true
      }
    },
    methods: {
      close() {
        this.closeData = false
      }
    },
    setup () {
        const formData = reactive({
            name: '',
            email: '',
            mobile: null,
        });


        const rules = {
            name: {required},
            email: {required},
            mobile: {required},
        }

        const v$ = useVuelidate(rules, formData)

        const sendHotel = async () => {
            const result = await v$.value.$validate();
            if (result) {
                alert('success, form send');
            } else {
                console.log('error, form send')
            }
        }

        return {
            formData,
            rules,
            sendHotel,
            v$,
        }
    }
}
</script>

<style lang="scss">
  .detail {
    width: 30rem;
    // height: 30rem;
    background-color: #fff;
    position: absolute;
    top: 20rem;
    left: 25rem;



    .close {
      font-size: 1.4rem;
      padding: 6px;
      color: var(--text-par);
      cursor: pointer;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
    }


    .bookHotel {
      padding: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      input {
        padding: 5px;
        margin: 8px;
        width: 100%;
      }
    }
  }

      @media(max-width: 784px) {
  .detail {
    top: 20rem;
    left: 10rem;
  }
}

@media (max-width: 543px) {
  .detail {
    top: 20rem;
    left: 4rem;
    width: 24rem;
  }
}

@media (max-width: 402px) {
.detail {
    top: 20rem;
    left: 2rem;
    width: 24rem;
  }
}
</style>