import React from 'react';
// import '../../styles/ProfileLayout.css';
import './About.css';
import me from '../../assets/me.png';

export default function About() {
  return (
    <div className="about">
      <div className="intro-container about-intro-container">
        <img src={me} className="pic" alt="a headshot of me!" />
        <div>
          <p className="heading">Here is a little StoryTime:</p>

          <br />
          
              <p>
                So, back in 2019, right after my SSC (10th grade), my parents <em>graciously</em> decided my future for me. Medicine, of course, because "it runs in the family" (as does blind pressure, apparently). 
                I obediently spent two years cramming for NEET (India's lovely version of the MCAT) and, just to be thorough, also took MHT-CET PCB (Physics, Chemistry, Biology) as a backup for medicine <em>again</em>—because apparently, one crushing career path wasn't enough.<br /><br />

                Now comes the rebellious chapter of my story. I <em>brilliantly</em> convinced my parents that I <em>HAVE</em> to take MHT-CET PCM (Physics, Chemistry, Maths) to be eligible for PCB, mind you. Total nonsense. You don't need PCM to take PCB. But hey, it worked. 
                I studied math for a whopping two months (after two full years of PCB), and somehow ended up scoring 93% in PCM. And in PCB? A modest 87%. Oh, and NEET? Let's just say I scraped together enough to get into a college in Bangalore. <em>Yay, dreams achieved</em>.<br /><br />

                Seeing that 93% in PCM was a wake-up call. Maybe, just maybe, I was cut out for engineering. So I mustered the courage to push back. But don't worry the plot gets thicker.<br /><br />

                Still blissfully naive, I believed the gospel of the internet: "To be an engineer, thou must get a B.Tech." So naturally, I enrolled in Biotechnology, because hey <em>“Bio” + “Technology” = B.Tech</em>, right? Genius, I know. 
                Took me two months to realize I'd signed up for something completely different than what I thought.<br /><br />

                Fortunately, the universe gave me a second chance. I bailed just in time and secured admission at Thakur College of Engineering and Technology.<br /><br />

                God help this clueless, overly optimistic kid he's going to need it.
              </p>  

        </div>
      </div>
    </div>
  );
}
