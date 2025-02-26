import mongoose,{Schema,Document} from 'mongoose';

mongoose.pluralize(null);
export interface ICourse extends Document{
    courseName: string;
    description: string;
    courseImage: string;
    instructor: Schema.Types.ObjectId;
    lessons: Schema.Types.ObjectId[];
    studentsEnrolled: Schema.Types.ObjectId[];
}


const courseSchema = new Schema<ICourse>(
    {
        courseName: {type: String, required: true},
        description: {type: String, required: true},
        courseImage: {type: String, required: true},
        instructor: {type: Schema.Types.ObjectId, ref: 'User'},
        lessons: [{type: Schema.Types.ObjectId, ref: 'Lesson'}],
        studentsEnrolled: [{type: Schema.Types.ObjectId, ref: 'User'}]
    },
    {timestamps: true}
);

export const courseModel =  mongoose.model<ICourse>("Course",courseSchema);
