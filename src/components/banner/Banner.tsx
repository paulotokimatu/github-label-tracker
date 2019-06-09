import React from 'react';
import {
  Button,
  Container,
  Header,
  Segment,
} from 'semantic-ui-react';

const Banner: React.FC<any> = () => {
  return (
    <Segment inverted
      textAlign='center'
      style={{ minHeight: 80 }}
      vertical
    >
      <Container text>
        <Header
          as='h2'
          content='Do whatever you want when you want to.'
          inverted
          style={{
            fontSize: '1.7em',
            fontWeight: 'normal',
            marginTop: '2.5em',
          }}
        />
        <Button primary size='huge'
            style={{
              position: 'relative',
              top: 40,
              zIndex: 100,
            }}
          >
            Search
          </Button>
      </Container>
    </Segment>
  );
};

export default Banner;
