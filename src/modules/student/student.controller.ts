import { Request, Response } from 'express';
import studentService from './student.service';

const createStudent = async (req: Request, res: Response) => {
  const { student: studentData } = req.body;

  try {
    const result = await studentService.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    res.json({
      success: false,
      error: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students are retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.json({
      success: false,
      err,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const numId = parseInt(id);
    const result = await studentService.getSingleStudentFromDB(numId);
    res.status(200).json({
      success: true,
      message: 'Student data retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.json({
      success: false,
      err,
    });
  }
};

export default {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
