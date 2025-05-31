import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "./Particle";
import pdf from "../assets/Resume_Huzi.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Video Resume Section */}

        {/* <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          My <strong className="purple">Video Resume </strong>
        </h1> */}

        {/* <Row style={{ justifyContent: "center", marginBottom: "30px", zIndex: 1 }}>
          <div className="video-container" style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", maxWidth: "80%", backgroundColor: "#000" }}>
            <iframe
              src="https://www.youtube.com/embed/1vI3Or1KVjI"
              title="Video Resume"
              frameBorder="0"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Row> */}

        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          My <strong className="purple">PDF Resume </strong>
        </h1>
          
        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
