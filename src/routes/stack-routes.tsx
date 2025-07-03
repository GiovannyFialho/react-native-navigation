import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import { Home } from "@/app/home";
import { Product } from "@/app/product";

export type StackRoutesListProps = {
  home: undefined;
  product: undefined;
};

export type StackRoutesProps<T extends keyof StackRoutesListProps> =
  NativeStackScreenProps<StackRoutesListProps, T>;

const Stack = createNativeStackNavigator<StackRoutesListProps>();

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="product" component={Product} />
    </Stack.Navigator>
  );
}
