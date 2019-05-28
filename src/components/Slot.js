import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './../styles';

export default class Slot extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.slot}>
        <Image
          style={styles.slotImg}
          source={{uri: this.props.url}}
        />
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}
