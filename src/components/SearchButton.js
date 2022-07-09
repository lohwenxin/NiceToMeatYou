import React from 'react'
import './SearchButton.scss'

function SearchButton(props) {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (

    <div className='form-container'>
        <div className='form-tab'>
        <div className='search-field'>
            <i  data-feather="search" className='search-icon'></i>
            {/* <p class='search-placeholder'>Search for recipe</p> */}

            <form onSubmit = {handleSubmit}><input autoComplete="off" type='text' pattern='\S+.*' name='input' id='input' className='text-field' value = {props.keyword} onChange = {e => props.setKeyword(e.target.value)} placeholder = "Search recipes..."/></form>

        </div>
        <div className='search-btn' onClick={() => props.setName(props.keyword)}>
            <p>search</p>
        </div>
        </div>
    </div>


    )
}

export default SearchButton
