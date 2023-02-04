import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';
import { ButtonContainer } from '@components/elements/keyword-button/people';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Satisfaction = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const { onChange, name } = props;
  return (
    <ButtonContainer>
      <BaseButton value="5" width="58px" height="58px" onClick={onChange} name={name} />
      <BaseButton value="4" width="58px" height="58px" onClick={onChange} name={name} />
      <BaseButton value="3" width="58px" height="58px" onClick={onChange} name={name} />
      <BaseButton value="2" width="58px" height="58px" onClick={onChange} name={name} />
      <BaseButton value="1" width="58px" height="58px" onClick={onChange} name={name} />
    </ButtonContainer>
  );
};

export default Satisfaction;
