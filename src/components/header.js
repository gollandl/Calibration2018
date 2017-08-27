import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import globalStyles from '../utils/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { navigateToRoute } from '../navigation/actions';
import { routes } from '../navigation/constants';

const HeaderTitle = () => 
<View>
    <Text style={globalStyles.headerOne}>Lydia Golland: Mobile App Team</Text>
    <Text style={globalStyles.headerTwo}>Graduate Calibration Jan 2018</Text>
</View>

const HamburgerIcon = () => 
<TouchableOpacity>
        <Icon name='bars' size={22} color='#fff'/>
</TouchableOpacity>

const HomeIcon = () => 
<TouchableOpacity>
        <Icon name='home' size={22} color='#fff'/>
</TouchableOpacity>

const BackIcon = ({navigation}) => 
<TouchableOpacity onPress={() => navigation.dispatch(navigateToRoute(routes.MAINONE))}>
        <Icon name='angle-left' size={22} color='#fff'/>
</TouchableOpacity>

export default class Header extends Component {
    render() {
        const { navigation } = this.props;
        return(
            <View style={globalStyles.header}>
                <View style={globalStyles.headerLeft}>
                    <BackIcon navigation={navigation} />
                    <View style={{ width: 20 }}/>
                    <HamburgerIcon />
                </View>
                <HeaderTitle />
                <HomeIcon />
            </View>
        );
    }
}






