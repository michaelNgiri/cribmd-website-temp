import { FC, memo, useState, useCallback, FocusEvent, useEffect, ChangeEvent, useRef } from 'react';
import { InputProps } from 'src/types';
import { Box } from '.';

const _Input: FC<InputProps> = ({
  variant,
  color,
  label,
  helperText,
  error: _error,
  className,
  rows,
  noValidate,
  onBlur,
  onInput,
  labelClassName,
  inputClassName,
  helperTextClassName,
  ...props
}): JSX.Element => {
  const [error, setError] = useState(!noValidate && _error);
  const [validationMessage, setValidationMessage] = useState('');
  const inputRef = useRef<(HTMLInputElement & HTMLTextAreaElement) | null>(null);

  const handleOnBlur = useCallback(
    (e: FocusEvent<HTMLInputElement & HTMLTextAreaElement>) => {
      if (onBlur) {
        onBlur(e);
      }

      if (!noValidate) {
        setValidationMessage(e.currentTarget.validationMessage);
        setError(!e.currentTarget.checkValidity());
      }
    },
    [onBlur, noValidate]
  );

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
      if (onInput) {
        onInput(e);
      }

      if (!noValidate) {
        setValidationMessage(e.target.validationMessage);
        setError(!e.currentTarget.checkValidity());
      }
    },
    [onInput, noValidate]
  );

  useEffect(() => {
    if (!noValidate) {
      setError(!!validationMessage || _error);
    }
  }, [validationMessage, noValidate, _error]);

  useEffect(() => {
    if (!noValidate && inputRef.current) {
      setValidationMessage(
        error
          ? typeof helperText === 'string'
            ? helperText
            : inputRef.current.validationMessage
          : ''
      );
    }
  }, [error, noValidate, helperText]);

  return (
    <Box
      as="label"
      className={`Input input--${variant || 'filled'} ${error ? 'error' : ''} ${
        color || 'tertiary'
      } ${className || ''} ${props.disabled ? 'disabled' : ''}`.replace(/\s+/g, ' ')}>
      {label && (
        <Box as="span" className={`label ${labelClassName || ''}`}>
          {label}
        </Box>
      )}
      {rows ? (
        <textarea
          {...props}
          rows={rows}
          ref={inputRef}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          className={inputClassName || ''}></textarea>
      ) : (
        <input
          {...props}
          ref={inputRef}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          className={inputClassName || ''}
        />
      )}
      {helperText && (
        <Box as="p" className={helperTextClassName || ''}>
          {(typeof helperText === 'boolean' ? validationMessage : helperText) || ' '}
        </Box>
      )}
    </Box>
  );
};

export const Input = memo(_Input);
