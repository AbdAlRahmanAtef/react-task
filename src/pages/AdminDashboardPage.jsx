import React, { useEffect, useState } from "react";
import { AuthContext } from "../authContext";
import MkdSDK from "../utils/MkdSDK";
import VideoCard from "../components/VideoCard";

const DATA = [
  {
    id: 1,
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Ffreepngimg.com%2Fsave%2F120346-piece-anime-one-free-download-png-hd%2F1730x862&tbnid=dokS6sRPj7UumM&vet=12ahUKEwj6heGuxvOAAxXlsEwKHUXzAE8QMygbegUIARCxAQ..i&imgrefurl=https%3A%2F%2Ffreepngimg.com%2Fpng%2F120346-piece-anime-one-free-download-png-hd&docid=FdOn329zE8LPvM&w=1730&h=862&q=anime%20png&ved=2ahUKEwj6heGuxvOAAxXlsEwKHUXzAE8QMygbegUIARCxAQ",
    desc: "Rune raises $100,000 for marketing through NFT butterflies sale",
    author: "ninjanft",
    likes: 220,
  },
  {
    id: 2,
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Ffreepngimg.com%2Fsave%2F120346-piece-anime-one-free-download-png-hd%2F1730x862&tbnid=dokS6sRPj7UumM&vet=12ahUKEwj6heGuxvOAAxXlsEwKHUXzAE8QMygbegUIARCxAQ..i&imgrefurl=https%3A%2F%2Ffreepngimg.com%2Fpng%2F120346-piece-anime-one-free-download-png-hd&docid=FdOn329zE8LPvM&w=1730&h=862&q=anime%20png&ved=2ahUKEwj6heGuxvOAAxXlsEwKHUXzAE8QMygbegUIARCxAQ",
    desc: "Rune raises $100,000 for marketing through NFT butterflies sale",
    author: "ninjanft",
    likes: 220,
  },
  {
    id: 3,
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Ffreepngimg.com%2Fsave%2F120346-piece-anime-one-free-download-png-hd%2F1730x862&tbnid=dokS6sRPj7UumM&vet=12ahUKEwj6heGuxvOAAxXlsEwKHUXzAE8QMygbegUIARCxAQ..i&imgrefurl=https%3A%2F%2Ffreepngimg.com%2Fpng%2F120346-piece-anime-one-free-download-png-hd&docid=FdOn329zE8LPvM&w=1730&h=862&q=anime%20png&ved=2ahUKEwj6heGuxvOAAxXlsEwKHUXzAE8QMygbegUIARCxAQ",
    desc: "Rune raises $100,000 for marketing through NFT butterflies sale",
    author: "ninjanft",
    likes: 220,
  },
  {
    id: 4,
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Ffreepngimg.com%2Fsave%2F120346-piece-anime-one-free-download-png-hd%2F1730x862&tbnid=dokS6sRPj7UumM&vet=12ahUKEwj6heGuxvOAAxXlsEwKHUXzAE8QMygbegUIARCxAQ..i&imgrefurl=https%3A%2F%2Ffreepngimg.com%2Fpng%2F120346-piece-anime-one-free-download-png-hd&docid=FdOn329zE8LPvM&w=1730&h=862&q=anime%20png&ved=2ahUKEwj6heGuxvOAAxXlsEwKHUXzAE8QMygbegUIARCxAQ",
    desc: "Rune raises $100,000 for marketing through NFT butterflies sale",
    author: "ninjanft",
    likes: 220,
  },
  {
    id: 5,
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Ffreepngimg.com%2Fsave%2F120346-piece-anime-one-free-download-png-hd%2F1730x862&tbnid=dokS6sRPj7UumM&vet=12ahUKEwj6heGuxvOAAxXlsEwKHUXzAE8QMygbegUIARCxAQ..i&imgrefurl=https%3A%2F%2Ffreepngimg.com%2Fpng%2F120346-piece-anime-one-free-download-png-hd&docid=FdOn329zE8LPvM&w=1730&h=862&q=anime%20png&ved=2ahUKEwj6heGuxvOAAxXlsEwKHUXzAE8QMygbegUIARCxAQ",
    desc: "Rune raises $100,000 for marketing through NFT butterflies sale",
    author: "ninjanft",
    likes: 220,
  },
];

const AdminDashboardPage = () => {
  const [page, setPage] = useState(1);
  const [videos, setVideos] = useState([]);
  const { dispatch } = React.useContext(AuthContext);

  let sdk = new MkdSDK();
  const getData = async () => {
    sdk.setTable("video");
    const data = await sdk.callRestAPI(
      { payload: {}, page, limit: 10 },
      "PAGINATE"
    );

    setVideos(data);
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  useEffect(() => {
    getData();
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
        {DATA.map((v) => (
          <VideoCard key={v.id} item={v} />
        ))}
      </div>
    </>
  );
};

export default AdminDashboardPage;
