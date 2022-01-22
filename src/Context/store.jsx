import React, { useState, useEffect } from "react";

const MyContext = React.createContext({
  addToFavorites: () => {},
  likeHandler: () => {},
  fetchRequest: () => {},
});

export const MyContextProvider = (props) => {
  const [favorites, setfavorites] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [items, setItems] = useState([]);
const [isLoading , setIsLoading] = useState(false)
  const fetchRequest = async () => {
    setIsLoading(true)
    const api_Key = "";
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=50&api_key=${api_Key}`
    );
    const data = await response.json();
    const allItems = data.photos.map((item) => {
      return {
        id: item.id,
        title: item.camera.full_name,
        img: item.img_src,
        date: item.rover.launch_date,
        like: false,
      };
    });
    setItems(allItems);
    setIsLoading(false)
  };

  const likeHandler = (item) => {
    setItems(items => items.map((el) => (el.id === item.id ? { ...el, like: !el.like } : el))
    );
  };

  //console.log(items);
  // console.log(favorites, "from favourite arrays");

  return (
    <MyContext.Provider
      value={{
        likeHandler,
        fetchRequest,
        data: items,
        isLoading
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyContext;
