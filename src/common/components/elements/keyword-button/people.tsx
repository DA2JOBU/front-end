import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const PeopleButton = (props: Props) => {
  const { onChange, name } = props;

  const [under8, setUnder8] = useState(false);
  const [under12, setUnder12] = useState(false);
  const [under16, setUnder16] = useState(false);
  const [up17, setUp17] = useState(false);
  const [state, setState] = useState('');
  const clickEvent = (val: string) => {
    setState(val);
    if (val === '4,8') {
      setUnder8(true);
      setUnder12(false);
      setUnder16(false);
      setUp17(false);
    }
    else if (val === '9,12') {
      setUnder8(false);
      setUnder12(true);
      setUnder16(false);
      setUp17(false);
    }
    else if (val === '13,16') {
      setUnder8(false);
      setUnder12(false);
      setUnder16(true);
      setUp17(false);
    }
    else if (val === '17') {
      setUnder8(false);
      setUnder12(false);
      setUnder16(false);
      setUp17(true);
    }
  }
  return (
    <ButtonContainer>
      <BaseButton
        mClick={clickEvent}
        active={under8}
        text="4~8명"
        value='4,8'
        width="9.8rem"
        height="3.25rem"
        fontSize="1rem"
        onClick={onChange}
        name={name}
      />
      <BaseButton
        mClick={clickEvent}
        active={under12}
        text="9~12명"
        value="9,12"
        width="9.8rem"
        fontSize="1rem"
        height="3.25rem"
        onClick={onChange}
        name={name}
      />
      <BaseButton
        mClick={clickEvent}
        active={under16}
        text="13~16명"
        value="13,16"
        width="9.8rem"
        fontSize="1rem"
        height="3.25rem"
        onClick={onChange}
        name={name}
      />
      <BaseButton
        mClick={clickEvent}
        active={up17}
        text="17명 이상"
        value="17"
        width="9.8rem"
        fontSize="1rem"
        height="3.25rem"
        onClick={onChange}
        name={name}
      />
    </ButtonContainer>
  );
};

export default PeopleButton;
