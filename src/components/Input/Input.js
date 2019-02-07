import React from 'react';
import './input.scss';


const Input = ({ placeholder, type }) => {
    return (
        <input className={'input'} type={type} placeholder={placeholder}/>
    );
};

export default Input;