import { PropsWithChildren, forwardRef } from 'react';
import { View } from 'react-native';

interface PackageNestedViewProps {
  className?: string;
}

export const PackageNestedView = forwardRef<
  View,
  PropsWithChildren<PackageNestedViewProps>
>((props, ref) => {
  return <View ref={ref} className="bg-orange-500" {...props} />;
});

PackageNestedView.displayName = 'PackageNestedView';
