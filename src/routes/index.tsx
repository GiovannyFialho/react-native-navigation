import { NavigationContainer } from "@react-navigation/native";

// import { StackRoutes } from "@/routes/stack-routes";
import { BottomRoutes } from "@/routes/bottom-routes";

export function Routes() {
  return (
    <NavigationContainer>
      {/* <StackRoutes /> */}
      <BottomRoutes />
    </NavigationContainer>
  );
}
