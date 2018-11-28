import React from 'react'
import * as contentful from 'contentful'
class Blog extends React.Component {
  state = {
    posts: []
  }
  client = contentful.createClient({
    space: 'y5l8oypasq55',
    accessToken: '14a4acfbc599a03a898445fed8abc7143f18a2e145d2fd0567aec00a9f188abd'
  })
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    console.log('blkdsoa');
    this.setState({
      posts: response.items
    })
  }
  render() {
    return (
      <div>
        <p>This is the Blog Page</p>
        <br/>
        { this.state.posts.map(({fields}, i) =>
          <pre key={i}>{JSON.stringify(fields, null, 2)}</pre>
        )}
      </div>
    )
  }
}
export default Blog