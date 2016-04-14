'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} = React;

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

var Carousel = require('react-native-carousel');

var CarouselDemo = React.createClass({
  render: function() {
    return (
      <Carousel animate={false} indicatorOffset={50} indicatorColor="#9e9e9e" inactiveIndicatorColor="#fafafa">
        <View>
          <Image style={carousel.item} source={require('./images/background-1.jpg')}>
            <Text style={carousel.text}>Page 1</Text>
          </Image>
        </View>
        <View>
          <Image style={carousel.item} source={require('./images/background-2.jpg')}>
            <Text style={carousel.text}>Page 2</Text>
          </Image>
        </View>
        <View>
          <Image style={carousel.item} source={require('./images/background-3.jpg')}>
            <Text style={carousel.text}>Page 3</Text>
          </Image>
        </View>
      </Carousel>
    );
  }
});

var carousel = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth
  },
  item: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    width: screenWidth
  },
  text : {
    backgroundColor: 'rgba(158,158,158, .6)',
    color: '#fff',
    fontFamily: 'Lato',
    fontSize: 40,
    padding: 60
  }
});

AppRegistry.registerComponent('CarouselDemo', () => CarouselDemo);
