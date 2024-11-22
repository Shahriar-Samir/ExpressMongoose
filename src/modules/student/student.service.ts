import { StudentType } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (student: StudentType) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: number) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export default {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
