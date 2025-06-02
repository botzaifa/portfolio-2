import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

import "./Resume.css";

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); 

  // Directly use the path to the PDF from the public folder
  const resumePath = "/Resume.pdf"; // Direct path from the public directory

  // Setting up the pdf worker file
  useEffect(() => {
    // pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs"; // Direct path from the public directory
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to load the PDF document
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function onDocumentLoadError(error) {
  console.error("Error while loading document:", error);
}

  return (
    <div>
      <Container fluid className="resume-section">
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          My <strong className="purple">Resume</strong>
        </h1>

        {/* PDF Display using react-pdf */}
        <Row className="resume">
          <div className="pdf-container">
            <Document
              file={resumePath}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading="Loading PDF..."
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
        </Row>

        {/* Download Button */}
        <Row className="download-btn-container">
          <Button
            variant="primary"
            href={resumePath}
            target="_blank"
            download="Resume.pdf"
            style={{ maxWidth: "250px" }}
            className="mt-3"
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
