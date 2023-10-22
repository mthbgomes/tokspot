import mongoose from "mongoose";

const { Schema } = mongoose;

const opportunitySchema = new Schema(
  {
    _id: Schema.Types.ObjetcId,
    title: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    stage: {
      type: String,
      required: true,
    },
    customer: {
      type: String,
      required: true,
    },
    estimatedValue: Number,
    estimatedCloseDate: Date,
    description: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    tasks: [String],
  },
  { timestamp: true }
);

const Opportunity = mongoose.model("Opportunity", opportunitySchema);

export default Opportunity;
