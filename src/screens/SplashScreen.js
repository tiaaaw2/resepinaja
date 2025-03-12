import React, { Component } from 'react'
import {View, Text, Image, TextInput} from 'react-native';


class SplashScreen extends Component {
    constructor(props) {
        super(props)
        this.state = { };
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>ini splashscreen</Text>
            </View>
        )
    }

}