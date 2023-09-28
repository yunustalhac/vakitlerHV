<!--BİSMİLLAH-->
<template>
  <input @keydown.enter="post" type="text" v-model="title">

  <div class="select-none  p-5 m-auto">
    <div class="text-right mr-5 mt-3 text-3xl">{{ clock }}</div>
    <div class="mt-10 flex flex-col">
      <select class="t appearance-none text-3xl outline-0 text-center flex m-auto active:border-gray-500">
        <option v-for="item in cities" :key="item.id" :value="item.id">{{ item.name }}</option>
      </select>
      <select class="t appearance-none outline-0 text-center flex m-auto active:border-gray-500 mb-5">
        <option v-for="item in cities" :key="item.id" :value="item.id">{{ item.name }}</option>
      </select>
      <div class="grid grid-cols-3 gap-5 ml-3 mr-3">
        <div v-for="i in 6" :key="i" class="flex items-center rounded-xl h-40 bg-gray-300">
          <div class="flex justify-center w-full">
            <div class="flex items-center w-full justify-around">
              <h3 class=" text-4xl">sabah</h3>
              <p class="text-3xl">3:27</p>
            </div>
          </div>
        </div>
      </div>
      <div
          class="flex w-full bg-gradient-to-r from-sky-500 to-cyan-500 rounded-3xl mt-5  justify-center justify-around items-center">
        <h2 class="text-5xl">sabah</h2>
        <img src="@/assets/hayrat.png" alt="logo">
        <h2 class="text-5xl">0:30</h2>
      </div>
    </div>
  </div>

</template>


<script setup>
import moment from "moment"
import {onMounted, ref, inject} from "vue";

const title = ref()
const name = ref([])
const appAxios = inject("appAxios")
const clock = ref()
const cities = ref([])
const updateClock = () => {
  const currentTime = moment().format('HH:mm');
  clock.value = currentTime

};

onMounted(() => {
  updateClock();
});

setInterval(() => {
  updateClock();
}, 1500);

appAxios.get("http://localhost:3000/city").then(response_city => {
  console.log(response_city)
  cities.value = response_city.data || []
})


</script>