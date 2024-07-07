import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-2xl">Welcome to my App</Text>
      <StatusBar style="auto" />
      <Link href="/home" className="text-blue-200">
        Go to Home
      </Link>
    </View>
  );
}
