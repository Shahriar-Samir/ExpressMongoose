import { model, Schema } from 'mongoose';
import {
  GurdianType,
  LocalGurdianType,
  StudentNameType,
  StudentType,
} from './student.interface';

const studentNameSchema = new Schema<StudentNameType>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const gurdianSchema = new Schema<GurdianType>({
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
});

const localGurdianSchema = new Schema<LocalGurdianType>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<StudentType>({
  id: { type: String },
  name: studentNameSchema,
  gender: ['male', 'female'],
  dataOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  bloodGroup: ['A', 'A+', 'B', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'],
  avatar: {
    type: String,
    required: true,
  },
  gurdian: gurdianSchema,
  isActive: ['active', 'blocked'],
  localGurdian: localGurdianSchema,
});

export const StudentModel = model<StudentType>('student', studentSchema);
