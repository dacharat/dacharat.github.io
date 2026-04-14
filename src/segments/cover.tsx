"use client";

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const CoverContainer = styled.div`
  position: relative;
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
`;

const CoverDescription = styled.div`
  position: absolute;
  width: 100%;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Name = styled.h1`
  font-family: "Special Elite", cursive;
`;

const Job = styled.h4`
  font-family: "Baloo 2", cursive;
  opacity: 0.75;
`;

const Cover = () => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Handle cached images: onLoad won't fire if browser already has the image
  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <CoverContainer>
      <picture>
        <source media="(max-width: 480px)" srcSet="/assets/cover/cover-mobile.jpg" />
        <source media="(max-width: 800px)" srcSet="/assets/cover/cover-tablet.jpg" />
        <Img
          ref={imgRef}
          src="/assets/cover/cover-pc.jpg"
          onLoad={() => setLoaded(true)}
          alt="Cover"
        />
      </picture>
      {loaded && (
        <CoverDescription>
          <Name>Dacharat Pankong</Name>
          <Job>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Software Developer").start();
              }}
              options={{ delay: 50 }}
            />
          </Job>
        </CoverDescription>
      )}
    </CoverContainer>
  );
};

export default Cover;
