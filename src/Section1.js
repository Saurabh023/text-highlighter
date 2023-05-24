import React, { useEffect, useState } from 'react';
import './styles.css'

const Section1 = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const text = "In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.  ";
  const words = text.split(' ');

  const calculateWordColor = (index) => {
    const threshold = index * 10;
    const wordColor = scrollPosition > threshold ? 'white' : 'rgb(53, 51, 51)';

    return wordColor;
  };

  return (
    <div>
      <div style={{ margin: '0 12%', fontSize: '3.5rem', fontWeight: 'bold', width: '1000px', paddingTop: '200px' }} className="scroll-container">
        {words.map((word, index) => (
          <span
            key={index}
            style={{ color: calculateWordColor(index) }}
          >
            {word}{' '}
          </span>
        ))}
        <br />
        <br />
      </div>
    </div>
  );
};

export default Section1;
