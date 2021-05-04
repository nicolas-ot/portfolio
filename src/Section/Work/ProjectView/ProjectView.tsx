import React from "react";

import Slick from "react-slick";
import "./slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./ProjectView.module.css";
import githubLogo from "../../../assets/img/github-logo.png";

import Box from "../../Contact/Box/Box";

const ProjectView = (props: any) => {
  var settings = {
    infinite: true,
    accessibility: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  const screenshots = props.pict.map((ss: any) => (
    <img
      key={Math.random()}
      className={styles.Img}
      src={ss}
      alt="screenshot"
    ></img>
  ));

  const link = props.site ? (
    <div className={styles.Link}>
      <a href={props.site} target="_blank" rel="noopener noreferrer">
        <button>Visit Site</button>
      </a>
      <p>or</p>
      <a href={props.code} target="_blank" rel="noopener noreferrer">
        <button>View Code</button>
      </a>
    </div>
  ) : (
    <div className={styles.Link}>
      <a href={props.code} target="_blank" rel="noopener noreferrer">
        <button>View Code</button>
      </a>
    </div>
  );

  return (
    <div className={styles.Main}>
      <div className={styles.Header}>
        <i className="fas fa-times"></i>
        <h3>{props.title}</h3>
      </div>
      <div className={styles.Content}>
        <div className={styles.Top}>
          <div className={styles.ImgContainer}>
            <Slick {...settings}>{screenshots}</Slick>
          </div>
        </div>
        <div className={styles.Bottom}>
          <p>{props.desc}</p>
          {link}
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
