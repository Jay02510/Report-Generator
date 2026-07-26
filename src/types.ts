export type Language = 'en' | 'ko';

export interface SampleReport {
  id: string;
  studentNameEn: string;
  studentNameKo: string;
  grade: string;
  gradeKo: string;
  subject: string;
  teacherName: string;
  rawInput: string;
  flaggedIssue?: string;
  translatedSummaryKo: string;
  parentScriptKo: {
    greeting: string;
    academicProgress: string;
    behaviorAndAttitude: string;
    actionItems: string;
    closing: string;
  };
}

export interface DemoBookingFormData {
  directorName: string;
  academyName: string;
  phone: string;
  email: string;
  location: string;
  foreignTeacherCount: number;
  studentCount: number;
  preferredTime: string;
}
