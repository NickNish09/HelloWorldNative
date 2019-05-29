import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import Slot from "./components/Slot";

export default class WheelView extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
  }
  render() {
    return (
      <View style={styles.cardBackground}>
        <View style={styles.cardRow}>
          {this.props.data.map((data, index) => {
            return(
              <Slot key={index} name={data.name} url={data.url}/>
            )
          })}
        </View>
        <View style={styles.cardRow}>
          {this.props.data.map((data, index) => {
            return(
              <Slot key={index} name={data.name} url={data.url}/>
            )
          })}
        </View>
        <View style={styles.cardRow}>
          {this.props.data.map((data, index) => {
            return(
              <Slot key={index} name={data.name} url={data.url}/>
            )
          })}
        </View>
        <View style={styles.cardRow}>
          {this.props.data.map((data, index) => {
            return(
              <Slot key={index} name={data.name} url={data.url}/>
            )
          })}
        </View>

      </View>
    );
  }
}
