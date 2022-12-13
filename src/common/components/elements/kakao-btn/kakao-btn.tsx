import React from 'react';

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const KakaoLoginBtn = ({ onClick }: Props) => {
  return (
    <div>
      <button id="kakao-login-btn" onClick={onClick}>
        <img src="/assets/images/kakao_login.png" width="222" alt="카카오 로그인 버튼" />
      </button>
    </div>
  );
};

export default KakaoLoginBtn;
