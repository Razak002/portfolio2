import Certificate1 from "../assets/img/Certificate1.webp";
import Certificate2 from "../assets/img/Certificate2.webp";



import FsLightbox from "fslightbox-react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { useState } from "react";
import "./About.css";

function About() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Aliyu AQ - About</title>
        </Helmet>
      </HelmetProvider>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[
          Certificate1,
          Certificate2,
        ]}
        slide={lightboxController.slide}
      />
      <Container fluid className="about-wrapper">
        <div className="about-left animate__animated animate__zoomIn">
          <h3>About</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>02</strong>
          </h4>
        </div>
        <div className="about-right animate__animated animate__fadeIn animate__slower py-3">
          <p>
            Hi, I'm Aliyu Abdulrazak, a student majoring in Electricel engineering at
                       University of Abuja nigeria. Now I enjoy learning about programming and web
            develoment. I am enthusiastic, self-motivated, reliable, responsible
            and hardworking person. I just love using the knowledge of programming in my day to day acti
        
          </p>

          <h4>Certificates</h4>
          <span>─────</span>
          <div className="row certificates-wrapper">
            <div className="row my-2 ">
              <div className="col certificates-ratio">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate1}
                  alt="Certificate 1"
                  onClick={() => openLightboxOnSlide(1)}
                />
              </div>
              <div className="col certificates-ratio gap-image ">
                <img
                  className="shadow"
                  loading="lazy"
                  src={Certificate2}
                  alt="Certificate 2"
                  onClick={() => openLightboxOnSlide(2)}
                />
              </div>

            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;
