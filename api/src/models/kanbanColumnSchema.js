import mongoose from "mongoose";

const { Schema } = mongoose;

const kanbanColumnSchema = new Schema(
  {
    columnTitle: {
      type: String,
      required: true,
    },
    columnTotal: {
      type: Number,
    },
  },
  { timestamps: true }
);

const kanbanColumn = mongoose.model("kanbanColumn", kanbanColumnSchema);

export default kanbanColumn;
