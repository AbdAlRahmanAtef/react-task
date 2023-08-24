import React, { useEffect, useState } from "react";
import { AuthContext } from "../authContext";
import MkdSDK from "../utils/MkdSDK";
import VideoCard from "../components/VideoCard";
import Pagination from "../components/Pagination";
import image1 from "../assets/image.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.jpeg";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const DATA = [
  {
    id: "one",
    number: 1,
    image: image1,
    desc: "Rune raises $100,000 for marketing through NFT butterflies sale",
    author: "ninjanft",
    likes: 220,
  },
  {
    id: "two",
    number: 2,
    image: image1,
    desc: "Rune raises $100,000 for marketing through NFT butterflies sale",
    author: "ninjanft",
    likes: 220,
  },
  {
    id: "three",
    number: 3,
    image: image1,
    desc: "Rune raises $100,000 for marketing through NFT butterflies sale",
    author: "ninjanft",
    likes: 220,
  },
  {
    id: "four",
    number: 4,
    image: image1,
    desc: "Rune raises $100,000 for marketing through NFT butterflies sale",
    author: "ninjanft",
    likes: 220,
  },
  {
    id: "five",
    number: 5,
    image: image1,
    desc: "Rune raises $100,000 for marketing through NFT butterflies sale",
    author: "ninjanft",
    likes: 220,
  },
  {
    id: "six",
    number: 6,
    image: image2,
    desc: "Rune raises $100,000 for marketing through NFT butterflies sale",
    author: "kingdom43world",
    likes: 220,
  },
  {
    id: "seven",
    number: 7,
    image: image2,
    desc: "Rune raises $100,000 for marketing through NFT butterflies sale",
    author: "kingdom43world",
    likes: 220,
  },
  {
    id: "eight",
    number: 8,
    image: image2,
    desc: "Rune raises $100,000 for marketing through NFT butterflies sale",
    author: "kingdom43world",
    likes: 220,
  },
  {
    id: "nine",
    number: 9,
    image: image2,
    desc: "Rune raises $100,000 for marketing through NFT butterflies sale",
    author: "kingdom43world",
    likes: 220,
  },
  {
    id: "ten",
    number: 10,
    image: image2,
    desc: "Rune raises $100,000 for marketing through NFT butterflies sale",
    author: "kingdom43world",
    likes: 220,
  },
  {
    id: "eleven",
    number: 11,
    image: image3,
    desc: "Rune raises $100,000 for marketing through NFT butterflies sale",
    author: "deniscrypto",
    likes: 220,
  },
  {
    id: "tewlve",
    number: 12,
    image: image3,
    desc: "Rune raises $100,000 for marketing through NFT butterflies sale",
    author: "deniscrypto",
    likes: 220,
  },
  {
    id: "threeteen",
    number: 13,
    image: image3,
    desc: "Rune raises $100,000 for marketing through NFT butterflies sale",
    author: "deniscrypto",
    likes: 220,
  },
  {
    id: "fourteen",
    number: 14,
    image: image3,
    desc: "Rune raises $100,000 for marketing through NFT butterflies sale",
    author: "deniscrypto",
    likes: 220,
  },
  {
    id: "fiveteen",
    number: 15,
    image: image3,
    desc: "Rune raises $100,000 for marketing through NFT butterflies sale",
    author: "deniscrypto",
    likes: 220,
  },
];

const indexes = [
  { s: 0, e: 5 },
  { s: 5, e: 10 },
  { s: 10, e: 15 },
];

const AdminDashboardPage = () => {
  const [page, setPage] = useState(0);
  const [videos, setVideos] = useState([]);
  const { dispatch } = React.useContext(AuthContext);

  //Does not work => Error: TOKEN_EXPIRED
  // const getData = async () => {
  //   let sdk = new MkdSDK();
  //   sdk.setTable("video");
  //   const data = await sdk.callRestAPI(
  //     { payload: {}, page, limit: 10 },
  //     "PAGINATE"
  //   );

  //   // setVideos(data);
  // };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(videos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setVideos(items);
  };

  useEffect(() => {
    // getData();

    setVideos(DATA.slice(indexes[page].s, indexes[page].e));
  }, [page]);

  return (
    <>
      <div className="w-full min-h-screen text-gray-700 pb-[60px] ">
        <div className="flex items-center justify-between w-full gap-2 py-4 mb-10">
          <p className="font-black text-[48px] text-white">App</p>
          <button onClick={logout} className="logout-btn ">
            Logout
          </button>
        </div>

        <div className="flex items-center gap-1 justify-between mb-5">
          <p className="text-[40px] font-[100]">Today's Leaderboard</p>
          <div className="flex items-center gap-3 justify-between bg-[#1D1D1D] px-4 py-3 rounded-lg">
            <span>30 May 2022</span>
            <span className="w-1 h-1 rounded-full bg-[#696969]"></span>
            <span className="bg-[#9BFF00] rounded-lg py-1 px-[10px]">
              Submissions OPEN
            </span>
            <span className="w-1 h-1 rounded-full bg-[#696969]"></span>
            <span>11:34</span>
          </div>
        </div>

        <div className="flex items-center justify-between  p-4">
          <div className="flex items-center gap-5">
            <span className="text-[14px]">#</span>
            <span className="w-[510px]">Title</span>
            <p>Author</p>
          </div>

          <span className="text-[16px]">Likes</span>
        </div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="videos">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {videos.map((v, i) => (
                  <Draggable key={v.id} draggableId={v.id} index={i}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <VideoCard item={v} number={i + 1} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <Pagination count={3} setCurrentPage={setPage} />
    </>
  );
};

export default AdminDashboardPage;
