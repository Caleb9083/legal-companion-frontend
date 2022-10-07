import React from 'react';
import './styles/Button.css';
import { Link } from 'react-router-dom';


const SIZES = ['btn--small', 'btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonSize,
    route
}) => {

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to={`${route}`} className='btn-mobile'>
            <button
                className={`btn  ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};
