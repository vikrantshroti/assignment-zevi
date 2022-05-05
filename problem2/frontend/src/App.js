import React, { useState, useEffect } from "react";
import "./App.css";
import { getImageUrl } from "./utils";

function App() {
  const [data, setData] = useState();

  // hook to fetch data from API at startup
  useEffect(() => {
    fetch("/data").then((res) =>
      res.json().then((data) => {
        console.log("data", data);
        setData(data.photos.photo);
      })
    );
  }, []);

  // the value of the search field
  const [query, setQuery] = useState("");

  // the search result
  const [foundImages, setFoundImages] = useState(data);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = data.filter((item) => {
        return item.title.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      console.log("results", results);
      setFoundImages(results);
    } else {
      setFoundImages(data);
      // If the text field is empty, show all users
    }

    setQuery(keyword);
  };

  return (
    <div className="container">
      <div className="input-container">
        <span className="heading">My Gallary</span>
        <input
          type="search"
          value={query}
          onChange={filter}
          className="input"
          placeholder="search terms like steam, bridge, watch, etc"
        />
        <div className="button-container">
          <span className="login-text">Login</span>
          <button className="signup-button">SignUp</button>
        </div>
      </div>
      <div className="image-container">
        {foundImages &&
          foundImages.length > 0 &&
          foundImages.map((item) => {
            const imageUrl = getImageUrl(item);
            return <img className="image" src={imageUrl} alt={imageUrl} />;
          })}
      </div>
    </div>
  );
}

export default App;
