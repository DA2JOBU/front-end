import React, { useState } from "react";
import BaseButton from '@components/elements/keyword-button/base';
import { ButtonContainer } from "@components/elements/keyword-button/people";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Brightness = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const { onChange, name } = props;
  return (
    <ButtonContainer>
      <BaseButton
        value="밝은"
        width="102px"
        height="52px"
        fontSize="16px" 
        onClick={onChange}
        name={name}
      />
      <BaseButton
        value="일반적인"
        width="102px"
        height="52px"
        fontSize="16px" 
        onClick={onChange}
        name={name}
      />
      <BaseButton
        value="어두운"
        width="102px"
        height="52px"
        fontSize="16px" 
        onClick={onChange}
        name={name}
      />
    </ButtonContainer>
  )
}

export default Brightness;