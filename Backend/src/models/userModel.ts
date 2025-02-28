import mongoose,{Document} from "mongoose";


mongoose.pluralize(null);

export interface IUser extends Document {
    firstname: string;
    lastname: string;
    contact_no: Number;
    email: string;
    password: string;
    role: 'student' | 'teacher' | 'admin';
    createdAt: Date;
    enrolledCourses: mongoose.Schema.Types.ObjectId[];
} 

const userSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    contact_no: {type: Number, required: true,unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true,default: 'student'},
    enrolledCourses: [{type: mongoose.Schema.Types.ObjectId, ref: 'Course'}]
},
{
    timestamps: true,
});

export const userModel = mongoose.model<IUser>('User', userSchema);
