import { StyleSheet, Dimensions } from 'react-native';
import colours from './colours';

let { width } = Dimensions.get('window');
let { height } = Dimensions.get('window');

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
      fontSize: 16,
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
    header: {
      width: width,
      paddingTop: 20,
      paddingLeft: 15,
      paddingRight: 15,
      backgroundColor: colours.bgDarkBlue,
      height: 80,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerLeft: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });