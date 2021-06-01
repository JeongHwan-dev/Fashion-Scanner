import React from 'react';
import background from 'videos/background.mp4';
import 'components/homeComponents/css/Title.css';

const Title = () => {
  return (
    <>
      <section className="title" id="section__title">
        <div className="title__inner">
          <img src={require('images/title_logo.png').default} alt="FASHION SCANNER" />
          <h2>DISCOVER THE NEW TRENDS</h2>
        </div>
        <video autoPlay muted loop id="bg-video">
          <source src={background} type="video/mp4" />
        </video>
      </section>
    </>
  );
};

export default Title;
