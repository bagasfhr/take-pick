import * as React from 'react';
import {StyleSheet, View, ScrollView, Dimensions, Image} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AUTO_SWIPE_INTERVAL = 3000;

class BannerCarousel extends React.Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
    this.scrollRef = React.createRef();
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState(
        (prev) => ({
          selectedIndex:
            prev.selectedIndex === this.props.images.length - 1
              ? 0
              : prev.selectedIndex + 1,
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            x: windowWidth * this.state.selectedIndex,
            y: 0,
          });
        },
      );
    }, AUTO_SWIPE_INTERVAL);
  };

  nextImage = () =>
    this.setState((prev) => ({
      selectedIndex:
        prev.selectedIndex === this.props.images.length - 1
          ? 0
          : prev.selectedIndex + 1,
    }));

  setSelectedIndex = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    const selectedIndex = math.floor(contentOffset.x / viewSize.width);
    this.setState({selectedIndex});
  };

  render() {
    const {images} = this.props;
    const {selectedIndex} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}>
          {images.map((image) => (
            <Image
              style={styles.backgroundImage}
              // source={require( Banner1, Banner2, Banner3)}
              source={{uri: image}}
              key={image}
            />
          ))}
        </ScrollView>
        <View style={styles.circleDiv}>
          {images.map((image, i) => (
            <View
              style={[
                styles.whiteCircle,
                {opacity: 1 === selectedIndex ? 0.5 : 1},
              ]}
              key={image}
              active={i === selectedIndex}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: windowHeight * 0.3,
    backgroundColor: '#FEFEFE',
    justifyContent: 'flex-start',
  },
  backgroundImage: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  circleDiv: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 10,
    height: 10,
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: '#fff',
  },
});

export default BannerCarousel;
