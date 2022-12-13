import React, { FC } from 'react';
import KakaoLoginBtn from 'common/components/elements/kakao-btn';

// import { KAKO_LOGIN_URL } from 'common/api/kakaoLoginData';

const loginWithKakao = () => {
  const kakaoLogin = () => {    
    window.Kakao.Auth.login({
      
      success: function(Auth: any) {
        console.log(Auth.Auth);
      },
      fail: function(error: any) {
        console.log(error);
      },
    });
  };

  const kakaologinHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("클릭", event)

  }
  return (
    <div>
      <KakaoLoginBtn onClick={kakaologinHandler}/>
    </div>
  );
};

export default loginWithKakao;
