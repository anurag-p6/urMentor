import mongoose,{Schema, Document} from 'mongoose'

mongoose.pluralize(null);
export interface IUser extends Document {
    firstname: string;
    lastname: string;
    contact_No: number;
    email: string;
    password: string;
    role: "student"| "instructor" | "admin";
    enrolledCourses: Schema.Types.ObjectId[];
}


const userSchema = new Schema<IUser>(
 {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    contact_No: { type: Number, required: true },
    email: { type: String, required: true },
    password:{ type: String, required: true },
    role:{ type: String, enum:["student","instructor","admin"] ,default: "student"},
    enrolledCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
 },
 { timestamps: true }
);

export const userModal = mongoose.model<IUser>('User', userSchema);
