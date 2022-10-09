import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  align-self: center;
  width: ${390*2 + 20*2}px;
  
  @media (min-width: 1200px) {
    width: ${390*3 + 20*3}px;
  }

  @media (min-width: 1800px) {
    width: ${390*4 + 20*4}px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 20px;
`;

export const ControlBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ClearButton = styled.button`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  border: 0;
  background: transparent;
  color: #556B84;
  cursor: pointer;
`;
