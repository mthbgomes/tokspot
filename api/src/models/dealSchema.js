import mongoose from "mongoose";

const { Schema } = mongoose;

const dealSchema = new Schema(
  {
    dealTitle: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    dealValue: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    stage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "kanbanColumn",
      required: true,
    },
  },
  { timestamps: true }
);

const Deal = mongoose.model("Deal", dealSchema);

export default Deal;
