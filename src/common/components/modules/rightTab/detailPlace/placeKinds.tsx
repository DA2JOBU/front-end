import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';

const PlaceButton = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <p>
        <BaseButton
          disabled
          children="가본 곳"
          width="158px"
          height="52px"
          onClick={() => {
            setActive(!active);
          }}
        />
        <BaseButton
          disabled
          children="가고 싶은 곳"
          width="158px"
          height="52px"
          onClick={() => {
            setActive(!active);
          }}
        />
      </p>
      <p>
      </p>
    </>
  );
};

export default PlaceButton;
