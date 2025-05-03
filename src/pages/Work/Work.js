import React, { useState } from 'react';
import './Work.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import WORK from '../../assets/work';
import HACKATHON from '../../assets/hackathon';
import CERTIFICATION from '../../assets/certification';

export default function Work() {
  const [work, setWork] = useState(WORK[0]);
  return (
    <div className="about work" id="work">
      <Sidebar
        items={[
          ...HACKATHON.map((hack) => <Hackathon {...hack} />),
          <p className="section-header pt-6">CERTIFICATIONS</p>,
          ...CERTIFICATION.map((cert) => <Certification {...cert} />),
        ]}
      >
        <div className="description">
          <p className="bio">
            Hey, I'm a <u>Machine Learning Engineer</u>, <u>Data Scientist</u>, and sometimes a <u>Full Stack Developer</u> who loves turning messy data into meaningful stories and building seamless digital experiences. 
            I enjoy creating things that make life a bit easier.
          </p>
          <br />
          <p>
            Currently studying{' '}
            <i>
            Bachelor of Technology in Artificial Intelligence and Data Science
            </i>{' '}
            @<a href="https://www.tcetmumbai.in/"> <u>Thakur College of Engineering and Technology.</u></a> 
          </p>

          <div className="contact">
            <a href="mailto:workwithhuzi@gmail.com">Email</a>
            <a href="https://github.com/botzaifa">GitHub</a>
            <a href="https://www.linkedin.com/in/botzaifa/">LinkedIn</a>
            {/* <a href="https://x.com/botzaifa">X(Twitter)</a> */}
            <a href="https://leetcode.com/u/botzaifa/">Leetcode</a>
            {/* <a href="https://www.instagram.com/botzaifa/">Instagram</a> */}
            {/* <a href="https://open.spotify.com/user/31rog7qj3wny7mbtmxovlvw3n7ge?si=e96cbf99ef7c46f3">Spotify</a> */}
          </div>
          <p className="section-header pt-6">HACKATHONS</p>
        </div>

      </Sidebar>
      <div className="intro-container">
        <p className="section-header projects-header">SELECTED WORK</p>
        <div className="project-links">
          {WORK.map((w) => (
            <p
              onClick={() => setWork(w)}
              className={work.name === w.name && 'selected-project'}
              key={w.name}
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
        
        {/* <div className="mobile-project-info">
          {WORK.map((work) => (
            <div key={work.name}>
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
        </div> */}
      </div>
    </div>
  );
}

function Hackathon({ name, date, description, position, link }) {
  return (
    <div className="experience-container">
      <div className="experience-header">
        <a href={link} target="_blank" rel="noreferrer">
          <b>{name}</b>
        </a>
        <p className="experience-dates">{date}</p>
      </div>
      <p className="experience-position">{position}</p>
      <p>{description}</p>
    </div>
  );
}

function Certification({ name, date, description, position, link }) {
  return (
    <div className="certification-container">
      <div className="certification-header">
        <a href={link} target="_blank" rel="noreferrer">
          <b>{name}</b>
        </a>
        <p className="certification-dates">{date}</p>
      </div>
      <p className="certification-position">{position}</p>
      <p>{description}</p>
    </div>
  );
}
