import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';

const PeopleButton = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <p>
        <BaseButton
          disabled
          value="4~8명"
          width="158px"
          height="52px"
          onClick={() => {
            setActive(!active);
          }}
        />
        <BaseButton
          disabled
          value="9~12명"
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
          value="13~16명"
          width="158px"
          height="52px"
          onClick={() => {
            setActive(!active);
          }}
        />
        <BaseButton
          disabled
          value="17명 이상"
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
