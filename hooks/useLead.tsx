import { useMutation } from '@tanstack/react-query';
import axiosHelper from 'helpers/axios.helper';
import { toast } from 'react-toastify';

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
    onSuccess: () => {
      toast.success('Successfully Submitted Enquiry');
    },
  });
};
