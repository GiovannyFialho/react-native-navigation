import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonIconProps = {
  name: keyof typeof MaterialIcons.glyphMap;
} & TouchableOpacityProps;

export function ButtonIcon({ name, ...rest }: ButtonIconProps) {
  return (
    <TouchableOpacity {...rest}>
      <MaterialIcons name={name} size={24} />
    </TouchableOpacity>
  );
}
