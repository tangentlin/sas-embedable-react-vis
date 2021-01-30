import React from 'react';
import { sampleData } from './sampleData';
import { TreemapDemo } from './TreemapDemo';

export default {
  title: 'TreemapDemo',
  component: TreemapDemo,
};


export const defaultStory = () => <TreemapDemo
  title={'My Title'}
  data={sampleData}
/>;

