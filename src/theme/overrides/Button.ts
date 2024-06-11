import { Theme } from '@mui/material/styles';

export default function Button(theme: Theme): Theme['components'] {
  return {
    MuiButton: {
      defaultProps: {
        disabled: true,
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: '#fff',
            boxShadow: 'none',
            borderRadius: '5px',
            '&:hover': {
              boxShadow: 'none',
            },
            '&:disabled': {
              backgroundColor: '#D9D9D9',
              color: '#fff',
            },
          },
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            color: '#fff',
            backgroundColor: theme.palette.primary.dark,
            boxShadow: 'none',
            borderRadius: '5px',
            padding: '8px, 16px, 8px, 16px',
            '&:hover': {
              boxShadow: 'none',
            },
            '&:disabled': {
              backgroundColor: '#D9D9D9',
              color: '#fff',
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            borderRadius: '5px',
            border: `1px solid ${theme.palette.primary.main}`,
            '&:hover': {
              boxShadow: 'none',
            },
            '&:disabled': {
              border: '1px solid #D9D9D9',
              color: '#D9D9D9',
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'secondary' },
          style: {
            borderRadius: '5px',
            '&:disabled': {
              border: '1px solid #D9D9D9',
            },
          },
        },
        {
          props: { variant: 'text' },
          style: {
            color: theme.palette.primary.dark,
            padding: '0',
            fontSize: '12px',
            '&:hover': {
              background: 'rgba(255, 121, 110, 0.04)',
            },
            borderRadius: '5px',
            '&:disabled': {
              color: '#D9D9D9',
            },
          },
        },
        {
          props: { variant: 'text', color: 'secondary' },
          style: {
            borderRadius: '5px',
            '&:disabled': {
              color: '#D9D9D9',
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          height: '32px',
          fontFamily: 'inherit',
          textTransform: 'capitalize',
          padding: '6px 16px 6px 16px',
          ...theme.typography.Components_Button,
        },
        sizeSmall: {
          height: '29px',
          fontSize: '13px',
        },
      },
    },
    MuiIconButton: {},
  };
}
