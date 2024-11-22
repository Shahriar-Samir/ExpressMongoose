export type GurdianType = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type StudentNameType = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type LocalGurdianType = {
  name: string;
  occupation: string;
  address: string;
  contactNo: string;
};

export type StudentType = {
  id: string;
  name: StudentNameType;
  gender: 'male' | 'female';
  dataOfBirth?: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?:
    | 'A'
    | 'A+'
    | 'B'
    | 'B+'
    | 'O+'
    | 'AB+'
    | 'A-'
    | 'B-'
    | 'O-'
    | 'AB-';
  email: string;
  avatar?: string;
  presentAddress: string;
  permanentAddress: string;
  gurdian: GurdianType;
  localGurdian: LocalGurdianType;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
