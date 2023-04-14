import { FC } from 'react';
import { Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {
  Box,
  PackageNestedBox,
  PackageNestedBoxStyled,
  PackageNestedView,
} from 'ui';
import { LocalNested } from './components/LocalNested';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Box className="bg-red-500 p-4">
          <Text>Box</Text>
        </Box>
        <PackageNestedBox className="p-4">
          <Text>Package nested using Box</Text>
        </PackageNestedBox>
        <LocalNested className="p-4">
          <Text>Local nested</Text>
        </LocalNested>
        <PackageNestedView className="p-4">
          <Text>Package nested using View</Text>
        </PackageNestedView>
        <PackageNestedBoxStyled className="p-4">
          <Text>Package nested using Box & styled()</Text>
        </PackageNestedBoxStyled>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
