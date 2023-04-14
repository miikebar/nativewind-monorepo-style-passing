import { PropsWithChildren, forwardRef } from 'react';
import { View } from 'react-native';
import { Box } from 'ui';

interface LocalNestedProps {
  className?: string;
}

export const LocalNested = forwardRef<
  View,
  PropsWithChildren<LocalNestedProps>
>((props, ref) => {
  return <Box ref={ref} className="bg-blue-500" {...props} />;
});

LocalNested.displayName = 'LocalNested';
