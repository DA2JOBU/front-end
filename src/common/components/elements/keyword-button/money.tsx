import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const MoneyButton = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const { onChange, name } = props;
  return (
    <>
      <p>
        <BaseButton
          value="3만 미만"
          width="158px"
          height="52px"
          onClick={onChange}
          name={name}
        />
        <BaseButton
          value="3만 이상 5만 미만"
          width="158px"
          height="52px"
          onClick={onChange}
          name={name}
        />
      </p>
      <p>
        <BaseButton
          value="5만 이상 10만 미만"
          width="158px"
          height="52px"
          onClick={onChange}
          name={name}
        />
        <BaseButton
          value="10만 이상"
          width="158px"
          height="52px"
          onClick={onChange}
          name={name}
        />
      </p>
    </>
  );
};

export default MoneyButton;
