import React, { useState } from "react";
import BaseButton from '@components/elements/keyword-button/base';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const KeywordButton = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const onClick = props.onChange;
  return (
    <p>
      <BaseButton
        disabled
        value="가벼운"
        width="104px"
        height="52px"
        onClick={onClick}
      />
      <BaseButton
        disabled
        value="일반적인"
        width="104px"
        height="52px"
        onClick={onClick}
      />
      <BaseButton
        disabled
        value="무거운"
        width="104px"
        height="52px"
        onClick={onClick}
      />
    </p>
  )
}

export default KeywordButton;