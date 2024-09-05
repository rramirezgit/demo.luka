import type { Breakpoint } from '@mui/material';
import type { NavSectionProps } from 'src/components/nav-section';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { varAlpha, hideScrollY } from 'src/theme/styles';

import { Logo } from 'src/components/logo';
import ActionFooter from 'src/components/nav-section/vertical/ActionFooter';
import { NavSectionMini, NavSectionVertical } from 'src/components/nav-section';

// ----------------------------------------------------------------------

export type NavVerticalProps = NavSectionProps & {
  isNavMini: boolean;
  layoutQuery: Breakpoint;
  onToggleNav: () => void;
  slots?: {
    topArea?: React.ReactNode;
    bottomArea?: React.ReactNode;
  };
};

export function NavVertical({
  sx,
  data,
  slots,
  isNavMini,
  layoutQuery,
  onToggleNav,
  ...other
}: NavVerticalProps) {
  const theme = useTheme();

  const renderNavVertical = (
    <>
      {slots?.topArea ?? (
        <Box sx={{ p: '30px 35px 24px 35px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Logo width={83} height={37} />
          </Box>
          <Typography sx={{ fontSize: '16px', color: 'black', mt: '24px', fontWeight: 700 }}>
            Embedded Payment Gateway Solution:
          </Typography>
          {/* <Typography sx={{ fontSize: '16px', color: 'black', mt: '14px' }}>
            Embedded Payment Gateway Solution:
          </Typography> */}

          {/* Nuevo texto agregado aquí */}
          <Typography
            sx={{
              fontSize: '14px',
              color: 'black',
              mt: '16px',
              bgcolor: theme.palette.grey[100],
              p: 2,
              fontWeight: 400,
              borderRadius: '8px',
            }}
          >
            Start accepting all payment methods on your website with a single integration.
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          p: '0px 42px 24px 42px',
          overflowY: 'auto',
          scrollbarWidth: 'thin',
          flex: '1 1 auto',
          scrollbarColor: '#C0C0C0 transparent', // Color del scroll
          '&::-webkit-scrollbar': {
            width: '8px', // Anchura de la barra de desplazamiento
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#C0C0C0', // Color del thumb
            borderRadius: '4px', // Bordes redondeados
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#A0A0A0', // Color del thumb al pasar el ratón
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent', // Color de la pista del scroll
          },
        }}
      >
        <NavSectionVertical data={data} sx={{ flex: '1 1 auto' }} {...other} />
      </Box>
      <ActionFooter buttonColor="#3b82f6" />
    </>
  );

  const renderNavMini = (
    <>
      {slots?.topArea ?? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 2.5 }}>
          <Logo />
        </Box>
      )}

      <NavSectionMini
        data={data}
        sx={{ pb: 2, px: 0.5, ...hideScrollY, flex: '1 1 auto', overflowY: 'auto' }}
        {...other}
      />

      {slots?.bottomArea}
    </>
  );

  return (
    <Box
      sx={{
        top: 0,
        left: 0,
        height: 1,
        display: 'none',
        position: 'fixed',
        flexDirection: 'column',
        bgcolor: 'var(--layout-nav-bg)',
        zIndex: 'var(--layout-nav-zIndex)',
        width: isNavMini ? 'var(--layout-nav-mini-width)' : 'var(--layout-nav-vertical-width)',
        borderRight: `1px solid var(--layout-nav-border-color, ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)})`,
        transition: theme.transitions.create(['width'], {
          easing: 'var(--layout-transition-easing)',
          duration: 'var(--layout-transition-duration)',
        }),
        [theme.breakpoints.up(layoutQuery)]: {
          display: 'flex',
        },
        ...sx,
      }}
    >
      {isNavMini ? renderNavMini : renderNavVertical}
    </Box>
  );
}
