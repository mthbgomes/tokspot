import mongoose from "mongoose";
import bcrypt from "bcrypt";
import uniqueValidator from "mongoose-unique-validator";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      index: { unique: true },
      required: [true, "O campo não pode ser vazio"],
      match: [/\S+@\S+\.\S+/, "Digite um e-mail váldio"],
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: String,
    company: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator, { message: "Este e-mail já está em uso." });

userSchema.pre("save", async function () {
  const user = this;
  if (!user.isModified("password")) {
    return;
  }
  const salt = bcrypt.genSaltSync(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.salt = salt;
  user.password = hash;
  user.email = user.email.toLowerCase();
});

const User = mongoose.model("User", userSchema);

export default User;
