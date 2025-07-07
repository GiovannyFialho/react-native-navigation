import { MaterialIcons } from "@expo/vector-icons";
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
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
        tabBarActiveTintColor: "#2c46b1",
        tabBarInactiveTintColor: "#444444",
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="product"
        component={Product}
        options={{
          tabBarLabel: "Produto",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
