import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';

interface Props {
  onChange: () => void;
}
const PlaceButton = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const onChange = props.onChange;
  return (
    <>
      <p>
        <BaseButton
          value="가본 곳"
          width="158px"
          height="52px"
          onClick={onChange}
        />
        <BaseButton
          disabled
          value="가고 싶은 곳"
          width="158px"
          height="52px"
          onClick={onChange}
        />
      </p>
      <p>
      </p>
    </>
  );
};

export default PlaceButton;
