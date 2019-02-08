import React from 'react';
import './button.scss';


const Button = ({ type='text', children }) => {
    return (
        <button className={'button'} type={type}>{children}</button>
    );
};

export default Button;