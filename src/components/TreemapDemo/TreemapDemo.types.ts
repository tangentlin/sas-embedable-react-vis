import { TreemapPoint } from "react-vis";
import { IDetailData } from './sampleData';

export interface ITreemapDemoInput {
  title: string;
  data: TreemapPoint;
}

export interface ITreemapDemoEvent {
}

export type TreemapDemoProps = ITreemapDemoInput & ITreemapDemoEvent;


export interface ITreemapDatapoint {
  data: TreemapPoint;
  depth: number;
  height: number;
  value: number;
  x0: number;
  x1: number;
  y0: number;
  y1: number;
}
