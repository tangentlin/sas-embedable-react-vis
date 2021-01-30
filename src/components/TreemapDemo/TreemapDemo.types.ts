import { TreemapPoint } from "react-vis";

export interface ITreemapDemoInput {
  title: string;
  data: TreemapPoint;
}

export interface ITreemapDemoEvent {
}

export type TreemapDemoProps = ITreemapDemoInput & ITreemapDemoEvent;
