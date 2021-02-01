import { TreemapPoint } from "react-vis";
import { IDetailData } from './sampleData';

export interface ITreemapDemoInput {
  title: string;
  data: TreemapPoint;
  details: Map<string, IDetailData>
}

export interface ITreemapDemoEvent {
}

export type TreemapDemoProps = ITreemapDemoInput & ITreemapDemoEvent;
