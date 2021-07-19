import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },
  btn: {
    padding: 5,
    margin: 5,
  },
  text: {
    fontSize: 16,
  },
});

const AddRecipe = ({title, addRecipe}) => {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add Recipe..."
        onChangeText={e => {
          setText(e.target.value);
        }}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addRecipe(text)}>
        <Text style={styles.btnText}>
          <Icon name="plus" size="20" /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddRecipe;
