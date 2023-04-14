import { PropsWithChildren, forwardRef } from 'react';
import { Box } from '../box';
import { View } from 'react-native';

interface PackageNestedBoxProps {
  className?: string;
}

export const PackageNestedBox = forwardRef<
  View,
  PropsWithChildren<PackageNestedBoxProps>
>((props, ref) => {
  return <Box ref={ref} className="bg-green-500" {...props} />;
});

PackageNestedBox.displayName = 'PackageNestedBox';
