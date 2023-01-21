import React from 'react';

type Props = {
  length: number;
  value: string;
};

const SearchHeader = (props: Props) => {
  const { length, value } = props;
  return (
    <div>
      <span>{value}</span>
      <span>{length}</span>
    </div>
  );
};

export { SearchHeader };
