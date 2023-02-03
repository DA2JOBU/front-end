import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PeopleButton = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const onClick = props.onChange;
  return (
    <>
      <p>
        <BaseButton
          disabled
          value="4~8명"
          width="158px"
          height="52px"
          onClick={onClick}
        />
        <BaseButton
          disabled
          value="9~12명"
          width="158px"
          height="52px"
          onClick={onClick}
        />
      </p>
      <p>
        <BaseButton
          disabled
          value="13~16명"
          width="158px"
          height="52px"
          onClick={onClick}
        />
        <BaseButton
          disabled
          value="17명 이상"
          width="158px"
          height="52px"
          onClick={onClick}
        />
      </p>
    </>
  );
};

export default PeopleButton;
