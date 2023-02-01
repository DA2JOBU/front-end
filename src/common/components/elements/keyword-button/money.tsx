import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';

const MoneyButton = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <p>
        <BaseButton
          disabled
          children="3만 미만"
          width="158px"
          height="52px"
          onClick={() => {
            setActive(!active);
          }}
        />
        <BaseButton
          disabled
          children="3만 이상 5만 미만"
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
          children="5만 이상 10만 미만"
          width="158px"
          height="52px"
          onClick={() => {
            setActive(!active);
          }}
        />
        <BaseButton
          disabled
          children="10만 이상"
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

export default MoneyButton;
