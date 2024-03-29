import React from 'react';
import Tab from './tab';
import Tabs from './tabs';
import { Search, SearchKeyword } from './tab-contents';
import BottomContent from '@components/elements/bottomContent';
import SearchTopPlace from './tab-contents/search-top-place';

type Props = {
  value: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const SideTabs = (props: { sideValue: Props }): JSX.Element => {
  const { value, handleOnChange, handleSubmit, handleDelete } = props.sideValue;

  return (
    <Tabs>
      <Tab title="장소 검색">
        <Search value={value} handleOnChange={handleOnChange} handleSubmit={handleSubmit} handleDelete={handleDelete} />
        <SearchTopPlace />
      </Tab>
      <Tab title="키워드 검색">
        <SearchKeyword />
      </Tab>
    </Tabs>
  );
};

export default SideTabs;
