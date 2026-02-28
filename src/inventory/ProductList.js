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
        category: "Earrings",
        description: "These stunning black gold earrings are the perfect accessory to add a touch of elegance and sophistication to any outfit. Crafted with high-quality materials, these earrings feature a sleek and modern design that is sure to turn heads. The black gold finish gives them a unique and edgy look, making them a versatile choice for both casual and formal occasions. Whether you're dressing up for a night out or adding a stylish touch to your everyday look, these black gold earrings are sure to make a statement."
    },
    {
        id: 2,
        name: "Erica",
        image: earring2.src,
        price: 45.99,
        range: 50,
        material:"silver",
        category: "Earrings",
        description: "These beautiful glass bead earrings are the perfect accessory to add a pop of color and sparkle to any outfit. Crafted with high-quality materials, these earrings feature a unique design that combines the elegance of glass beads with the durability of metal. The vibrant colors of the beads create a stunning visual effect, making these earrings a versatile choice for both casual and formal occasions. Whether you're dressing up for a night out or adding a stylish touch to your everyday look, these glass bead earrings are sure to make a statement."
    },
    {
        id: 3,
        name: "Alice",
        image: ring2.src,
        price: 56.99,
        range: 100,
        material:"gold",
        category: "Rings",
        description: "This exquisite gold rectangle ring is the perfect accessory to add a touch of sophistication and elegance to any outfit. Crafted with high-quality materials, this ring features a sleek and modern design that is sure to turn heads. The rectangular shape adds a unique and contemporary twist to the classic gold ring, making it a versatile choice for both casual and formal occasions. Whether you're dressing up for a night out or adding a stylish touch to your everyday look, this gold rectangle ring is sure to make a statement."
    },
    {
        id: 4,
        name: "Emily",
        image: earring4.src,
        price: 24.99,
        range: 50,
        material: "gold",
        category: "Earrings",
        description: "These elegant gold twist earrings are the perfect accessory to elevate any outfit. Crafted with a sleek and modern design, they feature a unique twisted shape that adds a touch of sophistication. Made from high-quality materials, these earrings are lightweight and comfortable to wear all day long. Whether you're dressing up for a special occasion or adding a stylish touch to your everyday look, these gold twist earrings are sure to make a statement."
    },
    {
        id: 5,
        name: "Celine",
        image: earring5.src,
        price: 144.99,
        range: 150,
        material: "gold",
        category: "Earrings",
        description: "These ornate earrings are the perfect accessory to add a touch of elegance and sophistication to any outfit. Crafted with intricate details and high-quality materials, these earrings feature a unique design that is sure to turn heads. The ornate craftsmanship adds a luxurious and timeless appeal, making them a versatile choice for both casual and formal occasions. Whether you're dressing up for a night out or adding a stylish touch to your everyday look, these ornate earrings are sure to make a statement."
    },
    {
        id: 6,
        name: "Anne",
        image: necklace1.src,
        price: 124.99,
        range: 150,
        material: "gold",
        category: "Necklaces",
        description: "This stunning blue gem necklace is the perfect accessory to add a pop of color and elegance to any outfit. Crafted with high-quality materials, this necklace features a beautiful blue gemstone pendant that is sure to catch the eye. The vibrant blue hue of the gemstone adds a touch of sophistication and glamour, making it a versatile choice for both casual and formal occasions. Whether you're dressing up for a night out or adding a stylish touch to your everyday look, this blue gem necklace is sure to make a statement."
    },
    {
        id: 7,
        name: "Maria",
        image: necklace2.src,
        price: 84.99,
        range: 100,
        material: "silver",
        category: "Necklaces",
        description: "This exquisite diamond necklace is the perfect accessory to add a touch of elegance and sophistication to any outfit. Crafted with high-quality materials, this necklace features a stunning diamond pendant that is sure to catch the eye. The sparkling diamonds add a luxurious and timeless appeal, making it a versatile choice for both casual and formal occasions. Whether you're dressing up for a night out or adding a stylish touch to your everyday look, this diamond necklace is sure to make a statement."
    },
    {
        id: 8,
        name: "Lina",
        image: necklace3.src,
        price: 95.99,
        range: 100,
        material: "gold",
        category: "Necklaces",
        description: "This elegant gold chain diamond necklace is the perfect accessory to add a touch of sophistication and glamour to any outfit. Crafted with high-quality materials, this necklace features a delicate gold chain adorned with sparkling diamonds that are sure to catch the eye. The combination of gold and diamonds creates a timeless and luxurious appeal, making it a versatile choice for both casual and formal occasions. Whether you're dressing up for a night out or adding a stylish touch to your everyday look, this gold chain diamond necklace is sure to make a statement."
    },
    {
        id: 9, 
        name: "Rose",
        image: necklace4.src,
        price: 240.99,
        range: 200,
        material: "silver",
        category: "Necklaces",
        description: "This exquisite pearl necklace is the perfect accessory to add a touch of elegance and sophistication to any outfit. Crafted with high-quality materials, this necklace features a string of lustrous pearls that are sure to catch the eye. The timeless beauty of pearls adds a luxurious and classic appeal, making it a versatile choice for both casual and formal occasions. Whether you're dressing up for a night out or adding a stylish touch to your everyday look, this pearl necklace is sure to make a statement."
    },
    {
        id: 10,
        name: "Destiny",
        image: ring1.src,
        price: 180.99,
        range: 200,
        material: "gold",
        category: "Rings",
        description: "This stunning gold ring is the perfect accessory to add a touch of elegance and sophistication to any outfit. Crafted with high-quality materials, this ring features a sleek and modern design that is sure to turn heads. The gold finish gives it a timeless and luxurious appeal, making it a versatile choice for both casual and formal occasions. Whether you're dressing up for a night out or adding a stylish touch to your everyday look, this gold ring is sure to make a statement."
    },
]

export default ProductList;