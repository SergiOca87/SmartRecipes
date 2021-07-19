import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    // textAlign: 'center',
    margin: 0,
  },
});

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Default Title',
};

export default Header;
