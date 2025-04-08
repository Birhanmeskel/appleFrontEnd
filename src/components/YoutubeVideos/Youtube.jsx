import React, { useEffect, useState } from "react";
import "./Youtube.css";

function Youtube() {
  const [youtubeVids, setYoutubeVids] = useState([]);
  useEffect(() => {
    async function getVideos() {
      const response = await fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyDyGVpa8FXuVZVRixtmvtoUbh45GbIhdis "
      );
      const data = await response.json();
      setYoutubeVids(data.items);
    }
    getVideos();
  }, []);
  return (
    <div className="youtubevids">
      {youtubeVids?.map((singlevids, i) => (
        <div className="card" key={i}>
          <div className="thumb">
            <a
              href={`https://www.youtube.com/watch?v=${singlevids.id.videoId}`}
              rel="noopener noreferrer"
            >
              <img
                src={singlevids.snippet.thumbnails.medium.url}
                alt={singlevids.snippet.title}
              />
            </a>
          </div>
          <div className="card-content">
            <div className="vidTitile">
              <a
                href={`https://www.youtube.com/watch?v=${singlevids.id.videoId}`}
                rel="noopener noreferrer"
              >
                {singlevids.snippet.title}
              </a>
            </div>
            <div className="vidDiscription">
              {singlevids.snippet.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Youtube;
