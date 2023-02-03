import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const PlaceKinds = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const { onChange, name } = props;
  return (
    <>
      <p>
        <BaseButton
          value="가본 곳"
          width="158px"
          height="52px"
          onClick={onChange}
          name={name}
        />
        <BaseButton
          value="가고 싶은 곳"
          width="158px"
          height="52px"
          onClick={onChange}
          name={name}
        />
      </p>
      <p>
      </p>
    </>
  );
};

export default PlaceKinds;
