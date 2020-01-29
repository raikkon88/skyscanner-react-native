import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, TextInput, ScrollView, Button } from 'react-native';
import Constants from 'expo-constants';


// export default function App() {

export default class App extends React.Component {

  render() {
    
    
    return (
      <ScrollView>
        <View style={styles.container}>
          <Button title="pressiona"
            onPress={() => alert(10)}></Button>
          <Text style={{ fontSize: 20 }}>Bienvenido</Text>
          <ActivityIndicator size='large' color='#212121'></ActivityIndicator>
          <Image 
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png' }}
            style={ styles.image }></Image>
          <TextInput 
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            value={value}
            ></TextInput>
            <TextInput 
            style={styles.input}
            />
            <TextInput 
            style={styles.input}
            />
            <TextInput 
            style={styles.input}
            />
        </View>
      </ScrollView>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center', 
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 25
  },
  input: { 
    height: 20, 
    width: 300, 
    borderColor: 'grey', 
    borderWidth: 1, 
    marginTop: 100
  }
});

/* 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    backgroundColor: '#ff00ff',
    justifyContent: 'center', 
    paddingTop: Constants.statusBarHeight,
  },
  itemOne: {
    flex: 1,
    backgroundColor: "green"
  },
  itemTwo: {
    flex: 2,
    backgroundColor: "blue"
  },
  itemThree: {
    flex: 3,
    backgroundColor: "black"
  },
  itemFour: {
    flex: 4,
    backgroundColor: "yellow"
  }
});


render() {
  return (
    <View style={styles.container}>
      <View style={styles.itemOne}>
        <Text>Item</Text>
      </View>
      <View style={styles.itemTwo}>
        <Text>Item</Text>
      </View>
      <View style={styles.itemThree}>
        <Text >Item</Text>
      </View>
      <View style={styles.itemFour}>
        <Text>Item</Text>
      </View>
    </View>
  );
} */
