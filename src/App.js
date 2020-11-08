import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import redditImageFetcher from "reddit-image-fetcher";
import Images from "../src/Images";
import Main from "../src/components/main";

function App() {
  // const [id, setId] = useState();
  // const [title, setTitle] = useState();
  // const [image, setImage] = useState();
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getMemes() {
      let res = await redditImageFetcher.fetch({
        type: "meme",
        total: 20,
        addSubreddit: ["memes", "funny"],
        removeSubreddit: ["dankmemes"],
      });

      let details = res.map((item) => {
        return { id: item.id, title: item.title, img: item.image };
      });
      setItems(details);
    }
    getMemes();
  }, []);

  return (
    <div className="App">
      {items &&
        items.map((item) => {
          return (
            <div key={item.title}>
              {" "}
              {/*Performance optimisation*/}
              <Main title={item.title} img={item.img} />
            </div>
          );
        })}
    </div>
  );
}

export default App;
