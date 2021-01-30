import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { TreemapDemoProps } from './TreemapDemo.types';
import { Treemap } from 'react-vis';

// CSS
const Container = styled('div')`
  margin: 10px;
`;

export const TreemapDemo: FunctionComponent<TreemapDemoProps> = (props) => {
  return (
    <Container>
      <Treemap
        width={500}
        height={500}
        title={props.title}
        data={props.data} />
    </Container>
  );
};
