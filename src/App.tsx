import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Dropdown,
  Grid,
  Header,
  Menu,
  Segment,
} from 'semantic-ui-react';

import './App.css';
import RepoSection from './components/repoSection/RepoSection';
import TagSection from './components/tagSection/TagSection';
import { repoActions, tagActions } from './redux/actions';

const mapStateToProps = (state: any) => {
  return {
    repos: state.repoReducer,
    tags: state.tagReducer,
  };
};

const App: React.FC<any> = ({ repos, tags, addRepo, addTag }) => {
  return (
    <div className='App'>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            Project Name
        </Menu.Item>
          <Menu.Item as='a'>Home</Menu.Item>

          <Dropdown item simple text='Dropdown'>
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
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
          {/* <Button primary size='huge'
            style={{
              position: 'relative',
              top: 40,
              zIndex: 100,
            }}
            onClick={() => fetchIssues()}
          >
            Search
          </Button> */}
        </Container>
      </Segment>
      <Container style={{ padding: 16, paddingTop: 64 }}>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <RepoSection onClick={addRepo} repos={repos} />
            </Grid.Column>
            <Grid.Column>
              <TagSection onClick={addTag} tags={tags} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default connect(mapStateToProps, {
  addRepo: repoActions.addRepo,
  addTag: tagActions.addtag,
})(App);
