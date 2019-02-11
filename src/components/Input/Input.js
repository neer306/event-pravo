import React from 'react';
import './input.scss';


const Input = ({ handleOnChange, ...rest }) => {
    return (
        <input className={'input'} {...rest} onChange={handleOnChange}/>
    );
};

export default Input;
