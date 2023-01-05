import React from 'react';
import Tab from './tab';
import SideTab from './tab';
import Tabs from './tabs';
import { SearchKeyword, SearchPlace } from './tab-contents';

const SideTabs = () => {
  return (
    <Tabs>
      <Tab title="장소 검색">
        <SearchPlace />
      </Tab>
      <Tab title="키워드 검색">
        <SearchKeyword />
      </Tab>
    </Tabs>
  );
};

export default SideTabs;
