import React from 'react';
import { SafeAreaView, ScrollView, Image, Text } from 'react-native';

const GalleryScreen = () => (
  <SafeAreaView>
    <ScrollView>
      <Text>Gallery Screen</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={{ width: 150, height: 150 }}
      />
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={{ width: 150, height: 150 }}
      />
    </ScrollView>
  </SafeAreaView>
);

export default GalleryScreen;
