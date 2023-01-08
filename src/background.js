const firstFilm = [
  "img_1.jpg",
  "img_2.jpg",
  "img_3.jpg",
  "img_4.jpg",
  "img_5.jpg",
  "img_6.jpg",
  "img_7.jpg",
  "img_8.jpg",
  "img_9.jpg",
  "img_10.jpg",
  "img_11.jpg",
  "img_12.jpg",
  "img_13.jpg",
  "img_14.jpg",
  "img_15.jpg",
  "img_16.jpg",
  "img_17.jpg",
  "img_18.jpg",
  "img_19.jpg",
  "img_20.jpg",
  "img_21.jpg",
  "img_22.jpg",
  "img_23.jpg",
  "img_24.jpg",
  "img_25.jpg",
  "img_26.jpg",
  "img_27.jpg",
  "img_28.jpg",
  "img_29.jpg",
  "img_30.jpg",
];
const randomImg = firstFilm[Math.floor(Math.random() * firstFilm.length)];

const imgPlate = document.querySelector(".imgplate");

const bgImg = document.createElement("img");

bgImg.src = `1stfilm/${randomImg}`;

imgPlate.appendChild(bgImg);
