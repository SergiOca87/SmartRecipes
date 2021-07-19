import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginBottom: 5,
    backgroundColor: 'green',
  },
  itemView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    textTransform: 'uppercase',
  },
});

export default function Recipe({item, deleteRecipe}) {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.itemView}>
        <Text style={styles.text}>{item.name}</Text>
        <Icon
          name="remove"
          size={20}
          color="tomato"
          onPress={() => deleteRecipe(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
}
