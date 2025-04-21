import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import Navbar from "./component/Navbar";
import ImageSlider from "./component/ImageSlider";
import Component from "./component/Component";
import Roadmap from "./component/Roadmap";
import BubbleFlame from "./component/BubleFrame";
import "./component/bublecss.css";
import Footer from "./component/Footer";
import { Analytics } from "@vercel/analytics/react";
import DownloadSection from "./component/Download";

function App() {
  const [count, setCount] = useState(0);
  const images = [
    "	https://cmapp.tv/templates/frontend/images/site/bookmark_frame.png",
    "	https://cmapp.tv/templates/frontend/images/site/movie_frame.png",
    "	https://cmapp.tv/templates/frontend/images/site/home_frame.png",
    // Add more image URLs as needed
  ];

  return (
    <>
    <Analytics/>
      <div className="block bg-neutral-100">
        <Navbar />
        <Component />
        <section id="feature" className="h-[80%] w-full bg-green-300">
          <div className="feature flex flex-col items-center justify-center h-screen">
            <h2 className="text-4xl font-bold mb-5">Supported Sites</h2>
            <div className="container grid  grid-cols-3 grid-rows-2 gap-9 m-5">
              <div className=" justify-self-end flex flex-col items-center">
                <img
                  src="https://yoteshinportal.cc/assets/circle-logo.png"
                  width="45px"
                  height="45px"
                />
                <span>Yoteshin</span>
              </div>
              <div className="justify-self-center flex flex-col items-center">
                <img
                  src="https://uptime.com/media/website_profiles/megaup.net.png"
                  width="45px"
                  height="45px"
                />
                <span>Megaup</span>
              </div>
              <div className="justify-self-start flex flex-col items-center">
                <img
                  src="https://www.iclarified.com/images/news/51436/242907/242907-128.png
                  "
                  width="45px"
                  height="45px"
                />
                <span>Mega.nz</span>
              </div>

              <div className="col-span-3 justify-self-stretch flex items-center justify-center gap-20">
                
                <div className="item flex flex-col justify-center items-center">
                  <img
                    src="https://streamwish.com/wish_dark/images/favicon/favicon.ico"
                    width="45px"
                    height="45px"
                  />
                  <span>Streamwish</span>
                </div>
              </div>
            </div>
            
          </div>
        </section>
        <DownloadSection/>
        <section id="intro" className="w-full block bg-blue-400 ">
          <h3 className="flex items-center justify-center p-5 text-4xl font-bold">
            Introduce App
          </h3>
          <Roadmap />
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default App;
