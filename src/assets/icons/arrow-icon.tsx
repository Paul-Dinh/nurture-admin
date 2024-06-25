import { SvgIcon, SvgIconProps } from '@mui/material';

const ArrowIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      role='img'
      viewBox='0 0 15 15'
      sx={{
        width: 15,
        height: 15,
        overflow: 'hidden',
      }}
      fill='none'
      {...props}
    >
      <path
        d='M7.64231 1.90736C7.79322 1.71708 8.08885 1.71708 8.23975 1.90736L11.3915 5.88141C11.5823 6.12203 11.4056 6.47053 11.0928 6.47053L4.78929 6.47053C4.47646 6.47053 4.29975 6.12203 4.49057 5.88141L7.64231 1.90736Z'
        fill='#808080'
      />
      <path
        d='M7.64231 12.7985C7.79322 12.9888 8.08885 12.9888 8.23975 12.7985L11.3915 8.82447C11.5823 8.58386 11.4056 8.23535 11.0928 8.23535L4.78929 8.23535C4.47646 8.23535 4.29975 8.58386 4.49057 8.82447L7.64231 12.7985Z'
        fill='#808080'
      />
    </SvgIcon>
  );
};
export default ArrowIcon;
