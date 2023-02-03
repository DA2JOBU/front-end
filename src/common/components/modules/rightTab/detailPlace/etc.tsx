import React, { useState } from "react";
import BaseButton from '@components/elements/keyword-button/base';

const Etc = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <p>
        <BaseButton
          disabled
          value="콜키지"
          width="104px"
          height="52px"
          onClick={() => {
            setActive(!active);
          }}
        />
        <BaseButton
          disabled
          value="룸"
          width="104px"
          height="52px"
          onClick={() => {
            setActive(!active);
          }}
        />
        <BaseButton
          disabled
          value="선결제"
          width="104px"
          height="52px"
          onClick={() => {
            setActive(!active);
          }}
        />
      </p>
      <p>

        <BaseButton
          disabled
          value="예약 필수"
          width="104px"
          height="52px"
          onClick={() => {
            setActive(!active);
          }}
        />
        <BaseButton
          disabled
          value="주차 가능"
          width="104px"
          height="52px"
          onClick={() => {
            setActive(!active);
          }}
        />
        <BaseButton
          disabled
          value="대관 가능"
          width="104px"
          height="52px"
          onClick={() => {
            setActive(!active);
          }}
        />
      </p>
    </>
  )
}

export default Etc;