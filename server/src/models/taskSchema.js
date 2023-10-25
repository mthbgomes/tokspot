import mongoose from "mongoose";

const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    assignedTo: String,
    // ? É necessário sempre ter a empresa? Ver isso para opportunity também.
    company: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
    customer: String,
    dueDate: Date,
    closedAt: Date,
    opportunity: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
