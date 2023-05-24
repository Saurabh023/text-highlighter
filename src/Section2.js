import React, { useEffect } from 'react';
import './section2.css';

const Section2 = () => {
  useEffect(() => {
    const fancyText = document.querySelector("#fancy-text");
    if (!fancyText) return;

    const content = `In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold`;
    const spans = content.split(" ").map((token) => {
      return <span>{token}</span>;
    });

    fancyText.append(...spans);

    return () => {
      fancyText.innerHTML = '';
    };
  }, []);

  const handleScroll = () => {
    const baseHeight = document.body.scrollHeight - window.innerHeight;
    const scrollCovered = baseHeight - window.scrollY;
    const thumbPos = 100 - ((scrollCovered < 0 ? 0 : scrollCovered) / baseHeight) * 100;

    if (document.querySelector("#fancy-text")) {
      updateFancyText(thumbPos);
    } else {
      updateScrollbar(thumbPos);
      updateSlide(thumbPos);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const updateFancyText = (thumbPos) => {
    const spans = [...document.querySelectorAll("#fancy-text span")];
    if (!spans.length) return;
    const tokens = Math.ceil((spans.length * thumbPos) / 100);
    spans.forEach((span, i) => {
      if (i < tokens) {
        span.classList.add("highlight");
      } else {
        span.classList.remove("highlight");
      }
    });
  };

  const updateScrollbar = (thumbPos) => {
    const scrollBar = document.querySelector(".animated-scrollbar");
    const thumb = document.querySelector(".animated-scrollbar__thumb");
    thumb.style.height = `${thumbPos || 1}%`;
  };

  const updateSlide = (thumbPos) => {
    const slideNo = document.querySelector("#slide-no");
    let slideNum;
    if (thumbPos < 33.3) {
      slideNum = 1;
    } else if (thumbPos < 66.6) {
      slideNum = 2;
    } else {
      slideNum = 3;
    }
    slideNo.innerHTML = slideNum;
  };

  return (
    <>
      <div className="container">
        <div className="static-content">
          <h2>Create at the speed of thought.</h2>
          <small>
            Focus on your getting your thoughts out and crafting the best message
            while Chronicle does the heavy lifting for you
          </small>
        </div>
        <div className="dynamic-content"></div>
        <div className="fancy-scrollbar">
          <small id="slide-no">1</small>
          <div className="animated-scrollbar">
            <div className="animated-scrollbar__thumb"></div>
          </div>
          <small>3</small>
        </div>
      </div>
    </>
  );
};

export default Section2;
