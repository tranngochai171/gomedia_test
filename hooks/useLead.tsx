import { useMutation } from '@tanstack/react-query';
import axiosHelper from 'helpers/axios.helper';

type SubmitEnquiryPayload = {
  name: string;
  mobile_number: string;
  email: string;
  source: string;
};

export const useSubmitEnquiry = () => {
  return useMutation({
    mutationFn: (payload: SubmitEnquiryPayload) =>
      axiosHelper.post('/api/leads', payload),
  });
};
