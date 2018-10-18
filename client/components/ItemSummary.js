import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput } from 'react-native';
import { 
  Surface, 
  Card, 
  Title, 
  Paragraph,
  IconButton
} from 'react-native-paper';

class ItemSummary extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.item.name }
  }

  render() {
    return (
      <Surface style={{margin: 5}}>
        <Card style={{
          elevation: 4
        }}>
          <Card.Content>
            <TextInput
              style={{
                fontSize: 18,
                fontFamily: 'Helvetica',
                marginBottom: 5
              }}
              autoFocus
              value={this.props.item.name}
              onChange={(name) => this.setState({ name: name.nativeEvent.text })}
              onEndEditing={() => this.props.dispatch({
                type: 'EDIT_ITEM_NAME',
                id: this.props.item.id,
                name: this.state.name
              })}
            />
          </Card.Content>
          <Card.Content>
            <Paragraph>{this.props.item.createTimestamp}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <IconButton 
              icon='delete' 
              onPress={() => this.props.dispatch({
                type: 'REMOVE_ITEM',
                id: this.props.item.id
              })}
            />
          </Card.Actions>
        </Card>
      </Surface>
    );
  }
}

ItemSummary = connect()(ItemSummary);

export default ItemSummary;