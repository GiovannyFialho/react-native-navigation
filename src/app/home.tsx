import { View } from "react-native";

import { type DrawerRoutesProps } from "@/routes/drawer-routes";

import { ButtonIcon } from "@/components/button-icon";
import { Header } from "@/components/header";
import { Title } from "@/components/title";

export function Home({ navigation }: DrawerRoutesProps<"home">) {
  return (
    <View
      style={{ flex: 1, padding: 32, paddingTop: 54, backgroundColor: "#fff" }}
    >
      <Header>
        <ButtonIcon
          name="add-circle"
          onPress={() => navigation.navigate("product", { id: "10" })}
        />

        <Title>Home</Title>

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
