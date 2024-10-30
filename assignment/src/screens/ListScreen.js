import React from 'react';
import { SafeAreaView, FlatList, Pressable, Text } from 'react-native';

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

const ListScreen = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => alert(item.title)}>
            <Text style={{ padding: 10, fontSize: 18 }}>{item.title}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};

export default ListScreen;
