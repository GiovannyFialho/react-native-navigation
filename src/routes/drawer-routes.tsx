import { MaterialIcons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerScreenProps,
} from "@react-navigation/drawer";

import { Home } from "@/app/home";
import { Product } from "@/app/product";

export type DrawerRoutesListProps = {
  home: undefined;
  product: undefined | { id: string };
};

export type DrawerRoutesProps<T extends keyof DrawerRoutesListProps> =
  DrawerScreenProps<DrawerRoutesListProps, T>;

const Drawer = createDrawerNavigator<DrawerRoutesListProps>();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#2c46b1",
        drawerInactiveTintColor: "#444444",
      }}
    >
      <Drawer.Screen
        name="home"
        component={Home}
        options={{
          drawerLabel: "Início",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="product"
        component={Product}
        options={{
          drawerLabel: "Produto",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
