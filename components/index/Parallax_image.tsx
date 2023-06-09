import React, { useEffect, useState } from "react";
import { Indie_Flower } from "next/font/google";
import styles1 from "@/styles/index/Parallax_image.module.scss";
import styles2 from "@/styles/index/Parallax_image2.module.scss";
import Image, { StaticImageData } from "next/image";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

interface Hero_imageProps {
  image: StaticImageData;
  alt: string;
  speed?: number;
  translateY?: [number, number];
  item?: string;
}

const indie = Indie_Flower({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Hero_image({ image, alt, speed, translateY, item }: Hero_imageProps): JSX.Element {
  const styles = item === "styles2" ? styles2 : styles1;
  const [isClick, setIsClick] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    isClick && setCount((count) => count + 1);
  }, [isClick]);

  useEffect(() => {
    let tiemeOut = setTimeout(() => {
      isClick && setIsClick(false);
    }, 500);
    return () => clearTimeout(tiemeOut);
  }, [isClick]);

  function isMultipleOfThree(count: number) {
    return count % 3 === 0 && count !== 0;
  }

  return (
    <section className={styles.image__wrapper}>
      <Parallax speed={speed} translateY={translateY}>
        <figure data-count={count}>
          <Image src={image} alt={alt} placeholder='empty' onClick={() => setIsClick(!isClick)} data-isclick={isClick} priority />
          {item === "styles2" && (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'>
                <g id='Graphic_Elements' data-name='Graphic Elements'>
                  <path
                    className={styles.path}
                    d='M1004,461.53c14.46,24.33,55.16,6.23,40.46-18-65.85-108.41-189.82-172.5-315-155.08-4-49.59-30.44-86.52-82.69-110.21-58.35-26.44-125.17-28.88-187.65-19.09C302.8,183.68,158,273.57,53.11,389.77c-10.93,12.12,9.61,26.44,20.5,14.75,76.07-81.59,170.61-144.87,275.45-183.19,93.38-34.12,218.05-57.23,306.19,3.57,26,18,35.2,43.76,35.89,71.58-58.89,16.14-112.69,48-153.67,93.49-38.27,42.52-67.11,110.43-20.39,158.42,41.27,42.38,97.81,13.71,129.72-24,44.72-52.87,72-124.73,81.11-192.94C835.88,313.92,947.25,366,1004,461.53ZM594.68,517c-22.39,15.78-48.28,12.69-57.2-16-9.1-29.28,10.3-58.08,28.45-79.45,31.43-37,74.44-64.18,120.32-79.65-3.15,14.6-7.39,28.91-11.62,42.14C660,429.75,635.45,488.23,594.68,517Z'
                  />
                  <path
                    className={styles.path2}
                    d='M1148.18,540.16c-33.77-72.35-69.81-145.14-111.85-213.07-9.31-15-30.65.51-25.16,15.35,23.19,62.63,51.2,124.17,79.85,184.75a571.29,571.29,0,0,1-161.78-25.51c-26.86-8.29-42.39,32.59-15.28,41.24,70.64,22.55,142.81,32,216.86,29.33C1145.79,571.71,1153.85,552.31,1148.18,540.16Z'
                  />
                </g>
              </svg>
              {isMultipleOfThree(count) ? (
                <figcaption className={indie.className}>aghhh! &nbsp;&nbsp;&nbsp;&nbsp;</figcaption>
              ) : isClick ? (
                <figcaption className={indie.className}>wooooahhh~!</figcaption>
              ) : (
                <figcaption className={indie.className}>
                  It&apos;s not me! <span>please do not click</span>
                </figcaption>
              )}
            </motion.div>
          )}
        </figure>
      </Parallax>
    </section>
  );
}
