/* **************************************************** start *************************************************** */
import React, { useState } from 'react';
import './DesignPage.css';
import oval from '../../assets/oval.jpg';
import ocean from '../../assets/ocean.jpg';
/* **************************************************** end *************************************************** */

function DesignPage() {
  const [menuOpen, setMenuOpen] = useState(false);
/* ----------------------------------------------------------- start ----------------------------------------------------------*/
  return (
    <div>
      {/* About Us section */}
      <section className="z-about-us-section ben">
        <div className="z-about-us-header">
          <center><h1 className="section-title1 headInfo">Information</h1></center>
        </div>
      </section>
      {/* About Us section end */}

      {/* Container start */}
      <div className="z-container margto">
        {/* 1st row - Oval Stadium */}
        <div className="z-row dustrara">
          <div className="z-col">
            <figure>
              <img src={oval} className="z-img-fluid z-about-img img11" alt="Oval Stadium" />
            </figure>
          </div>
          <div className="z-col z-content-column spacewaladiv">
            <h1>Oval Stadium of Australia</h1>
            <p>
              The Oval Stadium, located in Australia, is one of the iconic sports venues in the world.
              It is known for hosting major cricket and football matches. The stadium has a rich history
              dating back to its opening and has witnessed numerous memorable events.
            </p>
            <button className="z-btn z-btn-learn-more custombtn" title="Learn more about the Oval Stadium">Learn More</button>
          </div>
        </div>
        {/* 1st row end */}

        {/* 2nd row - Ocean */}
        <div className="z-row dustrara marggg">
          <div className="z-col z-content-column ">
            <h1>The Ocean</h1>
            <p>
              The ocean is a vast and mysterious part of our planet, covering over 70% of the Earth's surface.
              Oceans are home to a diverse range of marine life and play a crucial role in regulating the Earth's climate.
            </p>
            <button className="z-btn z-btn-learn-more custombtn">Learn More</button>
          </div>
          <div className="z-col">
            <figure>
              <img src={ocean} className="z-img-fluid z-about-img img11 spacewaladiv" alt="Ocean" />
            </figure>
          </div>
        </div>
        {/* 2nd row end */}
      </div>
      {/* Container end */}

      {/* Footer section */}
      <footer className="z-footer foot">
        <p>&copy; <strong>THE GREAT CSSCAPE (GOOGLE DEVELOPER GROUPS - BMSCE)</strong></p>
      </footer>
      {/* Footer section end */}
    </div>
  );
}
/* ----------------------------------------------------------- end ----------------------------------------------------------*/
export default DesignPage;
