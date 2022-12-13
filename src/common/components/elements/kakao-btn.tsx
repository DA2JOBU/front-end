import React from 'react';

const KakaoLoginBtn = (props:{onClick:() => void}) => {

  // const { kakaologinHandler } = props;
  return (
    <div>
      <button id="kakao-login-btn" onClick={() => props.onClick}>
        <img src="/assets/images/kakao_login.png" width="222" alt="카카오 로그인 버튼" />
      </button>
    </div>
  );
};

export default KakaoLoginBtn;