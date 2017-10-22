import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView} from 'react-native';

export default class Component3 extends Component {
    constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(['First Row', 'Second Row']),
      };
    }
  
    render() {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      );
    }
  }

AppRegistry.registerComponent('Component3', () => Component3);