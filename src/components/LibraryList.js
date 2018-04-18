import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

  componentWillMount(){

    const dataSourceBindingFunction = new ListView.dataSource({
        rowHasChanged: (r1,r2) = > r1 !== r2
      });

    this.dataSource = dataSourceBindingFunction.cloneWithRows(this.props.libraries);
  }

  renderRowFunction(){

  }


  render() {
    return (
      <ListView
        dataSource={this.dataSource}
      />
    );
  }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
