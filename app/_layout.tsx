import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  return (
        <Stack>
          <Stack.Screen name="index" 
          options={{ headerShown: false }} />
        </Stack>
  );
};


export default RootLayout;