/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert} from 'react-native';
import ScratchView from 'react-native-scratch';
import WheelView from './src/WheelView';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  onImageLoadFinished = ({ id, success }) => {
    // Do something
  }

  onScratchProgressChanged = ({ value, id }) => {
    // Do domething like showing the progress to the user
  }

  onScratchDone = ({ isScratchDone, id }) => {
    // Do something
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  onScratchTouchStateChanged = ({ id, touchState }) => {
    // Example: change a state value to stop a containing
    // FlatList from scrolling while scratching
    this.setState({ scrollEnabled: !touchState });
  }

  render() {
    return (
      <View style={styles.container}>
        <WheelView
          data={[
            { url: 'https://facebook.github.io/react-native/docs/assets/favicon.png', name: 'Larry' },
            { url: 'https://facebook.github.io/react-native/docs/assets/favicon.png', name: 'Harry' },
            { url: 'https://facebook.github.io/react-native/docs/assets/favicon.png', name: 'Varry' },
            { url: 'https://facebook.github.io/react-native/docs/assets/favicon.png', name: 'Jerry' },
          ]}
        />
        <WheelView
          data={[
            { url: 'https://facebook.github.io/react-native/docs/assets/favicon.png', name: 'Larry' },
            { url: 'https://facebook.github.io/react-native/docs/assets/favicon.png', name: 'Harry' },
            { url: 'https://facebook.github.io/react-native/docs/assets/favicon.png', name: 'Harry' },
          ]}
        />
        {/*<ScratchView*/}
          {/*id={1} // ScratchView id (Optional)*/}
          {/*brushSize={32} // Default is 10% of the smallest dimension (width/height)*/}
          {/*threshold={30} // Report full scratch after 70 percentage, change as you see fit. Default is 50*/}
          {/*fadeOut={true} // Disable the fade out animation when scratch is done. Default is true*/}
          {/*placeholderColor="#AAAAAA" // Scratch color while image is loading (or while image not present)*/}
          {/*imageUrl="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_9.jpg" // A url to your image (Optional)*/}
          {/*resourceName="akali" // An image resource name (without the extension like '.png/jpg etc') in the native bundle of the app (drawble for Android, Images.xcassets in iOS) (Optional)*/}
          {/*resizeMode="cover" // Resize the image to fit or fill the scratch view. Default is stretch*/}
          {/*onImageLoadFinished={this.onImageLoadFinished} // Event to indicate that the image has done loading*/}
          {/*onTouchStateChanged={this.onScratchTouchStateChanged} // Touch event (to stop a containing FlatList for example)*/}
          {/*onScratchProgressChanged={this.onScratchProgressChanged} // Scratch progress event while scratching*/}
          {/*onScratchDone={this.onScratchDone} // Scratch is done event*/}
        {/*/>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50,
    margin: 2,
    borderColor: '#0099A8',
    borderWidth: 10,
    backgroundColor: '#FEFEFE'
  },
});
