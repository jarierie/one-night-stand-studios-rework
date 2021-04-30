import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import meenoi1 from "../assets/meenoi3.jpg";
import meenoi2 from "../assets/meenoi4.jpg";
import meenoi3 from "../assets/meenoi5.jpg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MiddleContainer = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
`;

const TextContainer = styled.div`
  width: 300px;
  height: 300px;
  p {
    font-size: 40px;
    text-align: center;
  }
`;

const Main = () => {
  const data = [
    { img: meenoi1, bgColor: "orange", fontColor: "white" },
    { img: meenoi2, bgColor: "black", fontColor: "grey" },
    { img: meenoi3, bgColor: "pink", fontColor: "black" },
  ];
  const [itemNumber, setItemNumber] = useState(0);
  const ref = useRef(null);

  const animation = () => {
    const tl = gsap.timeline();
    tl.to(ref.current, {
      backgroundColor: data[itemNumber].bgColor,
      duration: 1.5,
    })
      .to(
        ref.current.childNodes[0].firstChild,
        { attr: { src: data[itemNumber].img } },
        0
      )
      .to(
        ref.current.childNodes[1].childNodes[0],
        {
          color: data[itemNumber].fontColor,
        },
        0
      )
      .fromTo(
        ref.current.childNodes[1].firstChild,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },

        0
      );
  };

  useEffect(() => {
    console.log(ref.current.childNodes[0].childNodes);
  }, []);

  const changeState = () => {
    itemNumber < 2 ? setItemNumber(itemNumber + 1) : setItemNumber(0);
  };

  useEffect(() => {
    animation();
  }, [itemNumber]);
  return (
    <>
      <Container ref={ref} onClick={changeState}>
        <MiddleContainer>
          <img></img>
        </MiddleContainer>
        <TextContainer>
          <p>Hello this is a text</p>
        </TextContainer>
      </Container>
    </>
  );
};

export default Main;
