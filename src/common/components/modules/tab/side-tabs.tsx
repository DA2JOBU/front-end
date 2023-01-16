import React from 'react';
import Tab from './tab';
import Tabs from './tabs';
import { Search, SearchKeyword } from './tab-contents';

type Props = {
  value: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const SideTabs = (props: Props): JSX.Element => {
  const { value, handleOnChange, handleSubmit } = props;

  return (
    <Tabs>
      <Tab title="장소 검색">
        <Search value={value} handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
      </Tab>
      <Tab title="키워드 검색">
        <SearchKeyword />
      </Tab>
    </Tabs>
  );
};

export default SideTabs;
