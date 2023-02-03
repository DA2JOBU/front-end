import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const PeopleButton = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const { onChange, name } = props;
  return (
    <>
      <p>
        <BaseButton
          disabled
          value="4~8명"
          width="158px"
          height="52px"
          onClick={onChange}
          name={name}
        />
        <BaseButton
          disabled
          value="9~12명"
          width="158px"
          height="52px"
          onClick={onChange}
          name={name}
        />
      </p>
      <p>
        <BaseButton
          disabled
          value="13~16명"
          width="158px"
          height="52px"
          onClick={onChange}
          name={name}
        />
        <BaseButton
          disabled
          value="17명 이상"
          width="158px"
          height="52px"
          onClick={onChange}
          name={name}
        />
      </p>
    </>
  );
};

export default PeopleButton;
