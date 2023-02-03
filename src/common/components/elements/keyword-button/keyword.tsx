import React, { useState } from "react";
import BaseButton from '@components/elements/keyword-button/base';

const KeywordButton = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <p>
      <BaseButton
        disabled
        value="가벼운"
        width="104px"
        height="52px"
        onClick={() => {
          setActive(!active);
        }}
      />
      <BaseButton
        disabled
        value="일반적인"
        width="104px"
        height="52px"
        onClick={() => {
          setActive(!active);
        }}
      />
      <BaseButton
        disabled
        value="무거운"
        width="104px"
        height="52px"
        onClick={() => {
          setActive(!active);
        }}
      />
    </p>
  )
}

export default KeywordButton;