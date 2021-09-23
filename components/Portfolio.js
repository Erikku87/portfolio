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
        "I Started working at Octo as a freelance developer to create their first website. I have worked there for a year and created the design, front-end and back-end for the website. Now a few years later they turned into to Spotr.ai. Here's an impressions of the website i build for them:",
      url: "https://octo.nu",
      clip: "/movies/octo_frontpage.mp4",
      image: "",
    },
    {
      id: 1,
      src: "/images/waarderuil.jpg",
      alt: "waarderuil",
      name: "waarderuil",
      description:
        "Waarderuil.nl is one of my personal projects. The goal is to create a platform that makes it easy for people to find and trade the right stuff so we can make this planet and it's resources more sustainable. ",
      url: "https://portfolio.zenchirecords.com/waarderuil/",
      image: "",
    },
    {
      id: 2,
      src: "/images/zenchirecords.jpg",
      alt: "Zenchi Records",
      name: "Zenchi Records",
      description:
        "Next to a developer I also like to call myself a musician. Zenchi records is to be the website where I will publish my music to the world!",
      url: "https://zenchirecords.com",
      image: "",
    },
    {
      id: 3,
      src: "/images/rumah-afra.jpg",
      alt: "rumah-afra",
      name: "Rumah-Afra",
      description:
        "Rumah Afra is an artist. She is a dancer who likes to write and show her minimalistic lifestyle. Together we have come to a website which expresses exactly who she is.",
      url: "https://rumah-afra.com",
      image: "",
    },
    {
      id: 4,
      src: "/images/96.jpg",
      alt: "96",
      name: "Ninetysix Music",
      description:
        "Ninetysixmusic is an artist who makes music. Together we have created a really out of the box website to express her image as a musician.",
      url: "https://ninetysixmusic.com",
      image: "",
    },
    {
      id: 5,
      src: "/images/woordenschat.jpg",
      alt: "Woordenschat",
      name: "Woordenschat",
      description:
        "OWG is an organisation that creates educational games for children. They asked me to make a game where people could learn a language trough pictures and words ",
      url: " https://www.youtube.com/watch?v=Tn8zJkGMKiU&t=28s ",
      clip: "/movies/woordenschat.mp4",
      image: "",
    },
    {
      id: 6,
      src: "/images/staggeringdesign.jpg",
      alt: "staggeringdesign",
      name: "Staggering Design",
      description:
        "Staggering Design was a small IT company that delivered IT solutions. This is the website i made for them.",
      url: "https://portfolio.zenchirecords.com/Staggering_prototype",
      image: "",
    },
    {
      id: 7,
      src: "/images/platysign.jpg",
      alt: "platysign",
      name: "Platysign",
      description:
        "Platysign was my own first IT company which i started with some friends i knew from college. We did this for a couple of years but then went our own ways.",
      url: "https://portfolio.zenchirecords.com/platysign",
      image: "",
    },
    {
      id: 8,
      src: "/images/hoornse.jpg",
      alt: "hoornse",
      name: "Hoornse",
      description:
        "De Hoornse Damper is a store that sells vapes and supplies. I made a website for browsing their products and making a store order.",
      url: "",
      image: "",
    },
    {
      id: 9,
      src: "/images/photomaster.jpg",
      alt: "photomaster",
      name: "Photomaster",
      description:
        "Photomaster was a photo competition where people had to send in their best shots to win a prize. This is the design i made for them.",
      url: "https://portfolio.zenchirecords.com/photomaster_prototype",
      image: "",
    },
    {
      
      id: 10,
      src: "/images/jt.jpg",
      alt: "JT Photography",
      name: "JT Photography",
      description:
        "Jonai Tan is a freelance photographer. He asked me to create a portfolio for him where people can find his work. This is the design I made for him",
      url: "https://portfolio.zenchirecords.com/JT_photography",
      image: "",
    },
    {
      id: 11,
      src: "/images/bnt.jpg",
      alt: "bnt",
      name: "BNT",
      description:
        "B&T Jeans was a small online pants selling company, this is the design i made for them.",
      url: "https://portfolio.zenchirecords.com/BNT",
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
            <a href={portfolio.clip} target="blank_">
             
              Video
            </a>
          </Button>

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
