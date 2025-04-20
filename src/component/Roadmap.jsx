import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./roadmap.module.css";

const Roadmap = () => {
  const roadmapData = [
    { year: "Home Page", description: "Description for 2024",src: "home.png" },
    { year: "Movies Page", description: "Description for 2025",src: "movies.png" },
    { year: "Series page", description: "Description for 2026",src: "series.png" },
    { year: "Movie Detail page", description: "Description for 2027",src: "movies_detail.png" },
    { year: "Serie Deatail Page", description: "Description for 2028",src:"series_detail.png"},
   
    // Add more data as needed
  ];

  return (
    <VerticalTimeline>
      {roadmapData.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work p-0 text-3xl block"
          contentStyle={{
            background: "transparent",
            color: "#000",
            padding: "8px",
            borderRadius: "10px",
            boxShadow: "none",
          }}
          contentArrowStyle={{ borderRight: "7px solid #fff" }}
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={
            <i className="flex h-full items-center justify-center">
              {index + 1}
            </i>
          }
        >
          <h3 className="lg:text-center sm:text-lg  text-2xl font-bold vertical-timeline-element-title">
            {item.year}
          </h3>

          <img src={item.src} alt={`Slide ${index}`} className="mt-5" />
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Roadmap;
