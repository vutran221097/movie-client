import React, { useState } from "react";
import "./Browse.css";

// Components
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import MoviesList from "../../components/MoviesList/MoviesList";

// api
import requests from "../../utils/requests";

// init open movie detail
const initOpenStatus = {
  original: false,
  trending: false,
  topRated: false,
  action: false,
  comedy: false,
  horror: false,
  romance: false,
  documentaries: false,
};

const movies = [
  {
    type: "original",
    title: "Original",
    fetchUrl: requests.fetchNetflixOriginals,
  },
  {
    type: "trending",
    title: "Xu hướng",
    fetchUrl: requests.fetchTrending,
  },
  {
    type: "topRated",
    title: "Xếp hạng cao",
    fetchUrl: requests.fetchTrending,
  },
  {
    type: "action",
    title: "Hành động",
    fetchUrl: requests.fetchActionMovies,
  },
  {
    type: "comedy",
    title: "Hài",
    fetchUrl: requests.fetchComedyMovies,
  },
  {
    type: "horror",
    title: "Kinh dị",
    fetchUrl: requests.fetchHorrorMovies,
  },
  {
    type: "romance",
    title: "Lãng mạn",
    fetchUrl: requests.fetchRomanceMovies,
  },
  {
    type: "documentaries",
    title: "Tài liệu",
    fetchUrl: requests.fetchDocumentaries,
  },
];

function Browse() {
  const [openStatus, setOpenStatus] = useState(initOpenStatus);

  // set status category is open
  const onOpenDetail = (type) => {
    const changeStatus = { ...initOpenStatus };
    changeStatus[type] = true;
    setOpenStatus(changeStatus);
  };

  return (
    <div className="movies-page">
      <Navbar />
      <Banner />
      <div className="movies">
        {/* render list */}
        {movies.map((item, index) => {
          return (
            <MoviesList
              type={item.type}
              title={item.title}
              fetchUrl={item.fetchUrl}
              openStatus={openStatus}
              setOpenStatus={(e) => onOpenDetail(e)}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Browse;
