import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CountryType from '../types/countryType';
import InputChangeElementType from '../types/inputChangeElementType';

type Props = {
    name: string,
    inputType: string,
    label: string
    onChange: (e: InputChangeElementType) => void
}

export const NationalityInput = ({name, inputType, label, onChange}: Props): JSX.Element => {
  
    const [inputValue, setInputValue] = useState<string>('');
    const [countries, setCountries] = useState<CountryType[]>([]);
    const [countrySelected, setCountrySelected] = useState<boolean>(null!);

    const getCountries = async(inputValue: string): Promise<void> => {
        
        if(inputValue !== ''){
            const { data }: {data: CountryType[]} = await axios.get(`https://restcountries.com/v3.1/name/${inputValue}`);
            setCountries(data);
            
            data[0].name.common !== inputValue && setCountrySelected(false);
        }

    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        onChange(e);
    }

    const handleChangeFromSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        
        onChange(e);
        setInputValue(e.target.value);
        setCountrySelected(true);
        
    }
    
    useEffect(() => { 
        
        getCountries(inputValue);

        return () => setCountries([]);

    }, [inputValue]);
    

    return (
        <div className={`form-${name}`}>
            <label className={`${name}-label`}>{label}</label>
            <input 
                name={name}
                type={inputType}
                value={inputValue}
                onChange={ handleInputChange } 
                className={`${name}-input`}
            />
            { (countries.length !== 0 && !countrySelected) && 
                <select name={name} className='form-select' size={countries.length <= 2? 2: 3} onChange={ handleChangeFromSelect }>
                    <option value='' >...</option>
                    {countries.map(({name: countryName, flag}) => {

                        return <option key={countryName.common} value={countryName.common} >{ `${countryName.common} ${flag}` } </option>

                    })}
                
                </select>
            }
        </div>
  );
}
