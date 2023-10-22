import mongoose from "mongoose";
import bcrypt from "bcrypt";
import uniqueValidtor from "mongoose-unique-validtor";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    _id: Schema.Types.ObjetcId,
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

userSchema.plugin(uniqueValidtor, { message: "Este e-mail já está em uso." });

userSchema.pre("save", async function () {
  const user = this;
  if (!user.isModified("password")) {
    return;
  }
  const salt = await bcrypt.gentSaltSync(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.salt = salt;
  user.password = hash;
});

userSchema.methods.comparePassword = async (candidatePassword) => {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
