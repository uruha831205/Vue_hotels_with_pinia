import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useHotelsStore = defineStore("hotels", () => {
  const hotels = reactive([
    {
      id: 1,
      name: "經濟雙人房",
      eng: "Economy Double Room",
      price: 7000,
      amount: 0,
      cover: "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(1).jpg",
      discount: 0.9,
      equipments: {
        wifi: false,
        bathtub: true,
        breakfast: true,
      },
    },
    {
      id: 2,
      name: "海景三人房",
      eng: "Sea view triple Room",
      price: 7800,
      amount: 0,
      cover: "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(2).jpg",
      discount: 0.8,
      equipments: {
        wifi: true,
        bathtub: true,
        breakfast: false,
      },
    },
    {
      id: 3,
      name: "典雅景觀房",
      eng: "Elegant landscape Room",
      price: 5400,
      amount: 0,
      cover: "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(3).jpg",
      discount: 0.85,
      equipments: {
        wifi: false,
        bathtub: true,
        breakfast: true,
      },
    },
    {
      id: 4,
      name: "尊享豪華房",
      eng: "Exclusive Deluxe Room",
      price: 9800,
      amount: 0,
      cover: "http://bosscode.monoame.com/20170323_vue_comp/img/room%20(4).jpg",
      discount: 0.8,
      equipments: {
        wifi: true,
        bathtub: false,
        breakfast: true,
      },
    },
    {
      id: 5,
      name: "商務雙人房",
      eng: "Business Double Room",
      price: 5600,
      amount: 0,
      cover: "http://bosscode.monoame.com/20170323_vue_comp/img/room (5).jpg",
      discount: 0.9,
      equipments: {
        wifi: true,
        bathtub: false,
        breakfast: false,
      },
    },
    {
      id: 6,
      name: "溫泉雙人房",
      eng: "Hot spring double Room",
      price: 8400,
      amount: 0,
      cover: "http://bosscode.monoame.com/20170323_vue_comp/img/room (6).jpg",
      discount: 0.6,
      equipments: {
        wifi: true,
        bathtub: true,
        breakfast: true,
      },
    },
    {
      id: 7,
      name: "總統套房",
      eng: "Presidential Suite",
      price: 23000,
      amount: 0,
      cover: "http://bosscode.monoame.com/20170323_vue_comp/img/room (7).jpg",
      discount: 0.75,
      equipments: {
        wifi: true,
        bathtub: true,
        breakfast: true,
      },
    },
    {
      id: 8,
      name: "奢華四人房",
      eng: "Luxury four Room",
      price: 8500,
      amount: 0,
      cover: "http://bosscode.monoame.com/20170323_vue_comp/img/room (8).jpg",
      discount: 0.7,
      equipments: {
        wifi: true,
        bathtub: true,
        breakfast: false,
      },
    },
  ]);

  return { hotels };
});
