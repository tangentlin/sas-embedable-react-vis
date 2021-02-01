import React, { FunctionComponent, MouseEvent, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { ITreemapDatapoint, TreemapDemoProps } from './TreemapDemo.types';
import { Treemap, TreemapPoint } from 'react-vis';
import { TreemapItemDetail } from './TreemapItemDetail/TreemapItemDetail';

// CSS
const Container = styled('div')`
  margin: 10px;
  font-family: sans-serif;
  display: grid;
  grid-template-columns: 500px 200px;
`;

const DetailContainer = styled('div')`
  border-left: 1px solid #cccccc;
  padding: 10px
`;

// @see https://github.com/uber/react-vis/blob/premodern/showcase/treemap/simple-treemap.js
// @see https://uber.github.io/react-vis/documentation/other-charts/treemap

export const TreemapDemo: FunctionComponent<TreemapDemoProps> = (props) => {
  const [selected, selectedSet] = useState<TreemapPoint | undefined>(undefined);

  const chart_onLeafClick = useCallback((datapoint: ITreemapDatapoint, event: MouseEvent<HTMLElement>) => {
    console.log(datapoint.data);
    selectedSet(datapoint.data);
  }, []);

  return (
    <Container>
      <Treemap
        width={500}
        height={300}
        colorType={'literal'}
        animation={true}
        getColor={d => d.color}
        title={props.title}
        // @ts-ignore
        onLeafClick={chart_onLeafClick}
        data={props.data} />
      <DetailContainer>
        {
          (selected) ?
            <TreemapItemDetail title={selected.title} detail={selected.detail} />
            : <div>Please select symbol on the left to see details</div>
        }
      </DetailContainer>
    </Container>
  );
};
