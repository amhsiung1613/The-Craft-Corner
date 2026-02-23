export type Review = {
  id: number;
  name: string;
  text: string;
  rating: number;
};


const reviews = [
  {
    id: 1,
    name: "Emily R.",
    text: "Absolutely love the quality. The ring is stunning!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sophia M.",
    text: "Shipping was fast and packaging was beautiful.",
    rating: 4,
  },
  {
    id: 3,
    name: "Olivia T.",
    text: "Great customer service and gorgeous necklace.",
    rating: 5,
  },
];

export default reviews;