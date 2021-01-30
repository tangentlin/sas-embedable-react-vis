import { TreemapPoint } from "react-vis";
import * as React from 'react';

const commonStyle: React.CSSProperties = {border: '1px solid #000000'};

/**
 * @see https://github.com/uber/react-vis/blob/master/docs/treemap.md
 */
export const sampleData: TreemapPoint = {
  title: "analytics",
  color: "#12939A",
  children: [
    {
      title: "cluster",
      children: [
        {title: "AgglomerativeCluster", color: "#12939A", size: 3938, style: commonStyle },
        {title: "CommunityStructure", color: "#12939A", size: 3812, style: commonStyle},
        {title: "HierarchicalCluster", color: "#12939A", size: 6714, style: commonStyle},
        {title: "MergeEdge", color: "#12939A", size: 743, style: commonStyle}
      ]
    },
    {
      title: "graph",
      children: [
        {title: "BetweennessCentrality", color: "#12939A", size: 3534, style: commonStyle},
        {title: "LinkDistance", color: "#12939A", size: 5731, style: commonStyle},
        {title: "MaxFlowMinCut", color: "#12939A", size: 7840, style: commonStyle},
        {title: "ShortestPaths", color: "#12939A", size: 5914, style: commonStyle},
        {title: "SpanningTree", color: "#12939A", size: 3416, style: commonStyle}
      ]
    },
    {
      title: "optimization",
      children: [
        {title: "AspectRatioBanker", color: "#12939A", size: 7074, style: commonStyle}
      ]
    }
  ]
}
