import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Author = mongoose.model("Author", authorSchema);

export default Author;