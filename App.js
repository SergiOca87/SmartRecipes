/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  Alert,
  FlatList,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  // Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from './components/Header';
import Recipe from './components/Recipe';
import AddRecipe from './components/AddRecipe';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainHeader: {
    fontSize: 30,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});

const App = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: 'Salad',
      ingredients: ['wefwfw', 'sdcsdv', 'sdggg'],
    },
    {
      id: 2,
      name: 'Gazpatxo',
      ingredients: ['asd', 'sdcsdv', 'sdggg'],
    },
    {
      id: 3,
      name: 'Pasta',
      ingredients: ['wefsadawfw', 'sdcsdv', 'sdggg'],
    },
    {
      id: 4,
      name: 'Pizza',
      ingredients: ['asc', 'regber', 'qwdwqd'],
    },
  ]);

  // Delete a Recipe from state
  const handleRecipeDelete = id => {
    setRecipes({
      ...recipes.filter(recipe => recipe.id !== id),
    });
  };

  //Add a Recipe to state
  const addRecipe = text => {
    if (text !== '') {
      setRecipes([
        {
          id: recipes.length + 1,
          name: text,
        },
        ...recipes,
      ]);
    } else {
      Alert.alert('Error', 'Please Enter a Recipe', {text: 'Ok'});
    }
  };

  // TODO: Separate Component
  const Item = ({item}) => <Text>{item.name}</Text>;

  const renderItem = ({item}) => {
    return <Item item={item} />;
  };

  return (
    <View style={styles.container}>
      <Header title="Smart Cooking" />
      <AddRecipe addRecipe={addRecipe} />
      <Image
        style={styles.img}
        source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
      />
      <Text style={styles.mainHeader}>Hello World</Text>
      <FlatList
        data={recipes}
        renderItem={({item}) => (
          <Recipe item={item} deleteRecipe={handleRecipeDelete} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default App;
