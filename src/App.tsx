import React from 'react';
import { sampleData } from './components/TreemapDemo/sampleData';
import { TreemapDemo } from './components/TreemapDemo/TreemapDemo';

function App() {
  const data = sampleData;
  return (
    <TreemapDemo data={data} title={"Demo"} />
  );
}

export default App;
