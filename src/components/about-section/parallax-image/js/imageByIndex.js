export const images = [
  "src/assets/1.jpg",
  "src/assets/2.jpg",
  "src/assets/3.jpg",
  "src/assets/4.jpg",
  "src/assets/5.jpg",
  "src/assets/6.jpg",
  "src/assets/7.jpg",
];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
