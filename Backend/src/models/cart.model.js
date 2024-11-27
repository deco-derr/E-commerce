import mongoose, { Schema } from "mongoose";

const cartModel = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
  createAt: { type: Date, default: Date.now() },
});

export const Cart = mongoose.model("Cart", cartModel);
