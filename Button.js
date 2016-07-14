/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  StyleSheet,
  View
} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableHighlight 
        underlayColor="#FFA510"
        style={styles.buttonWrapper} onPress={() => this.props.onPress()}>
        <Text>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'orange',
    margin: 5,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center'
  }
});