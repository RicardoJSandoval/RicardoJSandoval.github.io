import React from "react"
import ProfilePicture from '../assets/profile_picture.JPG'
import GithubIcon from '../assets/github_icon.png'
import EmailIcon from '../assets/email_icon.png'
import GoogleScholarIcon from '../assets/google_scholar_icon.png'

function HomeIntro() {
  return (
    <div className="home-intro">
      <div className="home-intro-images">
        <img src={ProfilePicture} className="profile-picture" alt="profile picture" /> 
        <div className="home-intro-icons">
          <a href="mailto:rjsandoval@berkeley.edu">
            <img src={EmailIcon} alt="email" className="email-icon" />
          </a>
          <a href="https://github.com/RicardoJSandoval">
            <img src={GithubIcon} alt="Github" className="github-icon" />
          </a>
          <a href="https://scholar.google.bg/citations?user=2D1DoH8AAAAJ&hl=en">
            <img src={GoogleScholarIcon} alt="Google Scholar" className="google-scholar-icon" />
          </a>
        </div>
      </div>
      
      <div className="home-intro-writing">
        <h1>
          Hi, I'm Ricardo! 
        </h1>
        <p className="intro">
          I'm an incoming PhD student in Computer Science at UC Berkeley,
          where I'm fortunate to be advised
           by <a className="links" href="https://www.redietabebe.com/">Rediet Abebe</a>.
           I'm interested in the foundations of Machine Learning and how
           this technology can be leveraged and democratized to solve problems 
          that disproportionately impact marginalized communities.
        </p>
        <p className="intro">
          I completed my undergrad in CS and Applied Math at Vanderbilt University. 
          During my undergrad I was lucky to work 
          with: <a className="links" href="https://www.redietabebe.com/">Rediet Abebe</a>
          , <a className="links" href="https://barbourww.github.io/">William Barbour</a>
          , <a className="links" href="https://glassmanlab.seas.harvard.edu/glassman.html">Elena Glassman</a>
          , <a className="links" href="https://www.cs.cornell.edu/home/kleinber/">Jon Kleinberg</a>
          , <a className="links" href="https://engineering.vanderbilt.edu/bio/himanshu-neema">Himanshu Neema</a>
          , <a className="links" href="https://engineering.vanderbilt.edu/bio/janos-sztipanovits">
              Janos Sztipanovits
          </a>
          , and <a className="links" href="https://lab-work.github.io/about/">Dan Work</a>.
        </p>
      </div>
    </div>
  );
}

function TimelineItem(props) {
  return (
    <li>
      <div className="timeline-item">
        <div className="date">{props.date}:&nbsp;</div>
        <div className="news">{props.news}</div>
      </div>
    </li>
  );
}

function HomeNews() {
  return (
    <div className="home-news">
      <div className="section-header">News</div>
      <div className="timeline">
        <ul className="timeline-list">
          <TimelineItem
            date="May 13, 2022"
            news="I graduated from Vanderbilt University!"
          />
        </ul>
      </div>
    </div>
  );
}

export default function Home(){
  return (
    <div>
      <HomeIntro />
      <HomeNews />
    </div>
  );
}

