import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Etc = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const { onChange, name } = props;
  return (
    <>
      <p>
        <BaseButton value="콜키지" width="104px" height="52px" fontSize="16px" onClick={onChange} name={name} />
        <BaseButton value="룸" width="104px" height="52px" fontSize="16px" onClick={onChange} name={name} />
        <BaseButton value="선결제" width="104px" height="52px" fontSize="16px" onClick={onChange} name={name} />
      </p>
      <p>
        <BaseButton value="예약 필수" width="104px" height="52px" fontSize="16px" onClick={onChange} name={name} />
        <BaseButton value="주차 가능" width="104px" height="52px" fontSize="16px" onClick={onChange} name={name} />
        <BaseButton value="대관 가능" width="104px" height="52px" fontSize="16px" onClick={onChange} name={name} />
      </p>
    </>
  );
};

export default Etc;
