import React,{useState} from "react";
import BaseButton from '@components/elements/keyword-button/base';

const Atmosphere = () => {
  const [active, setActive] = useState<boolean>(false);

  return(
    <p>
    <BaseButton
      disabled
      children="가벼운"
      width="104px"
      height="52px"
      onClick={() => {
        setActive(!active);
      }}
    />
    <BaseButton
      disabled
      children="일반적인"
      width="104px"
      height="52px"
      onClick={() => {
        setActive(!active);
      }}
    />
      <BaseButton
      disabled
      children="무거운"
      width="104px"
      height="52px"
      onClick={() => {
        setActive(!active);
      }}
    />
  </p>
  )
}

export default Atmosphere;