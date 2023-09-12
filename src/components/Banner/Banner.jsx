import React, { useMemo, useState, useEffect } from "react";
import "./Banner.css";
import API from "../../api/apiKey";
import useAxios from "../../customHook/useAxios";
import requests from "../../utils/requests";

const Banner = () => {
  const [data, setData] = useState([]);
  const { sendRequest } = useAxios();

  const getData = async () => {
    try {
      const res = await sendRequest(requests.fetchNetflixOriginals);
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

  // random movie to set banner
  const itemIndex = useMemo(() => {
    return Math.floor(Math.random() * data?.length - 1);
  }, [data]);

  // render banner
  return (
    <div>
      <div className="banner">
        <div
          className="banner-image"
          style={{
            backgroundImage: `url(${`${API.IMAGE_URL}${data[itemIndex]?.backdrop_path}`})`,
          }}
        ></div>
        <div className="banner-info">
          <h1>{data[itemIndex]?.name}</h1>
          <div className="banner-actions">
            <button type="button">Play</button>
            <button type="button">My List</button>
          </div>
          <p className="banner-overview">
            {data[itemIndex]?.overview.length > 200
              ? data[itemIndex]?.overview.slice(0, 200) + "..."
              : data[itemIndex]?.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
