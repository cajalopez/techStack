import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { CardSection } from './reusable';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {

  componentWillUpdate(){
    LayoutAnimation.spring();
  }

  renderDescription() {
    if (this.props.expanded) {
      return (
        <CardSection>
          <Text>{this.props.library.description}</Text>
        </CardSection>
      );
    }
  }

  componentWillMount() {

  }

  render() {
    const { textStyle } = styles;
    const { id, title } = this.props.library;
    return (
        <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
          <View>
            <CardSection>
              <Text style={textStyle}>
                {title}
              </Text>
            </CardSection>
            {this.renderDescription()}
          </View>
        </TouchableWithoutFeedback>

    );
  }

}

const styles = {
  textStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps,actions)(ListItem);
