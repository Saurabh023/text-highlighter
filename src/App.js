import React, { useEffect, useState } from 'react';
import './styles.css'

const ScrollTextAnimation = () => {
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
      <div style={{ margin: 'auto' ,fontSize: '3.5rem', fontWeight: 'bold', width: '1000px'  , paddingTop: '200px' }} className="scroll-container">
        {words.map((word, index) => (
          <span
            key={index}
            style={{ color: calculateWordColor(index) }}
          >
            {word}{' '}
          </span>
        ))}
        <br/>
        <br/>
        <p style={{color: 'yellow'}}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero dolorem quas magnam odit distinctio facilis blanditiis laborum nostrum dolorum sit quia, praesentium dignissimos omnis nihil provident ab eos, quod, beatae laudantium. Quod harum necessitatibus animi officiis quis perspiciatis voluptas! Soluta in similique voluptates pariatur minima corporis, quo officia, blanditiis, inventore facere optio necessitatibus voluptate odit eos animi est rerum! Hic maiores est, sed, eligendi facere quia, modi voluptatem distinctio at voluptate quod fuga magnam provident fugit alias? Quaerat suscipit doloribus aliquid libero, inventore dignissimos consequatur exercitationem quos esse earum illo tempora officia natus magnam est, accusantium cupiditate mollitia. Obcaecati, aperiam!</p>
      </div>
    </div>
  );
};

export default ScrollTextAnimation;
