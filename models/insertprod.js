const Product = require("./Product");

const tempprods = [
  {
    title: "Women Letter Graphic Tee",
    desc: "T shirt",
    img: "https://img.ltwebstatic.com/images3_pi/2022/11/29/1669713538f2e4ab36c09772d7ef850586e2078bce_thumbnail_900x.webp",
    categories: ["women"],
    size: "M",
    color: "Black",
    price: 89,
  },
  {
    title: "Women Letter Graphic Contrast Trim Tee",
    desc: "T shirt",
    img: "https://img.ltwebstatic.com/images3_pi/2022/07/18/1658123996125df7877a054bc30eb314f0e792b4cb_thumbnail_900x.webp",
    categories: ["women"],
    size: "L",
    color: "White",
    price: 79,
  },
];

Product.insertMany(tempprods)
  .then(function (data) {
    console.log("Data", data);
  })
  .catch((err) => console.log(err));
