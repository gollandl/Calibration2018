import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import globalStyles from '../utils/styles';

const CentricaLogo = require('../../assets/images/Centrica-Logo.png');

export default class Header extends Component {
    render() {
        return(
            <View style={globalStyles.Header}>
                <Text style={globalStyles.headerOne}>Lydia Golland: Mobile App Team</Text>
                <Text style={globalStyles.headerTwo}>Graduate Calibration Jan 2018</Text>
            </View>
        );
    }
}
