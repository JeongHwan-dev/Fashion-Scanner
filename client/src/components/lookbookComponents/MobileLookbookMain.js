import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import 'components/lookbookComponents/css/MobileLookbookMain.css';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Thumbs]);

const MobileLookbookMain = ({ member, memberEn }) => {
  const { t } = useTranslation('');
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const mobileThumbnailsKo = member.map(({ lookbookId, lookbookImage }) => {
    return (
      <SwiperSlide key={lookbookId}>
        <div className="m-lookbookmain__thumb">
          <img src={lookbookImage} alt="thumbnail" />
        </div>
      </SwiperSlide>
    );
  });

  const mobileThumbnailsEn = memberEn.map(({ lookbookId, lookbookImage }) => {
    return (
      <SwiperSlide key={lookbookId}>
        <div className="m-lookbookmain__thumb">
          <img src={lookbookImage} alt="thumbnail" />
        </div>
      </SwiperSlide>
    );
  });

  const mobileSlidesKo = member.map(
    ({ lookbookId, lookbookImage, category, color, attributes, similarImages }) => {
      let features = `${attributes[0]}, ${attributes[1]}, ${attributes[2]}`;
      let colorbox = `#${color}`;
      let boxStyle = {
        width: '18px',
        height: '18px',
        margin: '0',
        backgroundColor: `${colorbox}`,
      };
      let similars = JSON.parse(similarImages);
      let similarList = [];
      for (let similar of similars) {
        similarList.push(JSON.parse(similar));
      }

      return (
        <SwiperSlide key={lookbookId}>
          <div className="m-lookbookmain__mainimg">
            <img src={lookbookImage} alt="lookbook" />
          </div>
          <div className="m-lookbookmain__maincont">
            <div className="m-lookbookmain__line1">
              <h3>TYPE</h3>
              <span>{category}</span>
            </div>
            <div className="m-lookbookmain__line2">
              <h3>COLOR</h3>
              <div className="m-lookbookmain__colorbox" style={boxStyle}></div>
            </div>
            <div className="m-lookbookmain__line3">
              <h3>FEATURES</h3>
              <span>{features}</span>
            </div>
          </div>
          <div className="m-lookbookmain__recomm">
            <h3>룩북과 비슷한 옷 보기</h3>
            <div className="m-lookbookmain__recomm__inner">
              {similarList.map((similar, idx) => {
                return (
                  <div key={idx}>
                    <a target="_blank" href={similar.link}>
                      <img src={similar.image} alt="recommend image" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </SwiperSlide>
      );
    },
  );

  const mobileSlidesEn = memberEn.map(
    ({ lookbookId, lookbookImage, category, color, attributes, similarImages }) => {
      let features = `${attributes[0]}, ${attributes[1]}, ${attributes[2]}`;
      let colorbox = `#${color}`;
      let boxStyle = {
        width: '18px',
        height: '18px',
        margin: '0',
        backgroundColor: `${colorbox}`,
      };
      let similars = JSON.parse(similarImages);
      let similarList = [];
      for (let similar of similars) {
        similarList.push(JSON.parse(similar));
      }

      return (
        <SwiperSlide key={lookbookId}>
          <div className="m-lookbookmain__mainimg">
            <img src={lookbookImage} alt="lookbook" />
          </div>
          <div className="m-lookbookmain__maincont">
            <div className="m-lookbookmain__line1">
              <h3>TYPE</h3>
              <span>{category}</span>
            </div>
            <div className="m-lookbookmain__line2">
              <h3>COLOR</h3>
              <div className="m-lookbookmain__colorbox" style={boxStyle}></div>
            </div>
            <div className="m-lookbookmain__line3">
              <h3>FEATURES</h3>
              <span>{features}</span>
            </div>
          </div>
          <div className="m-lookbookmain__recomm">
            <h3>You may like these...</h3>
            <div className="m-lookbookmain__recomm__inner">
              {similarList.map((similar, idx) => {
                return (
                  <div key={idx}>
                    <a target="_blank" href={similar.link}>
                      <img src={similar.image} alt="recommend image" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </SwiperSlide>
      );
    },
  );

  return (
    <>
      <section className="m-lookbookmain">
        <div className="m-lookbookmain__inner">
          {/* 썸네일 */}
          <Swiper
            className="m-lookbookmain__thumbnails"
            onSwiper={setThumbsSwiper}
            spaceBetween={-40}
            slidesPerView={3}
            loop={true}
          >
            {localStorage.i18nextLng === 'en' ? mobileThumbnailsEn : mobileThumbnailsKo}
          </Swiper>
          <Swiper
            className="m-lookbookmain__main"
            navigation
            spaceBetween={0}
            slidesPerView={1}
            thumbs={{ swiper: thumbsSwiper }}
            loop={true}
          >
            {localStorage.i18nextLng === 'en' ? mobileSlidesEn : mobileSlidesKo}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default MobileLookbookMain;
