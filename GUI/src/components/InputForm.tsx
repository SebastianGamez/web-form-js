import React from 'react';

type Props = {
    name: string,
    inputType: string,
    label: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputForm = ({name, inputType, label, onChange}: Props): JSX.Element => {
  return (
    <div className={`form-${name}`}>
        <label className={`${name}-label`}>{label}</label>
        <input name={name} type={inputType} onChange={onChange} className={`${name}-input`} />
    </div>
  );
}
