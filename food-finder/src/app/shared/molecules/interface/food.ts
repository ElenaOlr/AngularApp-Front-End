export interface Food {
  data: [
    _id: String,
    name: String,
    restaurant: String,
    img: String,
    category: String[],
    quantity: Number,
    price: Number,
  ];
  status?: string;
}
