import mongoose from "mongoose";
const usersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    twitterToken: { type: String,},
    bskyToken: { type: String,},
    misskeyToken: { type: String,},
    threadsToken: { type: String},
    createdAt: { type: Date, default: Date.now },
});
export default mongoose.model("users", usersSchema);