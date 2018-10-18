import React from 'react';
import { FlatList } from 'react-native';
import { Surface, Subheading } from 'react-native-paper'; 

import ItemSummary from './ItemSummary';

const ItemList = ({ items }) => {
  if (items.length > 0) {
    return (
      <FlatList
        data={items}
        keyExtractor={(item, idx) => item.id.toString()}
        renderItem={({ item }) => <ItemSummary item={item} />}
      />
    );
  }
  return (
    <Surface style={{
      marginTop: 20,
      alignItems: 'center'
    }}>
      <Subheading>Add a new item.</Subheading>
    </Surface>
  );
};

export default ItemList;