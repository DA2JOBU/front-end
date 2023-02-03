import React, { useState } from "react";
import BaseButton from '@components/elements/keyword-button/base';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Brightness = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const onClick = props.onChange;
  return (
    <p>
      <BaseButton
        value="밝은"
        width="104px"
        height="52px"
        onClick={onClick}
      />
      <BaseButton
        value="일반적인"
        width="104px"
        height="52px"
        onClick={onClick}
      />
      <BaseButton
        value="어두운"
        width="104px"
        height="52px"
        onClick={onClick}
      />
    </p>
  )
}

export default Brightness;