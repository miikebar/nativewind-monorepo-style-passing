import { PropsWithChildren, forwardRef } from 'react';
import { View } from 'react-native';

export interface BoxProps {
  className?: string;
}

export const Box = forwardRef<View, PropsWithChildren<BoxProps>>(
  (props, ref) => {
    return <View ref={ref} {...props} />;
  }
);

Box.displayName = 'Box';
