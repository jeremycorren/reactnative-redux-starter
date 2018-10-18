import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Surface, FAB } from 'react-native-paper';

import styles from '../styles/styles';

class AddItem extends Component {
  render() {
    return (
      <Surface style={{
        alignItems: 'center',
        margin: 50
      }}>
        <FAB 
          icon='add' 
          onPress={() => this.props.dispatch({
            type: 'ADD_ITEM',
          })}
        />
      </Surface>
    );
  }
}

AddItem = connect()(AddItem);

export default AddItem;