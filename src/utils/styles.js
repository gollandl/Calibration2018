import { StyleSheet } from 'react-native';
import colours from './colours';

export default globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontFamily: 'BGFlame',
      color: colours.bgSlate,
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });