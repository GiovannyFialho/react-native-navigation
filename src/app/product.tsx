import { View } from "react-native";

import { type DrawerRoutesProps } from "@/routes/drawer-routes";

import { ButtonIcon } from "@/components/button-icon";
import { Header } from "@/components/header";
import { Title } from "@/components/title";

export function Product({ navigation, route }: DrawerRoutesProps<"product">) {
  return (
    <View
      style={{ flex: 1, padding: 32, paddingTop: 54, backgroundColor: "#fff" }}
    >
      <Header>
        <ButtonIcon
          name="arrow-circle-left"
          onPress={() => navigation.goBack()}
        />

        <Title>Product {route.params?.id}</Title>

        <ButtonIcon
          name="menu"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </Header>
    </View>
  );
}
