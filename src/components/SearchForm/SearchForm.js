import React from "react";
import Input from "../Input/Input";

import './search-form.scss';


const SearchForm = ({ placeholder, searchValue, handleSearch }) => {
    return (
        <div className={'search'}>
            <form action={'/'} className={'search__form'}>
                <Input
                    name={'search'}
                    placeholder={placeholder}
                    value={searchValue}
                    handleOnChange={handleSearch}
                />
            </form>
        </div>
    );
};

export default SearchForm;
