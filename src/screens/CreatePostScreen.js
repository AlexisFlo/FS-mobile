import { Image, Text, StyleSheet, View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Vadim Savin",
}
export default function CreatePostScreen() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: user.image }} />
          <Text>{user.name}</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})