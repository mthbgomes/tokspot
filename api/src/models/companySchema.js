import mongoose from "mongoose";

const { Schema } = mongoose;

const companySchema = new Schema(
  {
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
