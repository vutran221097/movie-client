import React from "react";
import "./SearchForm.css";

const SearchForm = (props) => {
  const { onChangeSearchInput, onSubmit, onReset, dataSearch } = props;

  // render search form
  return (
    <div>
      <div className="search-form">
        <div className="search-input">
          <input
            type="text"
            name="keyword"
            onChange={onChangeSearchInput}
            value={dataSearch.keyword}
          />
          <svg
            className="svg-inline--fa fa-search fa-w-16 search-form-icon"
            fill="#ccc"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={onSubmit}
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </div>
        <div className="horizon-search-form"></div>

        <div className="search-filter-form">
          <div className="search-filter">
            <div>
              <label>Genre Id</label>
              <input
                name="genre"
                type="number"
                placeholder="Enter genre id..."
                value={dataSearch.genre}
                onChange={onChangeSearchInput}
              />
            </div>
            <div>
              <label>Media Type</label>
              <select
                name="mediaType"
                value={dataSearch.mediaType}
                onChange={onChangeSearchInput}
              >
                <option value="all">All</option>
                <option value="movie">Movie</option>
                <option value="tv">TV</option>
                <option value="person">Person</option>
              </select>
            </div>
            
          </div>
          <div className="search-filter">
            <div>
              <label>Year</label>
              <input
                name="year"
                type="number"
                placeholder="Enter year..."
                value={dataSearch.year}
                onChange={onChangeSearchInput}
              />
            </div>
            <div>
              <label>Language</label>
              <select
                name="language"
                value={dataSearch.language}
                onChange={onChangeSearchInput}
              >
                <option value="en">English</option>
                <option value="ja">Japan</option>
                <option value="ko">Korea</option>
              </select>
            </div>
          </div>
        </div>

        <div className="search-form-action">
          <button type="button" onClick={onReset}>
            Reset
          </button>
          <button type="button" onClick={onSubmit}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
