import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "axios";
import "./MovieDetail.css";

import API from "../../api/apiKey";

// setting trailer otps
const opts = {
  height: "400",
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};

const MovieDetail = (props) => {
  const { detail } = props;
  const [trailerId, setTrailerId] = useState("default");
  const [isLoading, setIsLoading] = useState(false);

  // get trailer video
  const getTrailer = async () => {
    setIsLoading(true);
    const data = await axios.post(
      `${API.MOVIE_URL}/api/movies/video?api_key=${API.API_KEY}`,
      {
        film_id: detail.id,
      }
    );

    // handle data to get trailer id
    console.log(data);
    if (data.status === 200) {
      setTrailerId(data.data.key);
      setIsLoading(false);
    } else {
      setTrailerId("");
      setIsLoading(false);
    }
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  useEffect(() => {
    getTrailer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detail.id]);

  // render movie detail
  return (
    <div className={`movie-detail`}>
      <div className="movie-detail-info">
        <h1>{detail.name || detail.original_title}</h1>
        <div className="horizon-line"></div>
        <p className="release-date">
          <b>Release Date: {detail.first_air_date}</b>
        </p>
        <p className="vote-average">
          <b>Vote: {detail.vote_average}/10</b>
        </p>
        <p className="overview">{detail.overview}</p>
      </div>
      <div className="movie-detail-trailer">
        {isLoading && (
          <div className="loading-text">
            <h1>Loading...</h1>
          </div>
        )}
        {trailerId ? (
          <YouTube videoId={trailerId} opts={opts} onReady={onReady} />
        ) : (
          <img
            src={`${API.IMAGE_URL}${detail.backdrop_path}`}
            alt={detail.name}
            width={"100%"}
          />
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
