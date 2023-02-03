import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PlaceKinds = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const onClick = props.onChange;
  return (
    <>
      <p>
        <BaseButton
          value="가본 곳"
          width="158px"
          height="52px"
          onClick={onClick}
        />
        <BaseButton
          value="가고 싶은 곳"
          width="158px"
          height="52px"
          onClick={onClick}
        />
      </p>
      <p>
      </p>
    </>
  );
};

export default PlaceKinds;
