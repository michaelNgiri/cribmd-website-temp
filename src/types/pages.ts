export interface APIFreeConsultationResponseModel {
  status: number;
  success: boolean;
  video_call_link: string;
  message: string;
}

export interface ReferralRokenExists {
  status: number;
  success: boolean;
  referral_code_exist: boolean;
}

export interface AskFormDataProps {
  name: string;
  phone_number: string;
  email: string;
  subject: string;
  request_type: string;
  description: string;
}
