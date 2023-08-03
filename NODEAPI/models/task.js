import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
    },
    description: {
        type: String,
        unique: true,
        required: true,
    },
    isCompleted: {
          type:  Boolean,
          default: false,
    },
    user: {
        type: mongoose.Schema.Types.objectId,
        ref: "user",
        required: true, 
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

// creating User
 export const Task = mongoose.model("Task", Schema);  