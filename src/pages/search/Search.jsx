import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

// Components
import Navbar from "../../components/Navbar/Navbar";
import SearchForm from "../../components/SearchForm/SearchForm";
import ResultsList from "../../components/ResultsList/ResultsList";

import API from "../../api/apiKey";

const initState = {
  keyword: "",
  genre: "",
  mediaType: "all",
  language: "en",
  year: "",
};

const Search = () => {
  const [dataSearch, setDataSearch] = useState(initState);
  const [searchData, setSearchData] = useState();

  // on change search input
  const onChangeSearchInput = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setDataSearch({ ...dataSearch, [e.target.name]: e.target.value });
  };

  // search and set state
  const onSubmit = async () => {
    try {
      const data = await axios.post(
        `${API.MOVIE_URL}/api/movies/search?api_key=${API.API_KEY}&language=en-US`,
        dataSearch
      );
      if (data.status === 200) {
        setSearchData(data.data.results);
      }
      console.log(dataSearch);
    } catch (e) {
      console.error(e);
    }
  };

  // reset input and list
  const onReset = () => {
    dataSearch(...initState);
    setSearchData(null);
  };

  return (
    <div className="search-page">
      <Navbar />
      <SearchForm
        onChangeSearchInput={onChangeSearchInput}
        onSubmit={onSubmit}
        onReset={onReset}
        dataSearch={dataSearch}
      />
      <ResultsList data={searchData} />
    </div>
  );
};

export default Search;
