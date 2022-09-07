import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    Image: IMG1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    github: "https://www.filimo.com",
    demo: "google.com",
  },
  {
    id: 2,
    Image: IMG2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    github: "github.com",
    demo: "google.com",
  },
  {
    id: 3,
    Image: IMG3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    github: "github.com",
    demo: "google.com",
  },
  {
    id: 4,
    Image: IMG4,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    github: "github.com",
    demo: "google.com",
  },
  {
    id: 5,
    Image: IMG5,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    github: "github.com",
    demo: "google.com",
  },
  {
    id: 6,
    Image: IMG6,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    github: "github.com",
    demo: "google.com",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Resent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((item) => {
          return (
            <>
              <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={item.Image} alt="" />
                </div>
                <h3>{item.title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={item.github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={item.demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            </>
          );
        })}
      </div>
    </section>
  );
}
