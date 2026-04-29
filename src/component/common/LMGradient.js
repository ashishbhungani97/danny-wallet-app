import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  primaryGradientColors,
  primaryGradientEndPoint,
  primaryGradientStartPoint,
} from './LMStyle';

export default function LMGradient({...rest}) {
  const {children, colors, start, end, style} = {...rest};
  return (
    <LinearGradient
      {...rest}
      colors={colors || primaryGradientColors}
      start={start || primaryGradientStartPoint}
      end={end || primaryGradientEndPoint}
      style={style}>
      {children}
    </LinearGradient>
  );
}
