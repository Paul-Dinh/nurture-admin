import { ReactNode } from 'react';

import { Box, Stack } from '@mui/material';
import InfoBar from '../../../components/InfoBar/InfoBar';
import SearchBar from '../../../components/SearchBar/SearchBar';
import { StatusPoint } from '../../../components/StatusPoint/StatusPoint';

interface GeneralComponentProps {
  name: string;
  note?: string;
  children: ReactNode;
}
function GeneralComponent({ name, note, children }: GeneralComponentProps) {
  return (
    <Box>
      <Stack
        direction={'row'}
        gap={2}
        alignItems={'center'}
      >
        <h2>Component</h2>
        <span className='tag'>{name}</span>
        <span>{note ? note : ''}</span>
      </Stack>
      <Stack
        direction='row'
        alignItems='center'
      >
        {children}
      </Stack>
    </Box>
  );
}

const DraftComponents = () => {
  return (
    <div className='draft-page draft-palette'>
      <h2>App Components</h2>
      <Stack
        gap={2}
        sx={{ width: '100%', paddingBottom: '80px' }}
      >
        <GeneralComponent name='Info Bar'>
          <InfoBar />
        </GeneralComponent>
        <GeneralComponent name='Search Bar'>
          <SearchBar />
        </GeneralComponent>
        <GeneralComponent name='Status Point'>
          <StatusPoint status='Active' />
          <StatusPoint status='Published' />
          <StatusPoint status='Show' />
        </GeneralComponent>
        {/* End */}
      </Stack>
    </div>
  );
};

export default DraftComponents;
