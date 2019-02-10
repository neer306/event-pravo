import React from 'react';
import './pagination.scss';
import { range } from '../../utils';


const pages = (total, limit) => Math.ceil(total / limit);
const buttonClass = (currentPage, page) => {
    return currentPage === page ? 'pagination__button pagination__button_active' : 'pagination__button';
};
const arrowBack = (currentPage, changePageHandler) => {
    return currentPage !== 1 ? (
        <li className={'pagination__button pagination__button_control'}
            onClick={() => changePageHandler(currentPage - 1)}>
            <i className="fas fa-angle-left">
            </i>
        </li>
    ) : null;
};
const arrowForward = (currentPage, pages, changePageHandler) => {
    return currentPage !== pages ? (
		<li className={'pagination__button pagination__button_control'}
			onClick={() => changePageHandler(currentPage + 1)}>
			<i className="fas fa-angle-right">
			</i>
		</li>
    ) : null;
};

const Pagination = ({ total, limit, currentPage, changePageHandler }) => (
    <ul className={'pagination'}>
        { arrowBack(currentPage, changePageHandler) }
        {
            range(pages(total, limit)).map(item => {
                return (
                    <li key={item} className={buttonClass(currentPage, item)} onClick={() => changePageHandler(item)}>
                        {item}
                    </li>
                );
            })
        }
        { arrowForward(currentPage, pages(total, limit), changePageHandler) }
    </ul>
);

export default Pagination;