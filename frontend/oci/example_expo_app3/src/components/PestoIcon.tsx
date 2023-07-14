import * as React from 'react';
import { Image } from 'react-native';

export interface PestoIconProps {
  size?: number;
  color?: string;
  direction?: string;
}
function PestoIcon({ size, color, direction }: PestoIconProps) {
  return (
    <Image
    source={require('../PestoLogo/assets/pesto.icon.svg')}
    style={[
      {
        transform: [{ scaleX: direction === 'rtl' ? -1 : 1 }],
      },
      {
        width: size,
        height: size,
        tintColor: color
      }
    ]}
  />
  );
}

export default PestoIcon
