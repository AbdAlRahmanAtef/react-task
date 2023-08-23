import React from "react";
import image from "../assets/image.png";
import author from "../assets/author.png";

const VideoCard = ({ item }) => {
  return (
    <div className="flex items-center justify-between border-[#FFFFFF1F] border rounded-2xl p-4 mb-5">
      <div className="flex items-center gap-5">
        <span className="text-[14px]">
          {item.id.toString().padStart(2, "0")}
        </span>
        <img src={image} alt="" className="w-[118px] h-[64px] rounded-lg" />
        <p className="w-[364px]">{item.desc}</p>
        <p className="text-[#DBFD51] text-[16px] flex items-center gap-1">
          {" "}
          <img src={author} alt="" className="rounded-full w-6 h-6" />
          <span>{item.author}</span>
        </p>
      </div>

      <span className="text-[16px]">{item.likes}</span>
    </div>
  );
};

export default VideoCard;
