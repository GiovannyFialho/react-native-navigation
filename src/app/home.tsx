import { View } from "react-native";

import { type BottomRoutesProps } from "@/routes/bottom-routes";

import { ButtonIcon } from "@/components/button-icon";
import { Header } from "@/components/header";
import { Title } from "@/components/title";

export function Home({ navigation }: BottomRoutesProps<"home">) {
  return (
    <View
      style={{ flex: 1, padding: 32, paddingTop: 54, backgroundColor: "#fff" }}
    >
      <Header>
        <Title>Home</Title>

        <ButtonIcon
          name="add-circle"
          onPress={() => navigation.navigate("product", { id: "10" })}
        />
      </Header>
    </View>
  );
}
