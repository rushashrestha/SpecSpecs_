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
let  allproducts = [
  {
    id:1,
    // qty: 0,
    name: "Ardor Avaitor",
    description:
      "Stay sharp during intense activity with these sleek aviators—built for speed and comfort.",
    brand: "Ray-Ban",
     category: "Sports",
    // gender: "Men",
    // weight: "200g",
    // quantity: 10,
    image: sports1,
    rating: 4.5,
    old_price: 1999,
    new_price: 1899,
    // trending: true,
  },
  {
    id:2,
    // qty: 0,
    name: "Caper Active",
    
    description:
      "Designed for performance, these frames combine lightweight comfort with bold, sporty flair.",
    brand: "Persol",
    category: "Sports",
    // gender: "Men",
    // weight: "100g",
    // quantity: 5,
    image: sports2,
    rating: 4.8,
    new_price: 1199,
    old_price: 1299,
   
    // trending: true,
  },
  {
    id: 3,
    // qty: 0,
    name: "Alder Street",
    description:
      "Modern, durable, and ready for any challenge—your ideal sports partner in style.",
    brand: "Kate Spade",
    category: "Sports",
    // gender: "Unisex",
    // weight: "750g",
    // quantity: 15,
    image: sports3,
    rating: 4.7,
    new_price: 2000,
    old_price: 2999,
    
    // trending: true,
  },
  {
    id: 4,
    // qty: 0,
    name: "Corral Round",
    description:
      "A mix of retro curves and modern edge—crafted for athletes who don’t compromise.",
    brand: "Carrera",
     category: "Sports",
    // gender: "Unisex",
    // weight: "300g",
    // quantity: 8,
    image: sports4,
    rating: 3.8,
    new_price: 2300,
    old_price: 2499,
   
  },
  {
    id: 5,
    // qty: 0,
    name: "Hyperclax Active",
    description:
      "A mix of retro curves and modern edge—crafted for athletes who don’t compromise.",
    brand: "Oakley",
     category: "Sports",
    // gender: "Women",
    // weight: "900g",
    // quantity: 3,
    image: sports6,
    rating: 3.5,
    new_price: 3500,
    old_price: 3999,
    
  },
  {
    id: 6,
    // qty: 0,
    name: "Rose Gold Chase",
    description:
      "Add a rosy touch of class to your daily wear—elegant, feminine, and feather-light.",
    brand: "Ray-Ban",
     category: "Vision",
    // gender: "Women",
    // weight: "120g",
    // quantity: 9,
    image: vision7,
    rating: 4.3,
    new_price: 2599,
    old_price: 2999,
   
  },
  {
    id: 7,
    // qty: 0,
    name: "Full Rim Airflex",
    description:
      "Flexible yet sturdy—perfect for all-day comfort and confident style.",
    brand: "Carrera",
     category: "Vision",
    // gender: "Unisex",
    // weight: "550g",
    // quantity: 7,
    image: vision8,
    rating: 4.8,
    new_price: 3999,
    old_price: 4999,
    
  },
  {
    id: 8,
    // qty: 0,
    name: "Mercury Rounded Red",
    description:
      "Brighten your day with bold red rims—modern design with high visual clarity.",
    brand: "Carrera",
    category: "Vision",
    // gender: "Unisex",
    // weight: "550g",
    // quantity: 7,
    image: vision9,
    rating: 4.8,
    new_price: 4300,
    old_price: 4999,
    
  },
  {
    id: 9,
    // qty: 0,
    name: "Candyfloss-302",
    description:
      "Soft pink tints and bold vibes—your perfect blend of cute and confident.",
    brand: "Ray-Ban",
    category: "Sunglasses",
    // gender: "Men",
    // weight: "200g",
    // quantity: 10,
    image: sun3,
    rating: 4.5,
    new_price: 1899,
    old_price: 1999,
   
  },
  {
    id: 10,
    // qty: 0,
    name: "Phenomenal Mercury-02",
    description:
      "Lightweight mercury-finish frames that shine under the sun—subtle yet standout.",
    brand: "Persol",
    category: "Sunglasses",
    // gender: "Unisex",
    // weight: "100g",
    // quantity: 5,
    image: sun4,
    rating: 2.8,
   
    new_price: 1200,
    old_price: 1299,
  },
  {
    id: 11,
    // qty: 0,
    name: "Black boss",
    description:
      "Take control with these ultra-dark lenses and sharp, defining frame edges.",
    brand: "Kate Spade",
    category: "Sunglasses",
    // gender: "Unisex",
    // weight: "750g",
    // quantity: 15,
    image: sun5,
    rating: 4.7,
    
    new_price: 2399,
    old_price: 2999,
    // trending: true,
  },
  {
    id: 12,
    // qty: 0,
    name: "Blue Ray Wayfarer",
    description:
      "Classic shape meets sporty soul—get UV protection and active-day comfort in one.",
    brand: "Carrera",
    category: "Sports",
    // gender: "Unisex",
    // weight: "550g",
    // quantity: 7,
    image: sports9,
    rating: 4.8,
    new_price: 4000,
    old_price: 4999,
    
  },
  {
    id: 13,
    // qty: 0,
    name: "Pernik",
    description:
      "Stay cool and classy with minimalist design and all-day comfort.",
    brand: "Carrera",
    category: "Sunglasses",
    // gender: "Unisex",
    // weight: "300g",
    // quantity: 8,
    image: sun7,
    rating: 3.8,
   
    new_price: 1599,
    old_price: 2499,
  },
  {
    id: 14,
    // qty: 0,
    name: "Silistra",
    description:
      "Graceful and powerful—eye-catching shades designed for sunny elegance.",
    brand: "Oakley",
    category: "Sunglasses",
    // gender: "Women",
    // weight: "900g",
    // quantity: 3,
    image: sun8,
    rating: 3.5,
    new_price: 3599,
    old_price: 3999,
   
  },
  {
    id: 15,
    // qty: 0,
    name: "Full rim acetate black",
    description:
      "Timeless black acetate style that fits every outfit and every mood.",
    brand: "Ray-Ban",
    category: "Vision",
    // gender: "Men",
    // weight: "200g",
    // quantity: 10,
    image: vision1,
    rating: 4.5,
    
    new_price: 1900,
    old_price: 1999,
  },
  {
    id: 16,
    // qty: 0,
    name: "Ruse",
    description:
      "The go-to pick for bold personalities—lightweight and fashion-forward.",
    brand: "Kate Spade",
    category: "Sunglasses",
    // gender: "Men",
    // weight: "400g",
    // quantity: 6,
    image: sun9,
    rating: 4.1,
    
    new_price: 1350,
    old_price: 1499,
  },
  {
    id: 17,
    // qty: 0,
    name: "Yambol",
    description:
      "Versatility at its best—these shades elevate both casual and formal looks.",
    brand: "Ray-Ban",
    category: "Sunglasses",
    // gender: "Men",
    // weight: "130g",
    // quantity: 9,
    image: sun10,
    rating: 4.3,
   
    new_price: 1999,
    old_price: 2999,
  },
  {
    id: 18,
    // qty: 0,
    name: "Roadies Rd-202",
    description:
      "Perfect for the road and beyond—sturdy, stylish, and sun-shielding.",
    brand: "Carrera",
    category: "Sunglasses",
    // gender: "Men",
    // weight: "550g",
    // quantity: 7,
    image: sun14,
    rating: 4.8,
    
    new_price: 4799,
    old_price: 4999,
  },
  {
    id: 19,
    // qty: 0,
    name: "Burgas",
    description:
      "Chic and charming—sunglasses that flatter every face shape.",
    brand: "Carrera",
    category: "Sunglasses",
    // gender: "Women",
    // weight: "550g",
    // quantity: 7,
    image: sun11,
    rating: 4.8,
    
    new_price: 4000,
    old_price: 4999,
  },
  {
    id: 20,
    // qty: 0,
    name: "Hip Hop Candy",
    description:
      "Bring the funk to your fitness with vibrant shades that scream energy and edge.",
    brand: "Kate Spade",
    category: "Sports",
    // gender: "Men",
    // weight: "400g",
    // quantity: 6,
    image: sports7,
    rating: 4.1,
    
    new_price: 1399,
    old_price: 1499,
    // trending: true,
  },
  {
    id: 30,
    // qty: 0,
    name: "Punk Cut Out",
    description:
      "Edgy, bold, and built for thrill—take your look and game up a notch.",
    brand: "Ray-Ban",
    category: "Sports",
    // gender: "Women",
    // weight: "102g",
    // quantity: 9,
    image: sports8,
    rating: 4.3,
    
    new_price: 2599,
    old_price: 2999,
    // trending: true,
  },
  {
    id: 31,
    // qty: 0,
    name: "Rounded Gold",
    description:
      "Understated luxury with golden elegance—made for professionals with taste.",
    brand: "Persol",
    category: "Vision",
    // gender: "Men",
    // weight: "190g",
    // quantity: 5,
    image: vision2,
    rating: 2.8,
   
    new_price: 1000,
    old_price: 1299,
    // trending: true,
  },
  {
    id: 32,
    // qty: 0,
    name: "Jungle Safari",
    description:
      "Flexible yet sturdy—perfect for all-day comfort and confident style.",
    brand: "Kate Spade",
    category: "Vision",
    // gender: "Unisex",
    // weight: "750g",
    // quantity: 15,
    image: vision3,
    rating: 4.7,
    
    new_price: 2899,
    old_price: 2999,
  },
  {
    id: 33,
    // qty: 0,
    name: "Burgas",
    description:
      "Chic and charming—sunglasses that flatter every face shape.",
    brand: "Carrera",
    category: "Sunglasses",
    // gender: "Women",
    // weight: "550g",
    // quantity: 7,
    image: sun11,
    rating: 4.8,
    
    new_price: 4700,
    old_price: 4999,
  },
  {
    id: 34,
    // qty: 0,
    name: "Sofia",
    description:
      "Stay cool and classy with minimalist design and all-day comfort.",
    brand: "Carrera",
    category: "Sunglasses",
    // gender: "Women",
    // weight: "550g",
    // quantity: 7,
    image: sun12,
    rating: 4.8,
   
    new_price: 4399,
    old_price: 4999,
  },
  {
    id: 35,
    // qty: 0,
    name: "Plovediv",
    description:
      "Chic and charming—sunglasses that flatter every face shape.",
    brand: "Carrera",
    category: "Sunglasses",
    // gender: "Unisex",
    // weight: "550g",
    // quantity: 7,
    image: sun13,
    rating: 4.8,
   
    new_price: 3499,
    old_price: 4999,
  },
  {
    id: 36,
    // qty: 0,
    name: "Airway Black",
    description:
      "Timeless black acetate style that fits every outfit and every mood.",
    brand: "Carrera",
    category: "Vision",
    // gender: "Unisex",
    // weight: "300g",
    // quantity: 8,
    image: vision4,
    rating: 3.8,
    
    new_price: 1499,
    old_price: 2499,
  },
  {
    id: 37,
    // qty: 0,
    name: "Cat-eyed Gold",
    description:
      "Understated luxury with golden elegance—made for professionals with taste.",
    brand: "Oakley",
    category: "Vision",
    // gender: "Women",
    // weight: "900g",
    // quantity: 3,
    image: vision5,
    rating: 3.5,
   
    new_price: 3790,
    old_price: 3999,
  },
  {
    id: 38,
    // qty: 0,
    name: "Full Rim Steel Gray",
    description:
      "Flexible yet sturdy—perfect for all-day comfort and confident style.",
    brand: "Kate Spade",
    category: "Vision",
    // gender: "Men",
    // weight: "400g",
    // quantity: 6,
    image: vision6,
    rating: 4.1,
    
    new_price: 1459,
    old_price: 1499,
  },
];
 export default allproducts;
