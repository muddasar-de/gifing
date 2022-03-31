import { useEffect, useState } from "react";
import "./check.css";
import Gifs from "./components/gif";

const App = () => {
  const [data, setData] = useState([]);
  const [serchItem, setSearchItem] = useState("");
  const fetchGifs = async () => {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=s0V8R2wqKZvNGbQlyfOZqBDKAb36U0aQ"
    );
    const jsonData = await response.json();
    // console.log(jsonData);
    setData(jsonData.data);
  };
  console.log(`data is: ${data}`);
  useEffect(() => {
    fetchGifs();
  }, []);
  return (
    <>
      <div className="m-5 backgound-fluid">
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8 m-5">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-center p-5 my-5 static"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  ></img>
                </a>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              <a
                href="#"
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="#"
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                Favourites
              </a>
              <label>
                Search:
                <input
                  className="border-2-black p-3 px-6 mx-6 "
                  placeholder="Type to search..."
                  onChange={(e) => {
                    setSearchItem(e.target.value);
                  }}
                ></input>
              </label>
            </div>
          </nav>
        </div>
      </div>
      <div className="flex flex-wrap m-10 justify-around">
        {data
          .filter((currentItem) => {
            if (
              currentItem.title.toLowerCase().includes(serchItem.toLowerCase())
            ) {
              return currentItem;
            } else {
              console.log(currentItem);
            }
          })
          .map((val, idx) => {
            return (
              <div key={idx}>
                <Gifs
                  url={val.images.fixed_height.url}
                  title={val.username}
                ></Gifs>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default App;
