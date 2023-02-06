import React from 'react';
import styled from 'styled-components';
const BadgeContainer = styled.button`
  border: 1px solid ${({ theme }) => theme.color.gray30};
  color: ${({ theme }) => theme.color.gray85};
  background: ${({ theme }) => theme.color.white};
  border-radius: 20px;
  font-size: 14px;
  padding: 8px 12px;
  margin-right: 4px;
`;
const ComentBadge = () => {
  return (
    <>
      <BadgeContainer>가벼운</BadgeContainer>
      <BadgeContainer>밝은</BadgeContainer>
      <BadgeContainer>청결한 위생 상태</BadgeContainer>
    </>
  );
};

export default ComentBadge;
