import React from 'react';
import styled from 'styled-components';
const BadgeContainer = styled.span`
  background: ${({ theme }) => theme.color.TbrightOrange};
  border-radius: 20px;
  color: ${({ theme }) => theme.color.orange};
  font-size: 10px;
  font-weight: 800;
  padding: 5px 8px;
`;

type PropsType = {
  rank?: string | number;
};
const Badge = (props: PropsType) => {
  const { rank } = props;
  return <BadgeContainer>TOP {rank}</BadgeContainer>;
};

export default Badge;
