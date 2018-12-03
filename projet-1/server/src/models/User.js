import mongoose from "mongoose"
const Schema = mongoose.Schema

const userSchema = new Schema({
  mail: {type:String, required:false},
  firstname:{type:String, required:false},
  lastname:{type:String, required:false},
  createAt: {type: Date, default:Date.now},
  avatarUrl: {type: String, required:false},
  address:{type: String, required:false},
})

export default mongoose.model("User", userSchema)
