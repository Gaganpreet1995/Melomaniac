import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  getPopularList,
  getBollywoodLongSongs,
  getHollywoodSongs,
  getGhazalList,
} from "../api/api";

import Slide from "../slides/slides";

import ReactPlayer from "react-jinke-music-player";

import "react-jinke-music-player/assets/index.css";

export default () => {
  const [techno, setTechno] = useState([]);
  const [pryda, setPryda] = useState([]);
  const [tech, setTech] = useState([]);
  const [house, setHouse] = useState([]);
  const [playerSongTitle, setPlayerSongTitle] = useState("");
  const [playerSongUrl, setPlayerSongUrl] = useState("");
  const [playsong, setPlaysong] = useState(false);
  const [loading, setLoading] = useState(false);

  const getTechnoList = async () => {
    const songData = [];

    let data = await getPopularList();

    await data.map((ob) => {
      songData.push({
        id: ob.id,
        title: ob.title,
        imgUrl: ob.thumbnails.high.url,
      });
      await setTechno(songData);
    });
  };

  
};
