import styled from 'styled-components';

const StatusPoint = styled.div<{ status: string }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.status === 'Hide' ? 'rgb(133, 144, 162)' : 'rgb(112, 186, 43)'};
  margin-right: 5px;
`;

export { StatusPoint };
