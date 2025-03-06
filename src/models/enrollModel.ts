import mongoose,{Document,Schema} from "mongoose";

mongoose.pluralize(null);

export interface IEnroll extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  courseId: mongoose.Schema.Types.ObjectId;
  enrolledAt: Date;
  validUpto: Date;
  progress: Number;
  completed: Boolean;
}

const enrollSchema = new Schema({
  userId: { type:mongoose.Schema.Types.ObjectId, required:true, ref:'User' },
  courseId: { type:mongoose.Schema.Types.ObjectId, required:true, ref:'Course' },
  enrolledAt: { type: Date, default: Date.now },
  validUpto: { type: Date, required:true },
  progress: { type: Number, required:true }, 
  completed: { type: Boolean, required:true }
})

export const enrollModel = mongoose.model<IEnroll>("Enroll",enrollSchema);