import mongoose from "mongoose";

const { Schema } = mongoose;

const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      match: [
        /\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[0-9])[0-9]{3}\-?[0-9]{4}$/,
      ],
    },
    email: {
      type: String,
      required: true,
      match: [/\S+@\S+\.\S+/, "Digite um e-mail váldio"],
      lowercase: true,
    },
    opportunities: [String],
    tasks: [String],
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
