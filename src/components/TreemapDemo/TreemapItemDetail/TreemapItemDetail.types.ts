import { IDetailData } from '../sampleData';

export interface ITreemapItemDetailInput {
  title: string;
  detail: IDetailData;
}

export interface ITreemapItemDetailEvent {
}

export type TreemapItemDetailProps = ITreemapItemDetailInput & ITreemapItemDetailEvent;
