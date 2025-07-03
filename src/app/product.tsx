import { View } from "react-native";

import { type StackRoutesProps } from "@/routes/stack-routes";

import { ButtonIcon } from "@/components/button-icon";
import { Header } from "@/components/header";
import { Title } from "@/components/title";

export function Product({ navigation }: StackRoutesProps<"product">) {
  return (
    <View
      style={{ flex: 1, padding: 32, paddingTop: 54, backgroundColor: "#fff" }}
    >
      <Header>
        <ButtonIcon
          name="arrow-circle-left"
          onPress={() => navigation.goBack()}
        />

        <Title>Product</Title>
      </Header>
    </View>
  );
}
