# React Native Navigation ⚛️

This is a **React Native** project demonstrating how to use the three main navigators from the **React Navigation** library:

- **Stack Navigator**
- **Bottom Tab Navigator**
- **Drawer Navigator**

## 📋 Overview

The project showcases examples of:

- Implementing each navigator
- Defining and typing the navigation routes using TypeScript
- Customizing navigators (such as headers, icons, and styles)
- Passing parameters between screens with type safety

## 📂 Structure

```
src/
│
├── navigation/
│   ├── StackNavigator.tsx
│   ├── TabNavigator.tsx
│   └── DrawerNavigator.tsx
│
├── screens/
│   ├── HomeScreen.tsx
│   ├── DetailsScreen.tsx
│   ├── ProfileScreen.tsx
│   └── SettingsScreen.tsx
│
└── types/
    └── navigationTypes.ts
```

## 🚀 Features

- Navigation with type safety using TypeScript
- Deep linking between navigators
- Custom screen transitions and header configurations
- Easy-to-follow examples for beginners and intermediate users

## 📦 Dependencies

- `react-native`
- `@react-navigation/native`
- `@react-navigation/stack`
- `@react-navigation/bottom-tabs`
- `@react-navigation/drawer`
- `react-native-gesture-handler`
- `react-native-reanimated`
- `react-native-screens`
- `react-native-safe-area-context`

## 📖 Getting Started

1. Clone this repository:

```bash
git clone https://github.com/your-username/react-native-navigation-demo.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the project:

```bash
npx expo start
```

## 📝 Notes

- This project uses **Expo** for easier setup and testing.
- All navigators are fully typed for better scalability and maintainability.

## 📄 License

This project is licensed under the MIT License.
