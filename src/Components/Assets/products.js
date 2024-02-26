import sun3 from "./sunglass/sun3.png";
import sun4 from "./sunglass/sun4.png";
import sun5 from "./sunglass/sun5.png";
import sun7 from "./sunglass/sun7.png";
import sun8 from "./sunglass/sun8.png";
import sun9 from "./sunglass/sun9.png";
import sun10 from "./sunglass/sun10.png";
import sun11 from "./sunglass/sun11.png";
import sun12 from "./sunglass/sun12.png";
import sun13 from "./sunglass/sun13.png";
import sun14 from "./sunglass/sun14.png";

import sports1 from "./sports/sports1.png";
import sports2 from "./sports/sports2.png";
import sports3 from "./sports/sports3.png";
import sports4 from "./sports/sports4.png";
import sports6 from "./sports/sports6.png";
import sports7 from "./sports/sports7.png";
import sports8 from "./sports/sports8.png";
import sports9 from "./sports/sports9.png";

import vision1 from "./vision/vision1.png";
import vision2 from "./vision/vision2.png";
import vision3 from "./vision/vision3.png";
import vision4 from "./vision/vision4.png";
import vision5 from "./vision/vision5.png";
import vision6 from "./vision/vision6.png";
import vision7 from "./vision/vision7.png";
import vision8 from "./vision/vision8.png";
import vision9 from "./vision/vision9.png";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
let  products = [
  {
    id:1,
    // qty: 0,
    name: "Ardor Avaitor",
    // description:
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    // brand: "Ray-Ban",
    // category: "Sports",
    // gender: "Men",
    // weight: "200g",
    // quantity: 10,
    image: sports1,
    // rating: 4.5,
    old_price: 1999,
    new_price: 1899,
    // trending: true,
  },
  {
    id:2,
    // qty: 0,
    name: "Caper Active",
    
    // description:
    //   "Pellentesque ac tortor sed ipsum feugiat condimentum.Pellentesque ac tortor sed ipsum feugiat condimentum.",
    // brand: "Persol",
    // category: "Sports",
    // gender: "Men",
    // weight: "100g",
    // quantity: 5,
    image: sports2,
    // rating: 4.8,
    new_price: 1199,
    old_price: 1299,
   
    // trending: true,
  },
  {
    _id: 3,
    // qty: 0,
    name: "Alder Street",
    // description:
    //   "Integer et nunc in turpis maximus facilisis ac ac elit.Integer et nunc in turpis maximus facilisis ac ac elit.",
    // brand: "Kate Spade",
    // category: "Sports",
    // gender: "Unisex",
    // weight: "750g",
    // quantity: 15,
    image: sports3,
    // rating: 4.7,
    new_price: 2000,
    old_price: 2999,
    
    // trending: true,
  },
  {
    _id: 4,
    // qty: 0,
    name: "Corral Round",
    // description:
    //   "Vestibulum eu tellus sed lorem tristique lacinia ut vel urna. Vestibulum eu tellus sed lorem tristique lacinia ut vel urna.",
    // brand: "Carrera",
    // category: "Sports",
    // gender: "Unisex",
    // weight: "300g",
    // quantity: 8,
    image: sports4,
    // rating: 3.8,
    new_price: 2300,
    old_price: 2499,
   
  },
  {
    _id: 5,
    // qty: 0,
    name: "Hyperclax Active",
    // description:
    //   "Aenean at velit consequat, faucibus mi id, tempor velit. Aenean at velit consequat, faucibus mi id, tempor velit.",
    // brand: "Oakley",
    // category: "Sports",
    // gender: "Women",
    // weight: "900g",
    // quantity: 3,
    image: sports6,
    // rating: 3.5,
    new_price: 3500,
    old_price: 3999,
    
  },
  {
    _id: 6,
    // qty: 0,
    name: "Rose Gold Chase",
    // description:
    //   "Vivamus mattis quam sed libero pretium ullamcorper. Vivamus mattis quam sed libero pretium ullamcorper.",
    // brand: "Ray-Ban",
    // category: "Vision",
    // gender: "Women",
    // weight: "120g",
    // quantity: 9,
    image: vision7,
    // rating: 4.3,
    new_price: 2599,
    old_price: 2999,
   
  },
  {
    _id: 7,
    // qty: 0,
    name: "Full Rim Airflex",
    // description:
    //   "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
    // brand: "Carrera",
    // category: "Vision",
    // gender: "Unisex",
    // weight: "550g",
    // quantity: 7,
    image: vision8,
    // rating: 4.8,
    new_price: 3999,
    old_price: 4999,
    
  },
  // {
  //   _id: "8ad38385-1211-4192-8108-db851b4e9434",
  //   qty: 0,
  //   name: "Mercury Rounded Red",
  //   description:
  //     "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
  //   brand: "Carrera",
  //   category: "Vision",
  //   gender: "Unisex",
  //   weight: "550g",
  //   quantity: 7,
  //   image: vision9,
  //   rating: 4.8,
  //   price: 4999,
  //   newPrice: 4300,
  // },
  // {
  //   _id: "c6dcde20-2e9f-470c-b76c-38b01ab7e16e",
  //   qty: 0,
  //   name: "Candyfloss-302",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   brand: "Ray-Ban",
  //   category: "Sunglasses",
  //   gender: "Men",
  //   weight: "200g",
  //   quantity: 10,
  //   image: sun3,
  //   rating: 4.5,
  //   price: 1999,
  //   newPrice: 1899,
  // },
  // {
  //   _id: "c76b3840-47d2-4d38-b465-af68e2af9dcd",
  //   qty: 0,
  //   name: "Phenomenal Mercury-02",
  //   description:
  //     "Pellentesque ac tortor sed ipsum feugiat condimentum. Pellentesque ac tortor sed ipsum feugiat condimentum.",
  //   brand: "Persol",
  //   category: "Sunglasses",
  //   gender: "Unisex",
  //   weight: "100g",
  //   quantity: 5,
  //   image: sun4,
  //   rating: 2.8,
  //   price: 1299,
  //   newPrice: 1200,
  // },
  // {
  //   _id: "61bf1558-94c3-4494-a522-0aad46ed5334",
  //   qty: 0,
  //   name: "Black boss",
  //   description:
  //     "Integer et nunc in turpis maximus facilisis ac ac elit. Integer et nunc in turpis maximus facilisis ac ac elit.",
  //   brand: "Kate Spade",
  //   category: "Sunglasses",
  //   gender: "Unisex",
  //   weight: "750g",
  //   quantity: 15,
  //   image: sun5,
  //   rating: 4.7,
  //   price: 2999,
  //   newPrice: 2399,
  //   trending: true,
  // },
  // {
  //   _id: "9e3419eb-e5f6-4813-8bf4-6d72b6498235",
  //   qty: 0,
  //   name: "Blue Ray Wayfarer",
  //   description:
  //     "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
  //   brand: "Carrera",
  //   category: "Sports",
  //   gender: "Unisex",
  //   weight: "550g",
  //   quantity: 7,
  //   image: sports9,
  //   rating: 4.8,
  //   price: 4999,
  //   newPrice: 4000,
  // },
  // {
  //   _id: "c39a126c-783e-4926-bedd-0b2174307d9c",
  //   qty: 0,
  //   name: "Pernik",
  //   description:
  //     "Vestibulum eu tellus sed lorem tristique lacinia ut vel urna. Vestibulum eu tellus sed lorem tristique lacinia ut vel urna.",
  //   brand: "Carrera",
  //   category: "Sunglasses",
  //   gender: "Unisex",
  //   weight: "300g",
  //   quantity: 8,
  //   image: sun7,
  //   rating: 3.8,
  //   price: 2499,
  //   newPrice: 1599,
  // },
  // {
  //   _id: "2e792ac4-13a7-4d70-a9a5-55294e346404",
  //   qty: 0,
  //   name: "Silistra",
  //   description:
  //     "Aenean at velit consequat, faucibus mi id, tempor velit. Aenean at velit consequat, faucibus mi id, tempor velit.",
  //   brand: "Oakley",
  //   category: "Sunglasses",
  //   gender: "Women",
  //   weight: "900g",
  //   quantity: 3,
  //   image: sun8,
  //   rating: 3.5,
  //   price: 3999,
  //   newPrice: 3599,
  // },
  // {
  //   _id: "a84d980e-cf9e-4607-b74d-68f7a1c45771",
  //   qty: 0,
  //   name: "Full rim acetate black",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   brand: "Ray-Ban",
  //   category: "Vision",
  //   gender: "Men",
  //   weight: "200g",
  //   quantity: 10,
  //   image: vision1,
  //   rating: 4.5,
  //   price: 1999,
  //   newPrice: 1900,
  // },
  // {
  //   _id: "1c9bd0c1-b300-4358-9eb4-43a70e392859",
  //   qty: 0,
  //   name: "Ruse",
  //   description:
  //     "Fusce sed est nec ipsum convallis semper nec id ipsum. Fusce sed est nec ipsum convallis semper nec id ipsum.",
  //   brand: "Kate Spade",
  //   category: "Sunglasses",
  //   gender: "Men",
  //   weight: "400g",
  //   quantity: 6,
  //   image: sun9,
  //   rating: 4.1,
  //   price: 1499,
  //   newPrice: 1350,
  // },
  // {
  //   _id: "08617c37-e290-4296-b558-2db509201361",
  //   qty: 0,
  //   name: "Yambol",
  //   description:
  //     "Vivamus mattis quam sed libero pretium ullamcorper. Vivamus mattis quam sed libero pretium ullamcorper.",
  //   brand: "Ray-Ban",
  //   category: "Sunglasses",
  //   gender: "Men",
  //   weight: "130g",
  //   quantity: 9,
  //   image: sun10,
  //   rating: 4.3,
  //   price: 2999,
  //   newPrice: 1999,
  // },
  // {
  //   _id: "5f73b408-aa98-4f54-a15b-7a7425a038d5",
  //   qty: 0,
  //   name: "Roadies Rd-202",
  //   description:
  //     "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
  //   brand: "Carrera",
  //   category: "Sunglasses",
  //   gender: "Men",
  //   weight: "550g",
  //   quantity: 7,
  //   image: sun14,
  //   rating: 4.8,
  //   price: 4999,
  //   newPrice: 4799,
  // },
  // {
  //   _id: "bb2ad041-b53a-49a8-835d-e84300e6fbd2",
  //   qty: 0,
  //   name: "Burgas",
  //   description:
  //     "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
  //   brand: "Carrera",
  //   category: "Sunglasses",
  //   gender: "Women",
  //   weight: "550g",
  //   quantity: 7,
  //   image: sun11,
  //   rating: 4.8,
  //   price: 4999,
  //   newPrice: 4000,
  // },
  // {
  //   _id: "6c800171-bea6-4cb2-811d-7c419a59dcb8",
  //   qty: 0,
  //   name: "Hip Hop Candy",
  //   description:
  //     "Fusce sed est nec ipsum convallis semper nec id ipsum. Fusce sed est nec ipsum convallis semper nec id ipsum.",
  //   brand: "Kate Spade",
  //   category: "Sports",
  //   gender: "Men",
  //   weight: "400g",
  //   quantity: 6,
  //   image: sports7,
  //   rating: 4.1,
  //   price: 1499,
  //   newPrice: 1399,
  //   trending: true,
  // },
  // {
  //   _id: "9ca598d9-7cb5-4fb0-8455-b43028f9cb96",
  //   qty: 0,
  //   name: "Punk Cut Out",
  //   description:
  //     "Vivamus mattis quam sed libero pretium ullamcorper. Vivamus mattis quam sed libero pretium ullamcorper.",
  //   brand: "Ray-Ban",
  //   category: "Sports",
  //   gender: "Women",
  //   weight: "102g",
  //   quantity: 9,
  //   image: sports8,
  //   rating: 4.3,
  //   price: 2999,
  //   newPrice: 2599,
  //   trending: true,
  // },
  // {
  //   _id: "51db0e19-b0e0-4d6e-bce0-739f1bd37ba7",
  //   qty: 0,
  //   name: "Rounded Gold",
  //   description:
  //     "Pellentesque ac tortor sed ipsum feugiat condimentum. Pellentesque ac tortor sed ipsum feugiat condimentum.",
  //   brand: "Persol",
  //   category: "Vision",
  //   gender: "Men",
  //   weight: "190g",
  //   quantity: 5,
  //   image: vision2,
  //   rating: 2.8,
  //   price: 1299,
  //   newPrice: 1000,
  //   trending: true,
  // },
  // {
  //   _id: "35332c85-f853-407a-80f8-840069381a0d",
  //   qty: 0,
  //   name: "Jungle Safari",
  //   description:
  //     "Integer et nunc in turpis maximus facilisis ac ac elit. Integer et nunc in turpis maximus facilisis ac ac elit.",
  //   brand: "Kate Spade",
  //   category: "Vision",
  //   gender: "Unisex",
  //   weight: "750g",
  //   quantity: 15,
  //   image: vision3,
  //   rating: 4.7,
  //   price: 2999,
  //   newPrice: 2899,
  // },
  // {
  //   _id: "53ca5f50-39f4-4c77-be14-c3246cfc5dc6",
  //   qty: 0,
  //   name: "Burgas",
  //   description:
  //     "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
  //   brand: "Carrera",
  //   category: "Sunglasses",
  //   gender: "Women",
  //   weight: "550g",
  //   quantity: 7,
  //   image: sun11,
  //   rating: 4.8,
  //   price: 4999,
  //   newPrice: 4700,
  // },
  // {
  //   _id: "a0a1ca71-d121-48af-a463-4ee790df28de",
  //   qty: 0,
  //   name: "Sofia",
  //   description:
  //     "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
  //   brand: "Carrera",
  //   category: "Sunglasses",
  //   gender: "Women",
  //   weight: "550g",
  //   quantity: 7,
  //   image: sun12,
  //   rating: 4.8,
  //   price: 4999,
  //   newPrice: 4399,
  // },
  // {
  //   _id: "2b5f4f03-7ec7-4a5c-b2a7-14dbcc4f2f6b",
  //   qty: 0,
  //   name: "Plovediv",
  //   description:
  //     "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
  //   brand: "Carrera",
  //   category: "Sunglasses",
  //   gender: "Unisex",
  //   weight: "550g",
  //   quantity: 7,
  //   image: sun13,
  //   rating: 4.8,
  //   price: 4999,
  //   newPrice: 3499,
  // },
  // {
  //   _id: "440cec02-21e1-4447-bdd9-d51482b7ce4b",
  //   qty: 0,
  //   name: "Airway Black",
  //   description:
  //     "Vestibulum eu tellus sed lorem tristique lacinia ut vel urna. Vestibulum eu tellus sed lorem tristique lacinia ut vel urna.",
  //   brand: "Carrera",
  //   category: "Vision",
  //   gender: "Unisex",
  //   weight: "300g",
  //   quantity: 8,
  //   image: vision4,
  //   rating: 3.8,
  //   price: 2499,
  //   newPrice: 1499,
  // },
  // {
  //   _id: "77f519a8-a40f-443d-8c9e-5314b24cf06d",
  //   qty: 0,
  //   name: "Cat-eyed Gold",
  //   description:
  //     "Aenean at velit consequat, faucibus mi id, tempor velit. Aenean at velit consequat, faucibus mi id, tempor velit.",
  //   brand: "Oakley",
  //   category: "Vision",
  //   gender: "Women",
  //   weight: "900g",
  //   quantity: 3,
  //   image: vision5,
  //   rating: 3.5,
  //   price: 3999,
  //   newPrice: 3790,
  // },
  // {
  //   _id: "11a2bfb4-2acf-40da-a12f-60dfcce8ed95",
  //   qty: 0,
  //   name: "Full Rim Steel Gray",
  //   description:
  //     "Fusce sed est nec ipsum convallis semper nec id ipsum. Fusce sed est nec ipsum convallis semper nec id ipsum.",
  //   brand: "Kate Spade",
  //   category: "Vision",
  //   gender: "Men",
  //   weight: "400g",
  //   quantity: 6,
  //   image: vision6,
  //   rating: 4.1,
  //   price: 1499,
  //   newPrice: 1459,
  // },
];
 export default products;
