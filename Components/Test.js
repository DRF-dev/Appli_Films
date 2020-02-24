// Components/Test.js

/*import React from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import HelloWorld from './HelloWorld'

class Test extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.subview_container}>
        </View>
        <View style={styles.main_container}>
        <HelloWorld/>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subview_container: {
    backgroundColor: Platform.OS === 'ios' ? 'red' : 'blue',
    height: Platform.OS === 'ios' ? 100 : 50,
    width: Platform.OS === 'ios' ? 50 : 100
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
        height: 100,
        width: 50
      },
      android: {
        backgroundColor: 'blue',
        height: 50,
        width: 100
      }
    })
  }
})

export default Test*/

// Components/Test.js

/*import React from 'react'
import { StyleSheet, View, Animated, Easing } from 'react-native'

class Test extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      topPosition: new Animated.Value(0)
    }
  }

  Effet lineaire
  componentDidMount() {
    Animated.timing(
      this.state.topPosition,
      {
        toValue: 100,
        duration: 3000, // Le temps est en milliseconds ici (3000ms = 3sec)
        easing: Easing.linear,
      }
    ).start() // N'oubliez pas de lancer votre animation avec la fonction start()
  }

  Effet Elastique
  componentDidMount() {
    Animated.spring(
      this.state.topPosition,
      {
        toValue: 100,
        speed: 4,
        bounciness: 30
      }
    ).start();
  }

  Plus vite au début qu'a la fin
  componentDidMount() {
    Animated.decay(
      this.state.topPosition,
      {
        velocity: 0.8,
        deceleration: 0.997,
      }
    ).start();
  }

  //Combinaison d'animation
  componentDidMount() {
    Animated.sequence([
      Animated.spring(
        this.state.topPosition,
        {
          toValue: 100,
          tension: 8,
          friction: 3
        }
      ),
      Animated.timing(
        this.state.topPosition,
        {
          toValue: 0,
          duration: 1000,
          easing: Easing.elastic(2)
        }
      )
    ]).start()
  }

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.main_container}>
          <Animated.View style={[styles.animation_view, { top: this.state.topPosition }]}>
          </Animated.View>
       </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animation_view: {
    backgroundColor: 'red',
    width: 100,
    height: 100
  }
})

export default Test*/

// Components/Test.js

/*import React from 'react'
import { StyleSheet, View, Animated, Easing } from 'react-native'

class Test extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      topPosition: new Animated.Value(0),
      leftPosition: new Animated.Value(0),
    }
  }

  componentDidMount() {
    Animated.parallel([
      Animated.spring(
        this.state.topPosition,
        {
          toValue: 100,
          tension: 8,
          friction: 3
        }
      ),
      Animated.timing(
        this.state.leftPosition,
        {
          toValue: 100,
          duration: 1000,
          easing: Easing.elastic(2)
        }
      )
    ]).start()
  }

  render() {
    return (
      <View style={styles.main_container}>
        <Animated.View style={[styles.animation_view, { top: this.state.topPosition, left: this.state.leftPosition }]}></Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animation_view: {
    backgroundColor: 'red',
    width: 100,
    height: 100
  }
})

export default Test*/
import React from 'react'
import { StyleSheet, View, Animated, Easing, PanResponder, Dimensions } from 'react-native'

class Test extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      topPosition: 0,
      leftPosition: 0,
    }
    
    var {height, width} = Dimensions.get('window');
    this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onPanResponderMove: (evt, gestureState) => {
            let touches = evt.nativeEvent.touches;
            if (touches.length == 1) {
                this.setState({
                  topPosition: touches[0].pageY - height/2,
                  leftPosition: touches[0].pageX - width/2
                })
            }
        }
    })
  }

  render() {
    return (
      <View style={styles.main_container}>
        <View
          {...this.panResponder.panHandlers}
          style={[styles.animation_view, { top: this.state.topPosition, left: this.state.leftPosition }]}>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animation_view: {
    backgroundColor: 'red',
    width: 100,
    height: 100
  }
})

export default Test