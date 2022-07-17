import React from "react"

function PublicationLinks({venuesAndLinks}) {
  return (
    Object.entries(venuesAndLinks).map(([venue, link]) => {
      return <span><a href={link} className="publication-link">[{venue}]</a>&nbsp;</span>;
    })
  );
}

function Publications(props) {
  return (
    <li>
      <div className="publications">
        <p className="publication-info">
          {props.authors}. <strong>{props.publicationTitle}</strong> <em>{props.venue}</em>
          , {props.year}. <PublicationLinks venuesAndLinks={props.venuesAndLinks} />
        </p>
      </div>
    </li>
  );
}

export default function Research() {
  return (
    <div className="research">
      <div className="section-header">Projects Highlights</div>
      <div className="publications-section">
        <div className="section-header">Publications</div>
          <a href="https://scholar.google.bg/citations?user=2D1DoH8AAAAJ&hl=en">
            <div className="all-publications-link">
              <div className="title">All Publications&nbsp;</div>
              <div className="arrow">&#x2192;</div>
            </div>
          </a>
      </div>
      <ul className="publications-list">
          <Publications 
            publicationTitle="Data driven methods for effective micromobility parking."
            authors="Sandoval, Ricardo, Caleb Van Geffen, Michael Wilbur, Brandon Hall, Abhishek Dubey, William Barbour, Daniel B. Work"
            venue="Transportation Research Interdisciplinary Perspectives"
            year="2021"
            venuesAndLinks={{
              paper: "https://www.sciencedirect.com/science/article/pii/S2590198221000750"
            }}
          />
          <Publications 
            publicationTitle="Streaming computation algorithms for spatiotemporal micromobility
             service availability."
            authors="Barbour, William, Michael Wilbur, Ricardo Sandoval"
            venue="IEEE Workshop on Design Automation for CPS and IoT (DESTION)"
            year="2020"
            venuesAndLinks={{
              paper: "https://ieeexplore.ieee.org/abstract/document/9140694",
            }}
          />
        <Publications
          publicationTitle="Data driven methods for effective micromobility parking."
          authors="Barbour, William, Michael Wilbur, Ricardo Sandoval, Caleb Van Geffen, Brandon Hall, Abhishek Dubey, Daniel B. Work"
          venue="Proceedings of the Transportation Research Board of the National Academies"
          year="2020"
          venuesAndLinks={{}}
        />
      </ul>
    </div>
  );
}
