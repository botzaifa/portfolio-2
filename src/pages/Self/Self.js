import React from 'react';
// import '../../styles/ProfileLayout.css';
import './Self.css';
import img from '../../assets/about_img.JPG';

export default function Self() {
  return (
    <div className="self">
      <div className="self-intro-container self-intro-container">
        <img src={img} className="pic" alt="a headshot of me!" />
        <div>
          <p className="heading">Hi, I'm Huzaifa.</p>
          <br />
          <p>
            I'm currently in my Final Year of Study in{' '}
            <i>
              Bachelor of Technology in Artificial Intelligence and Data Science
            </i>{' '}
            at Thakur College of Engineering and Technology. I'm originally from Mumbai.
          </p>
          <br />
          <p>
            Right now, I'm studying for GATE, GRE and related Examinations,
            coding, experimenting, building, spending time with
            friends, etc. Currently working on building projects, aiming to
            get an internship (and possibly a job) in ML related field. Feel free to reach out if
            you're 'THE GUY'!
          </p>
          <br />
          <p>
            Life's weird. Tech's weirder. Let's build weird things together.
          </p>
          <div className="self-info-section">
            <div className="text">
              <br />
              <p><b>Things I'm exploring right now: </b>Mobile development, Web 3, Frontend,</p>
              <br />
              <p><b>Things I want to learn more about:</b>Blockchain, Guitars, Photography, Astronomy</p>
              <br />
              <p>
                <b>Things I enjoy: </b>
                Solving Sudoku,
                curating{' '}
                <a href="https://open.spotify.com/user/31rog7qj3wny7mbtmxovlvw3n7ge?si=e96cbf99ef7c46f3"
                  target="_blank" rel="noreferrer">
                  Spotify playlists,
                </a>{' '}
                Writing Poems, Listening to Music, Watching Sports as well as Esports,
                Football (Hala Madrid), Watching the Moon, Stargazing, Annoying people,
                Learning new things, and playing video games
              </p>
              <br />
              <p><b>Things I would never get bored of:</b></p>
              <ul>
                <li><b>Shows</b>: You, The Last of Us, Hannibal, Daredevil, Family Guy, Game of Thrones</li>
                <li><b>Songs</b>: Chlorine, Aaoge Tum Kabhi, Breakeven, Raanjhanaa, Open Hearts, Fix You,
                  Somebody Else, Dusk Till Dawn, Closer, A Sky Full of Stars, Manzil, Bitter sweet symphony</li>
                <li><b>Artists</b>: Coldplay, The 1975, Fred Again, The Plot in You, The Weeknd,
                  twenty one pilots, Dua Lipa, Post Malone, ZAYN, The Script, The Smiths,
                  Arctic Monkeys, Ciggarets After Sex, Kanye West, Kendrick Lamar</li>
                <li><b>Games</b>: Call of Duty, Valorant</li>
              </ul>
              <br /><br />
              <b>Slide into my inbox (professionally, please).</b>
              <div className="contact">
                <a href="mailto:workwithhuzi@gmail.com">Email</a>
                <a href="https://github.com/botzaifa">GitHub</a>
                <a href="https://www.linkedin.com/in/botzaifa/">LinkedIn</a>
                <a href="https://x.com/botzaifa">X(Twitter)</a>
                <a href="https://www.instagram.com/botzaifa/">Instagram</a>
                <a href="https://open.spotify.com/user/31rog7qj3wny7mbtmxovlvw3n7ge?si=e96cbf99ef7c46f3">Spotify</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
