import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = React.useState("hello");
  return (
    <View style={styles.container}>
      <TextInput 
        value={name}
        onChange={name => setName(name)}
        editable
      />
      <Text>{name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
