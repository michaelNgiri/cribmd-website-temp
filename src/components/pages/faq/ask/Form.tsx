import { FC, memo, useState, useCallback, ChangeEvent, FormEvent } from 'react';

import S from 'src/styles/pages/faq/index.module.scss';
import { Box, Button, Input } from 'src/components/shared';
import {
  FetchStatus,
  APIFreeConsultationResponseModel,
  InputProps,
  AskFormDataProps
} from 'src/types';
import { inputPatterns, apiBaseURL } from 'src/constants';

const fieldsProps: InputProps[] = [
  {
    id: 'name',
    label: 'Full Name (First & Last Names only):',
    placeholder: 'Jane Doe',
    autoComplete: 'name',
    pattern: inputPatterns.name,
    required: true
  },
  {
    id: 'email',
    label: 'E-mail:',
    type: 'email',
    placeholder: 'jane@example.com',
    autoComplete: 'email',
    pattern: inputPatterns.email,
    required: true
  },
  {
    id: 'phone_number',
    label: 'Phone:',
    type: 'tel',
    placeholder: '+2348123456789',
    autoComplete: 'tel',
    noValidate: true,
    pattern: inputPatterns.phone
  },
  { id: 'subject', label: 'Subject:', placeholder: 'The subject...', required: true },
  {
    id: 'description',
    label: 'Description:',
    rows: 7,
    placeholder: 'Your request, question or feedback here...',
    required: true
  }
];

const Form: FC = () => {
  const [request, setRequest] = useState<FetchStatus>({
    status: 'settled',
    err: false,
    statusText: ''
  });
  const [formData, setFormData] = useState<AskFormDataProps>({
    name: '',
    phone_number: '',
    email: '',
    subject: '',
    request_type: 'feedback',
    description: ''
  });
  const [formValidity, setFormValidity] = useState(true);

  const updateRequest = (request: Partial<FetchStatus>) => {
    setRequest((prev) => ({ ...prev, ...request }));
  };

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value.trim() }));
    },
    []
  );

  const handleFormSubmit = useCallback(async () => {
    updateRequest({ status: 'pending', err: false, statusText: '' });

    try {
      const response: APIFreeConsultationResponseModel = await (
        await fetch(`${apiBaseURL}/patient/support_request/create_support_request`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify(formData)
        })
      ).json();

      updateRequest({ status: 'fulfilled', err: !response.success, statusText: response.message });
    } catch (e: any) {
      updateRequest({ status: 'settled', err: true, statusText: e.message });
    }
    // eslint-disable-next-line
  }, [
    formData.name,
    formData.phone_number,
    formData.request_type,
    formData.subject,
    formData.email,
    formData.description
  ]);

  const renderInputs = useCallback(
    ({ id, required, noValidate, ...inputProps }: typeof fieldsProps[0]) => {
      return (
        <Input
          {...inputProps}
          id={id}
          key={id}
          required={required}
          className={S[id!]}
          noValidate={noValidate}
          helperText={
            !noValidate &&
            (id === 'email'
              ? /already/.test(request.statusText)
                ? request.statusText
                : true
              : true)
          }
          error={!formValidity && !formData[id as keyof typeof formData].trim() && required}
          onChange={handleInputChange}
        />
      );
    },
    // eslint-disable-next-line
    [
      request.statusText,
      request.err,
      formData.name,
      formData.email,
      formData.phone_number,
      formData.description,
      formValidity,
      handleInputChange
    ]
  );

  return (
    <Box as="section" key="form">
      <Box as="p" className="mb-4 fw-bold mt-1">
        Send in your request, question or feedback.
      </Box>

      <form
        onSubmit={useCallback(
          (e: FormEvent<HTMLFormElement>) => {
            const formValidity = (e.target as HTMLFormElement).checkValidity();

            e.preventDefault();
            setFormValidity(formValidity);

            if (formValidity) {
              handleFormSubmit();
            }
          },
          [handleFormSubmit]
        )}
        onChange={useCallback(
          () =>
            request.statusText
              ? updateRequest({ status: 'settled', err: false, statusText: '' })
              : null,
          [request.statusText]
        )}
        noValidate>
        <Box className={S.fieldsWrapper}>{fieldsProps.map(renderInputs)}</Box>

        <Button
          variant="contained"
          type="submit"
          className="mt-3 mt-md-4"
          disabled={request.status === 'pending'}>
          {request.status === 'pending' ? 'Sending...' : 'Send'}
        </Button>

        <Box
          as="p"
          className={`text-${
            request.err ? 'error fw-bold' : 'success'
          } mb-2 lh-base text-center mt-4 mt-lg-5`}>
          {request.statusText ? (
            request.err ? (
              <>
                Error: {request.statusText}{' '}
                {/fetch|network/.test(request.statusText) ? '. Are you offline?' : ''}
              </>
            ) : (
              <>
                <Box as="strong">
                  {/submitted/i.test(request.statusText)
                    ? 'Your request/question/feedback has been sent'
                    : request.statusText}
                  !
                </Box>
                <br />
                <Box as="small">We&rsquo;ll get in touch in a moment. Thank you.</Box>
              </>
            )
          ) : (
            ' '
          )}
        </Box>
      </form>
    </Box>
  );
};

export default memo(Form);
