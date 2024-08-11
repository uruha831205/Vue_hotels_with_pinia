<script setup>
import { useHotelsStore } from "../stores/hotelData.js";
import { ref, reactive, computed } from "vue";
import { storeToRefs } from "pinia";

const hotelsData = useHotelsStore();
const { hotels } = storeToRefs(hotelsData);
const selected = ref("");
const hotel_obj = {
  id: 0,
  name: "",
  eng: "",
  price: null,
  amount: null,
  cover: "",
  discount: null,
  equipments: {
    wifi: true,
    bathtub: true,
    breakfast: false,
  },
};

const add_hotel_obj = (h_id) => {
  hotels.value.push({
    id: h_id + 1,
    name: hotel_obj.name,
    eng: hotel_obj.eng,
    price: hotel_obj.price,
    amount: hotel_obj.amount,
    cover: hotel_obj.cover,
    discount: hotel_obj.discount,
    equipments: {
      wifi: hotel_obj.equipments.wifi,
      bathtub: hotel_obj.equipments.bathtub,
      breakfast: hotel_obj.equipments.breakfast,
    },
  });
  alert("新增成功");
};
</script>

<!-- selected="selected" -->

<template>
  <div class="center all-hotels-edit">
    <div class="titie">
      <v-icon icon="mdi-home" style="margin-right: 5px" />
      <h2>飯店資料</h2>
    </div>
    <hr />

    <!--修改資料-->
    <div class="center hotel-edit">
      <h2 style="width: 100%">修改資料</h2>
      <select v-model="selected" style="font-size: 1.2em; width: 100%">
        <option value="" disabled>請選擇...</option>
        <option
          v-for="hotel in hotels"
          :key="hotel.id"
          :value="hotel"
          style="font-size: 1.2em"
        >
          {{ hotel.name }}
        </option>
      </select>

      <div v-if="selected != ''" class="select-list" style="width: 100%">
        <div>中文房名</div>
        <input class="input-data" type="text" v-model="selected.name" />
        <div>英文房名</div>
        <input class="input-data" type="text" v-model="selected.eng" />
        <div>房間原價</div>
        <input class="input-data" type="number" v-model="selected.price" />
        <div>房間圖片</div>
        <input class="input-data" type="text" v-model="selected.cover" />
        <div>房間折扣</div>
        <input class="input-data" type="text" v-model="selected.discount" />
        <div class="equipments">
          <div style="display: flex">
            <input
              type="checkbox"
              v-model="selected.equipments.wifi"
              id="wifi"
            />
            <label for="wifi">wifi</label>
          </div>
          <div style="display: flex">
            <input
              type="checkbox"
              v-model="selected.equipments.bathtub"
              id="bathtub"
            />
            <label for="bathtub">浴缸</label>
          </div>
          <div style="display: flex">
            <input
              type="checkbox"
              v-model="selected.equipments.breakfast"
              id="breakfast"
            />
            <label for="breakfast">早餐</label>
          </div>
        </div>
      </div>
      <hr />

      <!--新增資料-->
      <div class="add-list" style="width: 100%">
        <h2 style="width: 100%">新增資料</h2>
        <div>中文房名</div>
        <input
          class="input-data"
          type="text"
          v-model="hotel_obj.name"
          placeholder="房名"
        />
        <div>英文房名</div>
        <input
          class="input-data"
          type="text"
          v-model="hotel_obj.eng"
          placeholder="Room name"
        />
        <div>房間原價</div>
        <input
          class="input-data"
          type="number"
          v-model="hotel_obj.price"
          placeholder="0"
        />
        <div>房間圖片</div>
        <input
          class="input-data"
          type="text"
          v-model="hotel_obj.cover"
          placeholder="http://..."
        />
        <div>房間折扣</div>
        <input
          class="input-data"
          type="text"
          v-model="hotel_obj.discount"
          placeholder="0.01"
        />
        <div class="equipments">
          <div style="display: flex">
            <input
              type="checkbox"
              id="wifi"
              v-model="hotel_obj.equipments.wifi"
            />
            <label for="wifi">wifi</label>
          </div>
          <div style="display: flex">
            <input
              type="checkbox"
              id="bathtub"
              v-model="hotel_obj.equipments.bathtub"
            />
            <label for="bathtub">浴缸</label>
          </div>
          <div style="display: flex">
            <input
              type="checkbox"
              id="breakfast"
              v-model="hotel_obj.equipments.breakfast"
            />
            <label for="breakfast">早餐</label>
          </div>
        </div>
        <button class="btn" @click="add_hotel_obj(hotels.length)">送出</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.titie {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.all-hotels-edit {
  background-color: antiquewhite;
  margin: auto;
  width: 80%;
  height: 100vh;
  position: sticky;
  top: 0;
}

.select-list .input-data,
.add-list .input-data {
  width: 100%;
}

.hotel-edit {
  background-color: antiquewhite;
  width: 80%;
}

.equipments {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 10px;
}

hr {
  width: 90%;
  margin: 10px;
}

.btn {
  margin-top: 10px;
  width: 100%;
  border: none;
  border-radius: 10px;
  background-color: slateblue;
  font-size: 1.1em;
  font-weight: bold;
}
</style>
