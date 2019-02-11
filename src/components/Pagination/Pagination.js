import React from 'react';
import { Link } from "react-router-dom";
import './pagination.scss';
import { range } from '../../utils';


const pages = (total, limit) => Math.ceil(total / limit);

const buttonClass = (currentPage, page) => {
    return currentPage === page ? 'pagination__button pagination__button_active' : 'pagination__button';
};
const arrowBack = (currentPage) => {
    return currentPage !== 1 ? (
        <li className={'pagination__button pagination__button_control'}>
            <Link to={`/?page=${currentPage - 1}`}>
                <i className="fas fa-angle-left">
                </i>
            </Link>
        </li>
    ) : null;
};

const arrowForward = (currentPage, pages) => {
    return currentPage !== pages ? (
		<li className={'pagination__button pagination__button_control'}>
            <Link to={`/?page=${currentPage + 1}`}>
                <i className="fas fa-angle-right">
                </i>
            </Link>
		</li>
    ) : null;
};

const Pagination = ({ total, limit, currentPage }) => (
    <ul className={'pagination'}>
        { arrowBack(currentPage) }
        {
            range(pages(total, limit)).map(item => {
                return (
                    <li key={item} className={buttonClass(currentPage, item)}>
                        <Link to={`/?page=${item}`}>{item}</Link>
                    </li>
                );
            })
        }
        { arrowForward(currentPage, pages(total, limit)) }
    </ul>
);

export default Pagination;
