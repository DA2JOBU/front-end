import React, { useState } from "react";
import BaseButton from '@components/elements/keyword-button/base';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const KeywordButton = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const { onChange, name } = props;
  return (
    <p>
      <BaseButton
        disabled
        value="가벼운"
        width="104px"
        height="52px"
        onClick={onChange}
        name={name}
      />
      <BaseButton
        disabled
        value="일반적인"
        width="104px"
        height="52px"
        onClick={onChange}
        name={name}
      />
      <BaseButton
        disabled
        value="무거운"
        width="104px"
        height="52px"
        onClick={onChange}
        name={name}
      />
    </p>
  )
}

export default KeywordButton;