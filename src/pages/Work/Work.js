import React, { useState } from 'react';
import './Work.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import WORK from '../../assets/work';
// import HACKATHON from '../../assets/hackathon';
import EXPERIENCE from '../../assets/experience';

export default function Work() {
  const [work, setWork] = useState(WORK[0]);
  return (
    <div className="about work" id="work">
      <Sidebar
        items={EXPERIENCE.map((exp) => (
          <Experience
            {...exp}
            dates={[exp.dates.start, exp.dates.end ?? 'Present']}
          />
        ))}
      >
        <div className="description">
          <p className="bio">
            Hi! I'm a Machine Learning Engineer and Data Analyst, 
            fostering social connection, and provoking
            conversations through my work.
          </p>
          <br />
          <p>
            Currently studying{' '}
            <i>
              Artificial Intelligence and Data Science
            </i>{' '}
            @ Thakur College of Engineering and Technology.
          </p>
          <div className="contact">
            <a href="mailto:workwithhuzi@gmail.com">Email</a>
            <a href="https://github.com/botzaifa">GitHub</a>
            <a href="https://www.linkedin.com/in/botzaifa/">LinkedIn</a>
            <a href="https://www.instagram.com/botzaifa/">Instagram</a>
            <a href="https://open.spotify.com/user/31rog7qj3wny7mbtmxovlvw3n7ge?si=e96cbf99ef7c46f3">
              Spotify
            </a>
          </div>
          <p className="section-header pt-6">EXPERIENCE</p>
        </div>
      </Sidebar>
      <div className="intro-container">
        <p className="section-header projects-header">SELECTED WORK</p>
        <div className="project-links">
          {WORK.map((w) => (
            <p
              onClick={() => setWork(w)}
              className={work.name === w.name && 'selected-project'}
            >
              {w.name}
            </p>
          ))}
        </div>
        <div className="projects-container">
          <div>
            <a
              href={work.link}
              target="_blank"
              rel="noreferrer"
              className="project-images"
            >
              {work.images.map((img, index) => (
                <img
                  src={`images/${img}`}
                  alt={`${work.name} number ${index}`}
                  style={{ maxWidth: `${100 / work.images.length}%` }}
                  key={`${work.name} number ${index}`}
                />
              ))}
            </a>
            <p
              className="heading project-heading"
              id={work.name.replace(' ', '_')}
            >
              {work.name}
            </p>
            <br />
            <div dangerouslySetInnerHTML={{ __html: work.description }}></div>
            <br />
            <br />
          </div>
        </div>
        <div className="mobile-project-info">
          {WORK.map((work) => (
            <div>
              <a
                href={work.link}
                target="_blank"
                rel="noreferrer"
                className="project-images"
              >
                {work.images.map((img, index) => (
                  <img
                    src={`images/${img}`}
                    alt={`${work.name} number ${index}`}
                    style={{ maxWidth: `${100 / work.images.length}%` }}
                    key={`${work.name} number ${index}`}
                  />
                ))}
              </a>
              <p
                className="heading project-heading"
                id={work.name.replace(' ', '_')}
              >
                {work.name}
              </p>
              <br />
              <div dangerouslySetInnerHTML={{ __html: work.description }}></div>
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Experience({ name, dates, description, position, link }) {
  return (
    <div className="experience-container">
      <div className="experience-header">
        <a href={link} target="_blank" rel="noreferrer">
          <b>{name}</b>
        </a>
        <p className="experience-dates">{dates.join('-')}</p>
      </div>
      <p className="experience-position">{position}</p>
      <p>{description}</p>
    </div>
  );
}

// function Certification({ name, dates, description, position, link }) {
//   return (
//     <div className="certification-container">
//       <div className="certification-header">
//         <a href={link} target="_blank" rel="noreferrer">
//           <b>{name}</b>
//         </a>
//         <p className="certification-dates">{dates.join('-')}</p>
//       </div>
//       <p className="certification-position">{position}</p>
//       <p>{description}</p>
//     </div>
//   );
// }
