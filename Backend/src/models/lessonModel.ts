import mongoose,{Document,Schema} from "mongoose";


mongoose.pluralize(null);

export interface ILesson extends Document {
    lessonName: string;
    courseId: mongoose.Schema.Types.ObjectId;
    lessonId: string;
    videoUrl: string;
    duration: string;
    createdAt: Date;
    updatedAt: Date;
}

const lessonShcema = new Schema({
  lessonName: { type: String, required:true },
  courseId: { type:mongoose.Schema.Types.ObjectId, required:true, ref:'Course' },
  lessonId: { type: String, required:true },
  videoUrl: { type: String, required:true },
  duration: { type: String, required:true },
},
  {
    timestamps: true,
  }
);

