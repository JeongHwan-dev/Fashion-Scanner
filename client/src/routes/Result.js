import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from 'components/commonComponents/Navigation';
import MemberCard from 'components/matchingComponents/MemberCard';
import Footer from 'components/commonComponents/Footer';
import 'routes/css/Result.css';

const Result = () => {
  const url = `http://elice-kdt-ai-track-vm-ai-13.koreacentral.cloudapp.azure.com:8000`;
  const [result, setResult] = useState({
    memberObj: {
      name: '',
      photo: '',
      sign: '',
      comment: '',
      btnLabel: '',
    },
    imgObj: {
      type: '',
      feature: '',
    },
  });

  useEffect(() => {
    setResult({
      memberObj: {
        name: 'jisoo',
        photo: '/images/jisoo_card.jpg',
        sign: '/images/jisoo_sign.png',
        comment: '당신의 패션은 블랙 컬러로 포인트를 주는 지수와 매칭됩니다.',
        btnLabel: '지수 룩북 바로가기',
      },
      imgObj: {
        type: '',
        feature: '',
      },
    });
    // 추후 API 불러오기로 수정
    // getResult();
  }, []);

  // 매칭 결과값 불러오기 함수
  const getResult = async () => {
    await axios.get(url + '/matching/result').then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <div className="result">
        <Navigation />
        <div className="result__inner">
          <div className="guide">
            <p>아래의 카드에 마우스를 올려주세요.</p>
            <span className="material-icons">arrow_drop_down</span>
          </div>
          <MemberCard memberObj={result.memberObj} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Result;