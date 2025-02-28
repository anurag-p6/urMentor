import mongoose,{ Document,Schema } from "mongoose";

mongoose.pluralize(null);   

export interface ICourse extends Document {
    course:string;
    courseId: string;
    description:string;
    imageurl:string;
    price:Number;
    createdBy: mongoose.Schema.Types.ObjectId;
    createdAt: Date;
    duration:string;
    validity:string;
}

const courseSchema = new Schema({
    courseName: {type:String, required:true},
    courseId: {type:String, required:true},
    description: {type:String, required:true},
    imageurl: {type:String, required:true},
    price: {type:Number, required:true},
    createdBy:{ type:mongoose.Schema.Types.ObjectId, required:true, ref:'User'},
    duration:{type:String,required:true},
    validity: { type:String,required:true},
},
{
    timestamps: true
});

export const courseModel = mongoose.model<ICourse>("Course",courseSchema);