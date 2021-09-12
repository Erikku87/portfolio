import stylesPortfolio from "../styles/Portfolio.module.css";
import stylesModal from "../styles/Modal.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Row } from "reactstrap";
import { Col } from "reactstrap";

const Portfolio = () => {
  const portfolios = [
    {
      id: 0,
      src: "/images/octo.jpg",
      alt: "Octo",
      name: "Octo",
      description:
        "blablabla ik heb voor Octo gewerkt. Goeie bedrijf je weet zelf, ook andere mooie shizzles gemaakt, html, css, javascript, je weet zeluf. Beter gewoon nu aannemen of ik geef je eentje op je bolus.",
      url: "https://octo.nu",
      image: "",
    },
    {
      id: 1,
      src: "/images/waarderuil.jpg",
      alt: "waarderuil",
      name: "waarderuil",
      description:
        "blablabla ik heb voor Octo gewerkt. Goeie bedrijf je weet zelf, ook andere mooie shizzles gemaakt, html, css, javascript, je weet zeluf. Beter gewoon nu aannemen of ik geef je eentje op je bolus.",
      url: "https://octo.nu",
      image: "",
    },
    {
      id: 2,
      src: "/images/zenchirecords.jpg",
      alt: "Zenchi Records",
      name: "Zenchi Records",
      description:
        "blablabla ik heb voor Octo gewerkt. Goeie bedrijf je weet zelf, ook andere mooie shizzles gemaakt, html, css, javascript, je weet zeluf. Beter gewoon nu aannemen of ik geef je eentje op je bolus.",
      url: "https://zenchirecords.com",
      image: "",
    },
    {
      id: 3,
      src: "/images/rumah-afra.jpg",
      alt: "rumah-afra",
      name: "Rumah-Afra",
      description:
        "blablabla ik heb voor Octo gewerkt. Goeie bedrijf je weet zelf, ook andere mooie shizzles gemaakt, html, css, javascript, je weet zeluf. Beter gewoon nu aannemen of ik geef je eentje op je bolus.",
      url: "https://rumah-afra.com",
      image: "",
    },
    {
      id: 4,
      src: "/images/96.jpg",
      alt: "96",
      name: "Ninetysix Music",
      description:
        "blablabla ik heb voor Octo gewerkt. Goeie bedrijf je weet zelf, ook andere mooie shizzles gemaakt, html, css, javascript, je weet zeluf. Beter gewoon nu aannemen of ik geef je eentje op je bolus.",
      url: "https://ninetysixmusic.com",
      image: "",
    },
    {
      id: 5,
      src: "/images/woordenschat.jpg",
      alt: "Woordenschat",
      name: "Woordenschat",
      description:
        "blablabla ik heb voor Octo gewerkt. Goeie bedrijf je weet zelf, ook andere mooie shizzles gemaakt, html, css, javascript, je weet zeluf. Beter gewoon nu aannemen of ik geef je eentje op je bolus.",
      url: "https://www.youtube.com/watch?v=Tn8zJkGMKiU&t=28s ",
      image: "",
    },
    {
      id: 6,
      src: "/images/staggeringdesign.jpg",
      alt: "staggeringdesign",
      name: "Staggering Design",
      description:
        "blablabla ik heb voor Octo gewerkt. Goeie bedrijf je weet zelf, ook andere mooie shizzles gemaakt, html, css, javascript, je weet zeluf. Beter gewoon nu aannemen of ik geef je eentje op je bolus.",
      url: "https://octo.nu",
      image: "",
    },
    {
      id: 7,
      src: "/images/platysign.jpg",
      alt: "platysign",
      name: "Platysign",
      description:
        "blablabla ik heb voor Octo gewerkt. Goeie bedrijf je weet zelf, ook andere mooie shizzles gemaakt, html, css, javascript, je weet zeluf. Beter gewoon nu aannemen of ik geef je eentje op je bolus.",
      url: "https://octo.nu",
      image: "",
    },
    {
      id: 8,
      src: "/images/hoornse.jpg",
      alt: "hoornse",
      name: "Hoornse",
      description:
        "blablabla ik heb voor Octo gewerkt. Goeie bedrijf je weet zelf, ook andere mooie shizzles gemaakt, html, css, javascript, je weet zeluf. Beter gewoon nu aannemen of ik geef je eentje op je bolus.",
      url: "https://octo.nu",
      image: "",
    },
    {
      id: 9,
      src: "/images/photomaster.jpg",
      alt: "photomaster",
      name: "Photomaster",
      description:
        "blablabla ik heb voor Octo gewerkt. Goeie bedrijf je weet zelf, ook andere mooie shizzles gemaakt, html, css, javascript, je weet zeluf. Beter gewoon nu aannemen of ik geef je eentje op je bolus.",
      url: "https://octo.nu",
      image: "",
    },
    {
      id: 10,
      src: "/images/bnt.jpg",
      alt: "bnt",
      name: "BNT",
      description:
        "blablabla ik heb voor Octo gewerkt. Goeie bedrijf je weet zelf, ook andere mooie shizzles gemaakt, html, css, javascript, je weet zeluf. Beter gewoon nu aannemen of ik geef je eentje op je bolus.",
      url: "https://octo.nu",
      image: "",
    },
    {
      id: 11,
      src: "/images/jt.jpg",
      alt: "JT Photography",
      name: "JT Photography",
      description:
        "blablabla ik heb voor Octo gewerkt. Goeie bedrijf je weet zelf, ook andere mooie shizzles gemaakt, html, css, javascript, je weet zeluf. Beter gewoon nu aannemen of ik geef je eentje op je bolus.",
      url: "",
      image: "",
    },
  ];

  const [modal0, setModal0] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);
  const [modal7, setModal7] = useState(false);
  const [modal8, setModal8] = useState(false);
  const [modal9, setModal9] = useState(false);
  const [modal10, setModal10] = useState(false);
  const [modal11, setModal11] = useState(false);

  const toggle0 = () => setModal0(!modal0);
  const toggle1 = () => setModal1(!modal1);
  const toggle2 = () => setModal2(!modal2);
  const toggle3 = () => setModal3(!modal3);
  const toggle4 = () => setModal4(!modal4);
  const toggle5 = () => setModal5(!modal5);
  const toggle6 = () => setModal6(!modal6);
  const toggle7 = () => setModal7(!modal7);
  const toggle8 = () => setModal8(!modal8);
  const toggle9 = () => setModal9(!modal9);
  const toggle10 = () => setModal10(!modal10);
  const toggle11 = () => setModal11(!modal11);

  const imgWidth = 420;
  const imgHeight = 300;
  const priority = true;

  const setCurrentModal = (portfolio) => {
    return (
      <Modal
        className={stylesModal.modalFrame}
        isOpen={eval(`modal${portfolio.id}`)}
        toggle={eval(`toggle${portfolio.id}`)}
      >
        <ModalHeader toggle={eval(`toggle${portfolio.id}`)}>
          {portfolio.name}
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col sm>
              <div className={stylesModal.modalImage}>
                <Image
                  src={portfolio.src}
                  width="420px"
                  height="300px"
                  alt="Picture of the author"
                />
              </div>
            </Col>
            <Col sm>{portfolio.description}</Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={eval(`toggle${portfolio.id}`)}>
            <a href={portfolio.url} target="blank_">
              {" "}
              Visit
            </a>
          </Button>

          <Button color="secondary" onClick={eval(`toggle${portfolio.id}`)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  };

  // Creates a portfolio component for in row.
  const createPortfolio = (portfolio) => {
    return (
      <div
        id={portfolio.id}
        className={`${stylesPortfolio.portfolioItem} col`}
        onClick={eval(`toggle${portfolio.id}`)}
      >
        <Image
          alt={portfolio.alt}
          src={portfolio.src}
          width={imgWidth}
          height={imgHeight}
          priority={priority}
        />
        {setCurrentModal(portfolio)}
      </div>
    );
  };

  // Creates a row of 3 portfolio elements.
  const createRow = (id1, id2, id3) => {
    return (
      <div
        className={`${stylesPortfolio.portfolioColor} ${stylesPortfolio.portfolioSize}`}
      >
        <div className="row">
          {createPortfolio(portfolios[id1])}
          {createPortfolio(portfolios[id2])}
          {createPortfolio(portfolios[id3])}
          <style jsx>{`
            .row {
              width: 100%;
            }
          `}</style>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        id="portfolioHeader"
        className={`${stylesPortfolio.portfolioHeader} ${stylesPortfolio.greenglow} ${stylesPortfolio.greenglow2}`}
      >
        <div className={stylesPortfolio.portfolioHeaderText}>
          <h1>My Projects</h1>
        </div>
      </div>

      <div id="portfolioframe" className={stylesPortfolio.portfolioFrame}>
        {createRow(0, 1, 2)}
        {createRow(3, 4, 5)}
        {createRow(6, 7, 8)}
        {createRow(9, 10, 11)}
      </div>
    </>
  );
};

if (typeof window === "object") {
  // Check if document is finally loaded
  window.addEventListener("load", function () {
    document.getElementById("portfolioframe").style.opacity = "1";
    document.getElementById("portfolioframe").style.margin = "0px";
    document.getElementById("portfolioHeader").style.opacity = "1";
  });
}

export default Portfolio;
