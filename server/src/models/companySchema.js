import mongoose from "mongoose";

const { Schema } = mongoose;

const companySchema = new Schema(
  {
    _id: Schema.Types.ObjetcId,
    name: {
      type: String,
      required: true,
    },
    image: String,
    users: [String],
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);

export default Company;
