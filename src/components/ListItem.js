import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './reusable';

class LibraryList extends Component {

  componentWillMount() {

  }

  render() {
    <CardSection>
      <Text>{this.props.libraries.title}</Text>
    </ CardSection>
  }

}


export default LibraryList;
