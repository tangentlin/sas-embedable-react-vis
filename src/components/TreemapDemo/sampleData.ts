import { TreemapPoint } from "react-vis";
import * as React from 'react';

const negative = '#f44336';
const positive = '#388e3c';

const commonStyle: React.CSSProperties = {border: '1px solid #000000'};

export interface IDetailData {
  price: number;
  high: number;
  low: number;
  priceHistory: number[]; // This would be better as an array date/price tuple
}

const detail1: IDetailData = {
  price: 362.5,
  high: 372.2,
  low: 220.3,
  priceHistory: []
};

const detail2: IDetailData = {
  price: 150.3,
  high: 169.0,
  low: 1430.2,
  priceHistory: []
};

const detail3: IDetailData = {
  price: 805.3,
  high: 842.0,
  low: 795.2,
  priceHistory: []
};

/**
 * @see https://github.com/uber/react-vis/blob/master/docs/treemap.md
 */
export const sampleData: TreemapPoint = {
  title: "analytics",
  color: "#333333",
  children: [
    {
      title: "Technology",
      children: [
        {title: "FB", color: negative, size: 3938, style: commonStyle, detail: detail1 },
        {title: "AAPL", color: negative, size: 3812, style: commonStyle, detail: detail2},
        {title: "MSFT", color: positive, size: 6714, style: commonStyle, detail: detail3},
        {title: "GOOG", color: positive, size: 2743, style: commonStyle, detail: detail1}
      ]
    },
    {
      title: "Automotive",
      children: [
        {title: "F", color: positive, size: 3534, style: commonStyle, detail: detail1},
        {title: "GM", color: positive, size: 5731, style: commonStyle, detail: detail2},
        {title: "TSLA", color: negative, size: 7840, style: commonStyle, detail: detail3},
      ]
    },
  ]
}



export const sampleDetail: Map<string, IDetailData> = new Map<string, IDetailData>([
  [ 'FB', detail1 ],
  [ 'AAPL', detail2 ],
  [ 'MSFT', detail3 ],
  [ 'GOOG', detail1 ],
  [ 'F', detail1 ],
  [ 'GM', detail2 ],
  [ 'TSLA', detail3 ],
]);
