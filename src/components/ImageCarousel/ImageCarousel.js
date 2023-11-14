import React from "react";
import { Carousel } from "react-responsive-carousel";
import { BASE_NAME } from "@/config/constants";
import ReactPlayer from "react-player";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "./ImageCarousel.module.scss";
import { CardImg } from "reactstrap";

export function ImageCarousel(props) {
  const { gallery } = props; 

  return (
    <div className={styles.content}>
      <Carousel
        infiniteLoop={true}
        showThumbs={true}
        preventMovementUntilSwipeScrollTolerance={true}     
        dynamicHeight={true}
        showStatus={false}
      >
        {gallery &&
          gallery.length > 0 &&
          gallery.map((item, index) => (
            <div className={styles.carousel} key={index}>
              {item.video_url ? (
                <ReactPlayer
                  url={item.video_url}
                  width={'100%'}
                  height={'100%'}
                  controls={true}
                />
              ) : item.image ? (
                <img alt={`Slide ${index}`} src={BASE_NAME + item.image} />
              ) : (
                <CardImg alt={`Slide ${index}`} src={item.image_alterna} />
              )}
            </div>
          ))}
      </Carousel>
    </div>
  );
}
