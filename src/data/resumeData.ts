export interface ResumeData {
  status: "not_uploaded" | "uploaded";
  note: string;
  pdfUrl?: string;
}

export const resumeData: ResumeData = {
  status: "not_uploaded",
  note: "Note: Not uploaded yet",
};
