import { NavigationContainer } from "@react-navigation/native";

// import { StackRoutes } from "@/routes/stack-routes";
// import { BottomRoutes } from "@/routes/bottom-routes";
import { DrawerRoutes } from "@/routes/drawer-routes";

export function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}
