//import product images 
import earring1 from "../assets/earring-images/black-gold-earrings.jpg"
import earring2 from "../assets/earring-images/glass-bead-earrings.jpg"
// import earring3 from "../assets/earring-images/gold-diamond-twist-earrings.jpeg"
import earring4 from "../assets/earring-images/gold-twist-earring.jpeg"
import earring5 from "../assets/earring-images/ornate-earrings.jpg"
import necklace1 from "../assets/necklace-images/blue-gem-necklace.jpg"
import necklace2 from "../assets/necklace-images/diamond-necklace.jpeg"
import necklace3 from "../assets/necklace-images/gold-chain-diamond-necklace.jpeg"
import necklace4 from "../assets/necklace-images/pearl-necklace.jpg"
import ring1 from "../assets/ring-images/gold-rings.jpeg"
import ring2 from "../assets/ring-images/ring-gold-rectangle.jpg"


const ProductList=[
    {
        id: 1,
        name: "Julia",
        image: earring1.src,
        price: 36.99,
        range: 50,
        material: "gold",
        category: "earring",
    },
    {
        id: 2,
        name: "Erica",
        image: earring2.src,
        price: 45.99,
        range: 50,
        material:"silver",
        category: "earring",
    },
    {
        id: 3,
        name: "Alice",
        image: ring2.src,
        price: 56.99,
        range: 100,
        material:"gold",
        category: "ring",
    },
    {
        id: 4,
        name: "Emily",
        image: earring4.src,
        price: 24.99,
        range: 50,
        material: "gold",
        category: "earring",
    },
    {
        id: 5,
        name: "Celine",
        image: earring5.src,
        price: 144.99,
        range: 150,
        material: "gold",
        category: "earring",
    },
    {
        id: 6,
        name: "Anne",
        image: necklace1.src,
        price: 124.99,
        range: 150,
        material: "gold",
        category: "necklace",
    },
    {
        id: 7,
        name: "Maria",
        image: necklace2.src,
        price: 84.99,
        range: 100,
        material: "silver",
        category: "necklace",
    },
    {
        id: 8,
        name: "Lina",
        image: necklace3.src,
        price: 95.99,
        range: 100,
        material: "gold",
        category: "necklace",
    },
    {
        id: 9, 
        name: "Rose",
        image: necklace4.src,
        price: 240.99,
        range: 200,
        material: "silver",
        category: "necklace",
    },
    {
        id: 10,
        name: "Destiny",
        image: ring1.src,
        price: 180.99,
        range: 200,
        material: "gold",
        category: "ring",
    },
]

export default ProductList;