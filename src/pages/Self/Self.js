import React from 'react';
import '../../styles/ProfileLayout.css';
import mic from '../../assets/mic.png';

export default function Self() {
  return (
    <div className="self">
      <div className="intro-container about-intro-container">
        <img src={mic} className="pic" alt="a headshot of me!" />
        <div>
          <p className="heading">Hi, I'm Huzaifa.</p>
          <br />
          <p>
            I'm currently in my Final Year of Study in{' '}
            <i>
              Bachelor of Technology in Artificial Intelligence and Data Science
            </i>{' '}
            at Mumbai University. I'm originally from Mumbai.
          </p>
          <br />
          <p>
            Right now, I'm studing for my GATE, GRE and related Examinations, 
            coding, experimenting, building, spending time with
            friends, etc. Currently working on building projects, aiming to
            get an internship in ML related fields. Feel to reach out if
            you're interested!
          </p>
          <br />
          <p>
            I enjoy working on creative web tools and creating engaging
            experiences through technology. I'm most interested in working on
            educational technology and examining how we can facilitate social
            connection through data.
          </p>
          <div className="info-section">
            <div className="text">
              <br />
              <p>
                <b>Things I'm exploring right now: </b>
                mobile development, physical prototyping, cooking,
                entrepeneuership, film photography
              </p>
              <br />
              <p>
                <b>Things I want to learn more about:</b> blockchain, 
                drumming
              </p>
              <br />
              <p>
                <b>Things I enjoy:</b> curating{' '}
                <a
                  href="https://open.spotify.com/user/31rog7qj3wny7mbtmxovlvw3n7ge?si=e96cbf99ef7c46f3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Spotify playlists
                </a>{' '}
                (I have over 100!), bouldering, functional programming, indie
                rock, waking up with the sun, cold brew, watching leaves turn
                red in the fall, horror movies, watching the swans and geese
                near my neighborhood pond at sunset, running on the West Side
                Highway
              </p>
              <br />
              <p>
                <b>Current favorites:</b>
              </p>
              <ul>
                <li>
                  <b>Movies</b>: <i>Before Sunset</i>, <i>Whiplash</i>,{' '}
                  <i>Aftersun</i>, <i>Short Term 12</i>, <i>Moonlight</i>
                </li>
                <li>
                  <b>Shows</b>: You, The Last of Us, Hannibal
                </li>
                <li>
                  <b>Artists</b>: The 1975, Fred Again, The Plot in You, The Weeknd,
                  twenty one pilots, Dua Lipa, Post Malone, ZAYN, The Script, The Smiths,
                  Arctic Monkeys, Ciggarets After Sex, Kanye West, Kendrick Lamar
                </li>
                <li>
                  <b>Games</b>: <i>Call of Duty</i>, <i>Valorant</i>
                </li>
              </ul>
              <div className="contact">
                <a href="mailto:workwithhuzi@gmail.com">Email</a>
                <a href="https://github.com/botzaifa">GitHub</a>
                <a href="https://www.linkedin.com/in/botzaifa/">LinkedIn</a>
                <a href="https://leetcode.com/u/botzaifa/">Leet code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
