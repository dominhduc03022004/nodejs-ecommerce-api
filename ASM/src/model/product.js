import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
productSchema.plugin(mongoosePaginate);
// Tao ra 1 model ten la Product
export default mongoose.model("Product", productSchema);
