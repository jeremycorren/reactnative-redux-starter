import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  Surface, 
  Headline
} from 'react-native-paper';

class Detail extends Component {
  render() {
    return (
      <Surface>
        <Headline>Detail</Headline>
      </Surface>
    );
  }
}

Detail = connect()(Detail);

export default Detail;