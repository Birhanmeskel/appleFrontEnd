import React, { useState, useEffect } from "react";
import "./YoutubeVideos.css";

function YoutubeVideos() {
  const [youTubeVideos, setyoutubeVideos] = useState([]);
  useEffect(() => {
    async function getVideos() {
      const response = await fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyDyGVpa8FXuVZVRixtmvtoUbh45GbIhdis"
      );
      const data = await response.json();
      setyoutubeVideos(data.items);
    }
    getVideos();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row h-100 text-center">
            {/* title */}
          <div className="col-12">
            <div className="font-weight-bold h1">
              Latest Videos
            </div>
          </div>
          {youTubeVideos?.map((singleVideo, i) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;

            return (
              <div key={i} className="col-sm-12 col-md-6 mb-md-5">
                <div className="singleVideoWrapper">
                  {/* video thumbnail */}
                  <div>
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  {/* video info */}
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideos;
