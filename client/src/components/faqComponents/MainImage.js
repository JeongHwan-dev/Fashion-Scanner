import React from 'react';
import 'components/faqComponents/css/MainImage.css';

const MainImage = ({ blackpink }) => {
  return (
    <section className="faqmain" id="section__faq">
      <div className="faqmain__inner">
        <div className="fagmain__inner__wrapper">
          {!blackpink ? (
            <>
              <div className="faqmain__team__img">
                <img src="/images/faq/faq_main_team.png" alt="team" />
              </div>
            </>
          ) : (
            <>
              <div className="faqmain__inner__bg">
                <h2>FASHION</h2>
                <h2>SCANNER</h2>
                <h2>BLACK</h2>
                <h2>PINK</h2>
                <div className="faqmain__img__bg"></div>
                <div className="faqmain__img">
                  <img src="/images/faq/faq_main_blackpink.png" alt="main image" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainImage;
