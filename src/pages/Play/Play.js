import React from "react";
import Masonry from "@mui/lab/Masonry";

import "./Play.css";
import PLAY from "../../assets/play";

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Play() {
  const shuffledPlay = shuffleArray(PLAY);

  return (
    <div className="about play-container">
      <div className="heading">
        <p>
          A lovingly disorganized dump of moon phases I pretend to have a connection with, skies I romanticize like I'm the main character,
          cats who obviously run my life, and abstract visuals that may or may not have meaning.
        </p>
        <p>
          No, I'm not an artist. Or a photographer. I just collect things that make my brain go “hmm, nice” and occasionally throw them together like it means something.
        </p>
        <br />
      </div>

      <Masonry columns={3} spacing={2}>
        {shuffledPlay.map((item, index) => (
          <div key={index} className="play-gallery">
            <img
              src={`play/${item.img}?w=162&auto=format`}
              srcSet={`play/${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{ display: "block", width: "100%" }}
            />
          </div>
        ))}
      </Masonry>

      <Masonry columns={1} spacing={2}>
        {shuffledPlay.map((item, index) => (
          <div key={index} className="play-gallery-mobile">
            <img
              src={`play/${item.img}?w=162&auto=format`}
              srcSet={`play/${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{ display: "block", width: "100%" }}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
