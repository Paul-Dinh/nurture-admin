import styled from 'styled-components';

const StatusPoint = styled.div<{ status: string }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    const hideStatuses = ['Hide', 'Unpublished', 'Inactive'];
    const showStatuses = ['Show', 'Active', 'Published'];

    if (hideStatuses.includes(status)) {
      return 'rgb(133, 144, 162)';
    } else if (showStatuses.includes(status)) {
      return 'rgb(112, 186, 43)';
    } else {
      return 'transparent';
    }
  }};
  margin-right: 5px;
`;

export { StatusPoint };
