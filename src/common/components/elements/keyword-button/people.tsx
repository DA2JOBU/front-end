import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';

const PeopleButton = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <p>
        <BaseButton
          disabled
          children="4~8명"
          width="158px"
          height="52px"
          onClick={() => {
            setActive(!active);
          }}
        />
        <BaseButton
          disabled
          children="9~12명"
          width="158px"
          height="52px"
          onClick={() => {
            setActive(!active);
          }}
        />
      </p>
      <p>
        <BaseButton
          disabled
          children="13~16명"
          width="158px"
          height="52px"
          onClick={() => {
            setActive(!active);
          }}
        />
        <BaseButton
          disabled
          children="17명 이상"
          width="158px"
          height="52px"
          onClick={() => {
            setActive(!active);
          }}
        />
      </p>
    </>
  );
};

export default PeopleButton;
