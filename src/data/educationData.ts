export interface SubjectMark {
  subjectName: string;
  code?: string;
  marksObtained?: number;
  totalMarks?: number;
  grade?: string;
}

export interface BTechSemester {
  semester: string;
  tgpa: string;
  courses: Array<{
    code: string;
    title: string;
    grade: string;
  }>;
}

export interface EducationEntry {
  id: string;
  degreeName: string;
  institution: string;
  timeline: string;
  gradeLabel: string;
  gradeValue: string;
  board?: string;
  rollNo?: string;
  marksheetImages?: string[];
  subjectMarks?: SubjectMark[];
  btechSemesters?: BTechSemester[];
}

export const educationData: EducationEntry[] = [
  {
    id: "edu-1",
    degreeName: "Bachelor of Technology - Computer Science and Engineering",
    institution: "Lovely Professional University, Punjab, India",
    timeline: "August 2024 - Present",
    gradeLabel: "CGPA",
    gradeValue: "8.98",
    btechSemesters: [
      {
        semester: "Semester I",
        tgpa: "9.05",
        courses: [
          { code: "MTH174", title: "Engineering Mathematics", grade: "Outstanding (O)" },
          { code: "MEC136", title: "Engineering Graphics and CAD", grade: "Outstanding (O)" },
          { code: "CSE326", title: "Internet Programming Laboratory", grade: "Excellent (A+)" },
          { code: "CSE111", title: "Orientation to Computing-I", grade: "Excellent (A+)" },
          { code: "PHY110", title: "Engineering Physics", grade: "Excellent (A+)" },
          { code: "CSD108", title: "Python Programming", grade: "Very Good (A)" },
          { code: "PES318", title: "Soft Skills-I", grade: "Very Good (A)" },
        ],
      },
      {
        semester: "Semester II",
        tgpa: "9.00",
        courses: [
          { code: "CSE101", title: "Computer Programming", grade: "Outstanding (O)" },
          { code: "CSE121", title: "Orientation to Computing-II", grade: "Outstanding (O)" },
          { code: "ECE279", title: "Basic Electrical & Electronics Lab", grade: "Outstanding (O)" },
          { code: "CSD102", title: "Database Management Systems", grade: "Excellent (A+)" },
          { code: "CSE320", title: "Software Engineering", grade: "Excellent (A+)" },
          { code: "MTH401", title: "Discrete Mathematics", grade: "Excellent (A+)" },
          { code: "CHE110", title: "Environmental Studies", grade: "Excellent (A+)" },
          { code: "ECE249", title: "Basic Electrical & Electronics Eng.", grade: "Very Good (A)" },
          { code: "PEL130", title: "Advanced Communication Skills-I", grade: "Very Good (A)" },
        ],
      },
      {
        semester: "Semester III",
        tgpa: "9.14",
        courses: [
          { code: "CSD103", title: "Probability & Statistics for Data Science", grade: "Outstanding (O)" },
          { code: "CSD203", title: "Data Exploration & Preparation", grade: "Excellent (A+)" },
          { code: "CSD204", title: "Data Visualization & Storytelling", grade: "Excellent (A+)" },
          { code: "CSE202", title: "Object Oriented Programming", grade: "Excellent (A+)" },
          { code: "CSE205", title: "Data Structures & Algorithms", grade: "Excellent (A+)" },
          { code: "GEN231", title: "Community Development Project", grade: "Excellent (A+)" },
          { code: "PEL134", title: "Upper Intermediate Communication Skills-II", grade: "Excellent (A+)" },
        ],
      },
      {
        semester: "Semester IV",
        tgpa: "8.70",
        courses: [
          { code: "CSE325", title: "Operating Systems Laboratory", grade: "Outstanding (O)" },
          { code: "CSD101", title: "Data Management", grade: "Excellent (A+)" },
          { code: "CSD234", title: "Data Science with R", grade: "Excellent (A+)" },
          { code: "CSE310", title: "Programming in Java", grade: "Excellent (A+)" },
          { code: "PEA307", title: "Advanced Analytical Skills-I", grade: "Excellent (A+)" },
          { code: "CSD301", title: "Descriptive Analytics Project", grade: "Very Good (A)" },
          { code: "CSE316", title: "Operating Systems", grade: "Very Good (A)" },
          { code: "ERT425", title: "Entrepreneurship & Business Basics", grade: "Very Good (A)" },
        ],
      },
    ],
  },
  {
    id: "edu-2",
    degreeName: "Intermediate (Class XII)",
    institution: "B.D. Public School, Patna, Bihar",
    timeline: "April 2022 - March 2024",
    gradeLabel: "Percentage",
    gradeValue: "93.2%",
    board: "CBSE (Central Board of Secondary Education)",
    rollNo: "22639795",
    marksheetImages: ["/Image/12th_Marksheet_p1.jpg", "/Image/12th_Marksheet_p2.jpg"],
    subjectMarks: [
      { code: "048", subjectName: "Physical Education", marksObtained: 99, totalMarks: 100, grade: "A1" },
      { code: "043", subjectName: "Chemistry", marksObtained: 95, totalMarks: 100, grade: "A1" },
      { code: "301", subjectName: "English Core", marksObtained: 94, totalMarks: 100, grade: "A1" },
      { code: "041", subjectName: "Mathematics", marksObtained: 92, totalMarks: 100, grade: "A1" },
      { code: "042", subjectName: "Physics", marksObtained: 86, totalMarks: 100, grade: "A1" },
      { code: "083", subjectName: "Computer Science", marksObtained: 85, totalMarks: 100, grade: "B1" },
    ],
  },
  {
    id: "edu-3",
    degreeName: "Matriculation (Class X)",
    institution: "B.D. Public School, Patna, Bihar",
    timeline: "April 2020 - March 2022",
    gradeLabel: "Percentage",
    gradeValue: "94.6%",
    board: "CBSE (Central Board of Secondary Education)",
    rollNo: "22197182",
    marksheetImages: ["/Image/10th_Marksheet_p1.jpg", "/Image/10th_Marksheet_p2.jpg"],
    subjectMarks: [
      { code: "086", subjectName: "Science", marksObtained: 97, totalMarks: 100, grade: "A1" },
      { code: "184", subjectName: "English Language & Literature", marksObtained: 95, totalMarks: 100, grade: "A1" },
      { code: "087", subjectName: "Social Science", marksObtained: 95, totalMarks: 100, grade: "A1" },
      { code: "002", subjectName: "Hindi Course-A", marksObtained: 93, totalMarks: 100, grade: "A1" },
      { code: "041", subjectName: "Mathematics Standard", marksObtained: 93, totalMarks: 100, grade: "A1" },
      { code: "165", subjectName: "Computer Applications (Additional)", marksObtained: 92, totalMarks: 100, grade: "A2" },
    ],
  },
];
