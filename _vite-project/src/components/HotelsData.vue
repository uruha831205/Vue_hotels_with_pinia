<script setup>
import { useHotelsStore } from "../stores/hotelData.js";
import { ref, reactive, computed } from "vue";
import { storeToRefs } from "pinia";

const hotelsData = useHotelsStore();
const { hotels } = storeToRefs(hotelsData);
</script>

<template>
  <div class="titie">
    <v-icon icon="mdi-bed" style="margin-right: 5px" />
    <h2>房間資料</h2>
  </div>
  <hr />
  <div class="hotels-layout">
    <div v-for="hotel in hotels" :key="hotel.id" class="hotel">
      <div class="hotel-banner">
        <div class="hotel-pic">
          <v-img :src="hotel.cover" cover />
          <div class="zh-name">{{ hotel.name }}</div>
        </div>
        <div class="hotel-info">
          <h3 class="en-name">{{ hotel.eng }}</h3>
          <div class="origin-price">原價 : NT.${{ hotel.price }}</div>
          <div class="discount">
            折扣 :
            <span style="font-weight: bold">{{ hotel.discount * 10 }}</span> 折
          </div>
          <div class="discount-price">
            特價 :
            <span style="color: red; font-weight: bold"
              >NT.${{ hotel.price * hotel.discount }}</span
            >
          </div>
          <h4>提供服務</h4>
          <div style="display: flex">
            <div
              v-if="hotel.equipments.wifi == true"
              style="display: flex; color: green"
              class="titie"
            >
              <v-icon icon="mdi-wifi" style="margin-right: 5px" />
              <h4>免費Wi-Fi</h4>
            </div>
            <div
              v-if="hotel.equipments.bathtub == true"
              style="display: flex; color: deepskyblue"
              class="titie"
            >
              <v-icon icon="mdi-bathtub" style="margin-right: 5px" />
              <h4>私人浴缸</h4>
            </div>
            <div
              v-if="hotel.equipments.breakfast == true"
              style="display: flex; color: orange"
              class="titie"
            >
              <v-icon icon="mdi-coffee" style="margin-right: 5px" />
              <h4>中/西式早餐</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.titie {
  display: flex;
  align-items: center;
}

hr {
  width: 95%;
  margin: 10px;
}

.hotels-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.hotel {
  height: 70vh;
  padding: 10px;
}

.hotel-banner {
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  overflow: hidden;
}

.hotel-pic {
  width: 100%;
  height: 40%;
  position: relative;
}

.zh-name {
  position: absolute;
  bottom: 5%;
  right: 0;
  background-color: aliceblue;
  font-size: 1.2em;
  border-radius: 13px 0 0 13px;
  padding-left: 1%;
  box-shadow: -5px 4px 10px black;
  font-size: 1.4em;
  font-weight: bold;
}

.hotel-info {
  padding: 10px;
  font-size: 1.4em;
}

.origin-price {
  text-decoration: line-through;
}
</style>
