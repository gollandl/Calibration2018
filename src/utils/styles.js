import { StyleSheet } from 'react-native';
import colours from './colours';

export default globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    headerOne: {
      fontFamily: 'BGFlame',
      color: colours.white,
      fontSize: 20,
      textAlign: 'center',
    },
    headerTwo: {
      fontFamily: 'BGFlame',
      color: colours.white,
      fontSize: 14,
      textAlign: 'center',
    },
    mainText: {
      fontFamily: 'BGFlame',
      color: colours.bgSlate,
      fontSize: 20,
      textAlign: 'center',
    },
    Header: {
      height: 100,
      backgroundColor: colours.bgDarkBlue,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 15,
    }
  });