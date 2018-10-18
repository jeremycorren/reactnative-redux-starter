import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { 
  Divider,
  Surface, 
  Headline, 
  Subheading,
  IconButton,
  Card,
  Title,
  Paragraph
} from 'react-native-paper';

import AddItem from './AddItem';
import ItemList from './ItemList'

class Master extends Component {
  render() {
    return (
      <Surface style={{ flex: 1, justifyContent: 'flex-start' }}>
        <AddItem navigation={this.props.navigation} />
        <Divider style={{marginBottom: 10}}/>
        <ItemList items={this.props.items} />
      </Surface>
    );
  }
}

const mapStateToProps = (state) => ({ items: state.items });

Master = connect(mapStateToProps)(Master);

export default Master;