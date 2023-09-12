import React, { useEffect, useState } from "react";
import "./MoviesList.css";
import API from "../../api/apiKey";
import MovieDetail from "../MovieDetail/MovieDetail";
import useAxios from "../../customHook/useAxios";

const MoviesList = (props) => {
  const { title, fetchUrl, type, openStatus, setOpenStatus } = props;
  const [data, setData] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [openedMovie, setOpenedMovie] = useState();

  const { sendRequest } = useAxios();

  const getData = async () => {
    try {
      const res = await sendRequest(fetchUrl);
      if (res) {
        setData(res.results);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Close detail when open movie in another category type
    if (!openStatus[type]) {
      setShowDetail(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openStatus]);

  const openMovie = (item) => {
    // switch movie when click another movie
    if (!openedMovie?.id || openedMovie?.id !== item.id) {
      setOpenedMovie(item);
      setShowDetail(true);
    }

    // open/close movie
    if (openedMovie?.id === item.id) {
      setShowDetail(!showDetail);
    }
  };

  // if movie type is netflix original
  if (title === "Original") {
    return (
      <div className="movies-list">
        <div className="movies-list-original">
          {data.slice(0, 10).map((v, i) => {
            return (
              <div
                className="origin-image"
                key={i}
                onClick={() => {
                  openMovie(v);
                  setOpenStatus(type);
                }}
              >
                <img
                  src={`${`${API.IMAGE_URL}${v.poster_path}`}`}
                  alt={v.name}
                />
              </div>
            );
          })}
        </div>
        {showDetail && openStatus[type] && <MovieDetail detail={openedMovie} />}
      </div>
    );
  }

  // other movie type
  return (
    <div className="movies-list">
      <h1>{title}</h1>
      <div className="movies-list-other">
        {data.map((v, i) => {
          return (
            <div
              className="origin-image"
              key={i}
              onClick={() => {
                openMovie(v);
                setOpenStatus(type);
              }}
            >
              <img
                src={`${`${API.IMAGE_URL}${v.backdrop_path}`}`}
                alt={v.name}
              />
            </div>
          );
        })}
      </div>
      {showDetail && openStatus[type] && <MovieDetail detail={openedMovie} />}
    </div>
  );
};

export default MoviesList;
