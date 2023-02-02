import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';

const Satisfaction = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <p>
        <BaseButton
          disabled
          children="5"
          width="58px"
          height="58px"
          onClick={() => {
            setActive(!active);
          }}
        />
        <BaseButton
          disabled
          children="4"
          width="58px"
          height="58px"
          onClick={() => {
            setActive(!active);
          }}
        />
        <BaseButton
          disabled
          children="3"
          width="58px"
          height="58px"
          onClick={() => {
            setActive(!active);
          }}
        />
        <BaseButton
          disabled
          children="2"
          width="58px"
          height="58px"
          onClick={() => {
            setActive(!active);
          }}
        />
        <BaseButton
          disabled
          children="1"
          width="58px"
          height="58px"
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

export default Satisfaction;
