import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <SafeAreaView>
    <Text>Welcome to the Home Screen</Text>
    <Button
      title="Go to Gallery"
      onPress={() => navigation.navigate('Gallery')}
    />
    <Button
      title="Go to List"
      onPress={() => navigation.navigate('List')}
    />
  </SafeAreaView>
);

export default HomeScreen;
