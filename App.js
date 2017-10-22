import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Component2 from './app/component/Component2/Component2';
import Component3 from './app/component/Component3/Component3';

export default class firstapp extends Component{



    render(){
        return(
            <View>
                <Component2/>
                
                <Component3/>
            </View>

        );
    }
}

AppRegistry.registerComponent('firstapp', () => firstapp);