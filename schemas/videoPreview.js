import React from "react";
import getVideoId from "get-video-id";

const VideoPreview = ({ value }) => {
    // return(<pre>{JSON.stringify(value, null, 2)}</pre>)
  if (value.url) {
    const video = getVideoId(value.url);
    return (
        <iframe
        title='Project Video'
          src={`${
            video.service === "youtube"
              ? "https://www.youtube.com/embed/"
              : "https://player.vimeo.com/video/"
          }${video.id}`}
          width="480"
          height="270"
          frameborder="0"
          allow="fullscreen"
        ></iframe>
      );
  } else {
    return <div>Missing URL</div>;
    
  }
};

export default {
  name: "videoPreview",
  title: "Video Preview",
  type: "object",
  fields: [
    {
      name: "url",
      title: "URL",
      type: "url",
      description: "Paste YouTube or Vimeo URL here.",
    },
  ],

  preview: {
    select: {
      url: "url",
    },
    component: VideoPreview,
  },
};
