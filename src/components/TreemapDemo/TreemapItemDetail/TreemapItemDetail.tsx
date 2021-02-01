import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { TreemapItemDetailProps } from './TreemapItemDetail.types';

const Container = styled.div`
`;

const Attribute = styled.div`
  display: grid;
  grid-template-columns: 4rem 6rem;
`;

const Label = styled.div`
  padding: 5px;
`;

const Value = styled.div`
  padding: 5px;
`;

export const TreemapItemDetail: FunctionComponent<TreemapItemDetailProps> = (props) => {
  return (
    <Container>
      <h2>{props.title}</h2>

      <Attribute>
        <Label>Price:</Label>
        <Value>${props.detail.price}</Value>
      </Attribute>
      <Attribute>
        <Label>High:</Label>
        <Value>${props.detail.high}</Value>
      </Attribute>
      <Attribute>
        <Label>Low:</Label>
        <Value>${props.detail.low}</Value>
      </Attribute>


    </Container>
  );
};
