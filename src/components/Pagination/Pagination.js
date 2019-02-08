import React from 'react';
import './pagination.scss';


const range = (number) => {
    const array = [];

    for (let i = 1; i <= number; i++) {
        array.push(i);
    }
    return array;
};

const pages = (total, limit) => Math.ceil(total / limit);
const buttonClass = (currentPage, page) => currentPage === page ? 'pagination__button pagination__button_active' : 'pagination__button';

const Pagination = ({ total, limit, currentPage, changePageHandler }) => (
    <ul className={'pagination'}>
        <li className={'pagination__button pagination__button_control'}
            onClick={() => changePageHandler(currentPage - 1)}>
            <i className="fas fa-angle-left">
            </i>
        </li>
        {range(pages(total, limit)).map(item => {
            return (
                <li key={item} className={buttonClass(currentPage, item)} onClick={() => changePageHandler(item)}>
                    {item}
                </li>
            )
        })}
        <li className={'pagination__button pagination__button_control'}
            onClick={() => changePageHandler(currentPage + 1)}>
            <i className="fas fa-angle-right">
            </i>
        </li>
    </ul>
);

export default Pagination;