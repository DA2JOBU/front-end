import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';
import { ButtonContainer } from '@components/elements/keyword-button/people';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  count?: number | undefined;
}

const Atmosphere = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const { onChange, name, count } = props;
  return (
    <ButtonContainer>
      <BaseButton
        value="가벼운"
        width="102px"
        height="52px"
        fontSize="16px"
        onClick={onChange}
        name={name}
        count={count}
      />
      <BaseButton value="일반적인" width="102px" height="52px" fontSize="16px" onClick={onChange} name={name} />
      <BaseButton value="무거운" width="102px" height="52px" fontSize="16px" onClick={onChange} name={name} />
    </ButtonContainer>
  );
};

export default Atmosphere;
