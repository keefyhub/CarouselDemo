'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Component,
  Dimensions,
  Image,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} = React;

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

var Carousel = require('react-native-carousel');
var CarouselPage = require('./CarouselPage');

var navigator = React.StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});

class CarouselDemo extends Component {
  render() {
    return (
      <NavigatorIOS
        style={navigator.container}
        initialRoute={{
          title: 'Carousel Demo',
          component: CarouselPage,
        }}
      />
    );
  }
}

AppRegistry.registerComponent('CarouselDemo', () => CarouselDemo);
