// repositories/contactFormRepository.js
import { supabase } from '@/utils/supabase';

export const createContactFormSubmission = async (submissionData) => {
  const { firstName, lastName, email, message, phone } = submissionData;

  const { data, error } = await supabase
    .from('contact_form_data')
    .insert([
      {
        first_name: firstName,
        last_name: lastName,
        email,
        message,
        phone,
      },
    ]);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
