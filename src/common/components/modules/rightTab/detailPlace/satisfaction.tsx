import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Satisfaction = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const onClick = props.onChange;
  return (
    <>
      <p>
        <BaseButton
          value="5"
          width="58px"
          height="58px"
          onClick={onClick}
        />
        <BaseButton
          value="4"
          width="58px"
          height="58px"
          onClick={onClick}
        />
        <BaseButton
          value="3"
          width="58px"
          height="58px"
          onClick={onClick}
        />
        <BaseButton
          value="2"
          width="58px"
          height="58px"
          onClick={onClick}
        />
        <BaseButton
          value="1"
          width="58px"
          height="58px"
          onClick={onClick}
        />
      </p>
      <p>
      </p>
    </>
  );
};

export default Satisfaction;
