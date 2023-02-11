import React, { useState } from "react";
import BaseButton from '@components/elements/keyword-button/base';
import { ButtonContainer } from "@components/elements/keyword-button/people";

interface Props {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  lighting?: string;
}

const Brightness = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const { onChange, name, lighting } = props;
  console.log(lighting)
  return (
    <ButtonContainer>
      <BaseButton
        text='밝은'
        value="Light"
        width="6.4rem"
        height="52px"
        fontSize="16px"
        onClick={onChange}
        name={name}
        lighting={lighting}
      />
      <BaseButton
        text='일반적인'
        value="Nomal"
        width="6.4rem"
        height="52px"
        fontSize="16px"
        onClick={onChange}
        name={name}
        lighting={lighting}
      />
      <BaseButton
        text='어두운'
        value="Dark"
        width="6.4rem"
        height="52px"
        fontSize="16px"
        onClick={onChange}
        name={name}
        lighting={lighting}
      />
    </ButtonContainer>
  )
}

export default Brightness;