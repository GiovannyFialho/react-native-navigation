import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { Home } from "@/app/home";
import { Product } from "@/app/product";

export type BottomRoutesListProps = {
  home: undefined;
  product: undefined | { id: string };
};

export type BottomRoutesProps<T extends keyof BottomRoutesListProps> =
  BottomTabScreenProps<BottomRoutesListProps, T>;

const Tab = createBottomTabNavigator<BottomRoutesListProps>();

export function BottomRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="product" component={Product} />
    </Tab.Navigator>
  );
}
