import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API;

import React from 'react'

const useFetch = ({keyword}) => {
  const [gifURL, setGifURL] = useState("");
  const fetchGifs = async () => {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join()}&limit=1`);
        const {data} = await response.json(); 
        setGifURL(data[0]?.images?.downsized_medium?.url);  
    } catch (error) {
        setGifURL('https://picsum.photos/200');
    }
}

useEffect(() => {
    if(keyword) fetchGifs();
  }, [keyword])

  return gifURL;
  
};

export default useFetch;

