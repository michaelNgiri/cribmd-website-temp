import { FC, memo, useState, useCallback, ChangeEvent, FormEvent, useContext } from 'react';
import { Box, Button, Input, Anchor } from 'src/components/shared';
import { FetchStatus, APIFreeConsultationResponseModel } from 'src/types';
import { apiBaseURL, inputPatterns } from 'src/constants';
import { AppModalContext } from 'src/pages/_app';
// import { delay } from 'src/utils';

const inputsProps = [
  {
    label: 'Full Name (First & Last Names only):',
    id: 'fullname',
    placeholder: 'John Doe',
    autoComplete: 'name',
    pattern: inputPatterns.name
  },
  {
    label: 'Email:',
    id: 'email',
    placeholder: 'john_doe@example.com',
    autoComplete: 'email',
    type: 'email',
    pattern: inputPatterns.email
  },
  {
    label: 'Phone:',
    id: 'phone',
    placeholder: '+2348012345678',
    autoComplete: 'tel',
    type: 'tel',
    pattern: inputPatterns.phone
  },
  {
    id: 'terms',
    type: 'checkbox',
    className: 'row flex-row align-items-center justify-content-start w-100',
    labelClassName: 'order-1 col-10',
    inputClassName: 'order-0 col-1 mx-0',
    helperTextClassName: 'col-12 order-2'
  }
];

const Form: FC = () => {
  const { handleDisplayModal } = useContext(AppModalContext);
  const [request, setRequest] = useState<FetchStatus>({
    status: 'settled',
    err: false,
    statusText: ''
  });
  const [formData, setFormData] = useState({ fullname: '', email: '', phone: '', terms: '' });
  const [formValidity, setFormValidity] = useState(true);

  const updateRequest = (request: Partial<FetchStatus>) => {
    setRequest((prev) => ({ ...prev, ...request }));
  };

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.type === 'checkbox' ? e.target.checked : e.target.value.trim()
    }));
  }, []);

  const handleConnectMeClick = useCallback(async () => {
    updateRequest({ status: 'pending', err: false, statusText: '' });

    try {
      const response: APIFreeConsultationResponseModel = await (
        await fetch(`${apiBaseURL}/patient/register_promo/`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify(formData)
        })
      ).json();

      updateRequest({ status: 'fulfilled', err: !response.success, statusText: response.message });

      // if (response.success) {
      //   delay(5000, () =>
      //     handleDisplayModal!({
      //       displayModal: false
      //     })
      //   );
      // }
    } catch (e: any) {
      updateRequest({ status: 'settled', err: true, statusText: e.message });
    }
    // eslint-disable-next-line
  }, [formData.fullname, formData.email, formData.phone]);

  const renderInputs = useCallback(
    ({ id, type, label, className, ...inputProps }) => {
      return (
        <Input
          {...inputProps}
          id={id}
          key={id}
          className={className ? `${id} ${className}` : id}
          type={type}
          helperText={
            id === 'email' ? (/already/.test(request.statusText) ? request.statusText : true) : true
          }
          error={
            (!formValidity && !formData[id as keyof typeof formData]) ||
            (id === 'email' && request.err)
          }
          required
          onInput={handleInputChange}
          label={
            type !== 'checkbox' ? (
              label
            ) : (
              <Box as="small">
                * I agree to CribMD&rsquo;s{' '}
                <Anchor
                  href="/legal"
                  routeLink
                  onClick={() => {
                    handleDisplayModal!({
                      displayModal: false
                    });
                    localStorage.setItem('fc_seen', '');
                  }}>
                  Terms of Use
                </Anchor>
              </Box>
            )
          }
        />
      );
    },
    // eslint-disable-next-line
    [
      request.statusText,
      request.err,
      formData.fullname,
      formData.email,
      formData.phone,
      formData.terms,
      formValidity,
      handleInputChange
    ]
  );

  return (
    <Box as="section" key="form">
      <Box as="p" className="px-sm-4 mb-4 mt-1 anim__fadeInUp">
        Fill out the following fields to claim
      </Box>

      <form
        onSubmit={useCallback(
          (e: FormEvent<HTMLFormElement>) => {
            const formValidity = (e.target as HTMLFormElement).checkValidity();

            e.preventDefault();
            setFormValidity(formValidity);

            if (formValidity) {
              handleConnectMeClick();
            }
          },
          [handleConnectMeClick]
        )}
        onChange={useCallback(
          () =>
            request.statusText
              ? updateRequest({ status: 'settled', err: false, statusText: '' })
              : null,
          [request.statusText]
        )}
        noValidate
        className="anim__fadeInUp anim__del--025s">
        <Box className="inputs-wrapper">{inputsProps.map(renderInputs)}</Box>

        <Button
          variant="contained"
          type="submit"
          className="mt-3 mt-md-4"
          disabled={request.status === 'pending'}>
          {request.status === 'pending' ? 'Scheduling...' : 'Get Consulation'}
        </Button>

        <Box as="p" className={`text-${request.err ? 'error fw-bold' : 'success'} mb-2 lh-base`}>
          {request.statusText && !/already/.test(request.statusText) ? (
            request.err ? (
              <>
                Error: {request.statusText}{' '}
                {/fetch|network/.test(request.statusText) ? '. Are you offline?' : ''}
              </>
            ) : (
              <>
                <Box as="strong">{request.statusText}!</Box>
                <br />
                <Box as="small">
                  Kindly check your email for your free telemedicine session link and for more info.
                </Box>
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
