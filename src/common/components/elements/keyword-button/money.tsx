import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const MoneyButton = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const onClick = props.onChange;
  return (
    <>
      <p>
        <BaseButton
          value="3만 미만"
          width="158px"
          height="52px"
          onClick={onClick}
        />
        <BaseButton
          value="3만 이상 5만 미만"
          width="158px"
          height="52px"
          onClick={onClick}
        />
      </p>
      <p>
        <BaseButton
          value="5만 이상 10만 미만"
          width="158px"
          height="52px"
          onClick={onClick}
        />
        <BaseButton
          value="10만 이상"
          width="158px"
          height="52px"
          onClick={onClick}
        />
      </p>
    </>
  );
};

export default MoneyButton;
