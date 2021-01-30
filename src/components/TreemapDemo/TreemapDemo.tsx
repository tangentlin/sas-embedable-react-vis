import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { TreemapDemoProps } from './TreemapDemo.types';
import { Treemap } from 'react-vis';

// CSS
const Container = styled('div')`
  margin: 10px;
  font-family: sans-serif;
`;

// @see https://github.com/uber/react-vis/blob/premodern/showcase/treemap/simple-treemap.js
// @see https://uber.github.io/react-vis/documentation/other-charts/treemap

export const TreemapDemo: FunctionComponent<TreemapDemoProps> = (props) => {
  return (
    <Container>
      <Treemap
        width={500}
        height={300}
        colorType={'literal'}
        colorRange={['#88572C']}
        animation={true}
        getColor={d => d.hex}
        title={props.title}
        data={props.data} />
    </Container>
  );
};
