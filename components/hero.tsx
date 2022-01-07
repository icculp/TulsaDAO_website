/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './hero.module.css';
import { BRAND_NAME, DATE, SITE_DESCRIPTION } from '@lib/constants';
// import car from "public/Full_Lockup_transparent.png";
import Image from 'next/image';
import React from "react";
/**  */
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce
} from "react-particle-image";

// const particleOptions: ParticleOptions = {
//   filter: ({ x, y, image }) => {
//     // Get pixel
//     const pixel = image.get(x, y);
//     // Make a particle for this pixel if blue > 50 (range 0-255)
//     return pixel.b > 0;
//   },
//   color: ({ x, y, image }) => "#c6202e",
//   radius: () => Math.random() * 1.5 + 0.5,
//   mass: () => 80,
//   friction: () => 0.15,
//   initialPosition: ({ canvasDimensions }) => {
//     return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
//   }
// };

// const motionForce = (x: number, y: number): ParticleForce => {
//   return forces.disturbance(x, y, 16);
// };


const round = (n: number, step = 20) => Math.ceil(n / step) * step;

// Try making me lower to see how performance degrades
const STEP = 30;

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if magnitude < 200 (range 0-255)
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    return magnitude < 200;
  },
  color: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    // Canvases are much more performant when painting as few colors as possible.
    // Use color of pixel as color for particle however round to nearest 30
    // to decrease the number of unique colors painted on the canvas.
    // You'll notice if we remove this rounding, the framerate will slow down a lot.
    return `rgba(
      ${round(pixel.r, STEP)}, 
      ${round(pixel.g, STEP)}, 
      ${round(pixel.b, STEP)}, 
      ${round(pixel.a, STEP) / 255}
    )`;
  },
  radius: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    // Lighter colors will have smaller radius
    return 3 - (magnitude / 255) * 1.5;
  },
  mass: () => 50,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 7);
};
/** */



export default function Hero() {
  return (


<div className={styles.wrapper}>
    {/* <ParticleImage
              src={"/Full_Lockup_Transparent.png"}
              scale={0.5}
              width="1000"
              height="500"
              entropy={25}
              maxParticles={15000}
              particleOptions={particleOptions}
              mouseMoveForce={motionForce}
              touchMoveForce={motionForce}
              className='.particles-wrapper'
              backgroundColor="#f8f1e0"
              
            />  */}
       <img
        id="logo"
        className="next-particle"
        src='/Full_Lockup_Transparent.png'
       />
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-second'],
          styles.description
        )}
      >
        {SITE_DESCRIPTION}asdfdfsafdsa
      </h2>
      
      {/* <Image src="public/Full_Lockup_Transparent.png" /> */}
      {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}

      {/* <Image src='/Full_Lockup_Transparent.png' width="1000" height="1000" /> */}
      <h1 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
        TulsaDAO, Bitch! {BRAND_NAME}
        <br className={styleUtils['show-on-desktop']} /> global user conference
      </h1>
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styleUtils['show-on-tablet'],
          styles.description
        )}
      >
        {SITE_DESCRIPTION}
      </h2>
      <div className={cn(styleUtils.appear, styleUtils['appear-fourth'], styles.info)}>
        <p>{DATE}</p>
        <div className={styles['description-separator']} />
        <p>
          <strong>Online</strong>
        </p>
      </div>
    </div>

    
  );
}
