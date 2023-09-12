import React, { useState } from "react";
import "./ResultsList.css";
import API from "../../api/apiKey";
import MovieDetail from "../MovieDetail/MovieDetail";

const ResultsList = (props) => {
  const { data } = props;
  const [movieDetail, setMovieDetail] = useState();
  const [showDetail, setShowDetail] = useState(false);

  // check open / close movie detail
  const onOpenDetail = (item) => {
    if (!movieDetail || movieDetail.id !== item.id) {
      setMovieDetail(item);
      setShowDetail(true);
    } else {
      setShowDetail(!showDetail);
    }
  };

  return (
    <div className="results-container">
      <h1>Search Result</h1>
      {data?.length ? (
        <div className="result-list">
          {data.map((v, i) => {
            return (
              <div
                id={v.id}
                className="result-item-image"
                key={i}
                onClick={() => {
                  onOpenDetail(v);
                }}
              >
                {v.poster_path ? (
                  <div>
                    <img
                      src={`${`${API.IMAGE_URL}${v.poster_path}`}`}
                      alt={v.name}
                    />
                  </div>
                ) : (
                  <div className="result-image-error">
                    <img
                      src={`${`${API.IMAGE_URL}${v.poster_path}`}`}
                      alt={v.name}
                    />
                    <p>Not found</p>
                  </div>
                )}

                {showDetail && movieDetail.id === v.id && (
                  <div className="result-detail">
                    <MovieDetail detail={movieDetail} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : data ? (
        <p className="results-error">No result found!</p>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ResultsList;
