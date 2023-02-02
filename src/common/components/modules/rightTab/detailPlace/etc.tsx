import React,{useState} from "react";
import BaseButton from '@components/elements/keyword-button/base';

const Etc = () => {
  const [active, setActive] = useState<boolean>(false);

  return(
    <>
    <p>
    <BaseButton
      disabled
      children="콜키지"
      width="104px"
      height="52px"
      onClick={() => {
        setActive(!active);
      }}
    />
    <BaseButton
      disabled
      children="룸"
      width="104px"
      height="52px"
      onClick={() => {
        setActive(!active);
      }}
    />
      <BaseButton
      disabled
      children="선결제"
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
      children="예약 필수"
      width="104px"
      height="52px"
      onClick={() => {
        setActive(!active);
      }}
    />
    <BaseButton
      disabled
      children="주차 가능"
      width="104px"
      height="52px"
      onClick={() => {
        setActive(!active);
      }}
    />
      <BaseButton
      disabled
      children="대관 가능"
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