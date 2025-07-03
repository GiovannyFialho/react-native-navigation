import { View } from "react-native";

import { type StackRoutesListProps } from "@/routes/stack-routes";

import { ButtonIcon } from "@/components/button-icon";
import { Header } from "@/components/header";
import { Title } from "@/components/title";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type HomeProps = NativeStackScreenProps<StackRoutesListProps, "home">;

export function Home({ navigation }: HomeProps) {
  return (
    <View
      style={{ flex: 1, padding: 32, paddingTop: 54, backgroundColor: "#fff" }}
    >
      <Header>
        <Title>Home</Title>

        <ButtonIcon
          name="add-circle"
          onPress={() => navigation.navigate("product")}
        />
      </Header>
    </View>
  );
}
