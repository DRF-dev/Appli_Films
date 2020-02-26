import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FilmList from './FilmList'
import { connect } from 'react-redux'
import Avatar from './Avatar'

class Vues extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.avatar_container}>
          <Avatar/>
        </View>
        <FilmList
          films={this.props.filmVue}
          navigation={this.props.navigation}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  avatar_container: {
    alignItems: 'center'
  }
})

const mapStateToProps = state => {
  return {
    filmVue: state.toggleVue.filmVue
  }
}

export default connect(mapStateToProps)(Vues)