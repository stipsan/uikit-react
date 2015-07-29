import React from 'react';
import Example from 'app/components/example';
import Firebase from 'firebase';

export default class ExamplesPage extends React.Component {

  render() {

    return <div className="tm-middle">
        <div className="uk-container uk-container-center">
          <div className="uk-grid">
            <div className="tm-sidebar uk-width-medium-1-5 uk-hidden-small">
              <ul className="tm-nav uk-nav">

              </ul>
            </div>
            <div className="tm-main uk-width-medium-4-5">
	             <div className="uk-article">
			      <h1 className="uk-article-title">Examples</h1>
			      <p className="uk-article-lead">Here you'll find interesting examples showing how you can build up your interface using UIkit and UIkit for React.</p>
              <Example codeText={`
const firebaseRef = new Firebase('https://uikit-react.firebaseIO.com/comments');
         
class Comment extends React.Component {
  static propTypes = {
    email: React.PropTypes.string,
    author: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  }
  static defaultProps = {avatar: 'images/placeholder_avatar.svg'}
  render() {
    return <article className="uk-comment">
        <header className="uk-comment-header">
            <img className="uk-comment-avatar" src={this.props.avatar} width="50" height="50" alt="" />
            <h4 className="uk-comment-title">{this.props.author}</h4>
            <div className="uk-comment-meta">12 days ago | Profile | #</div>
        </header>
        <div className="uk-comment-body" dangerouslySetInnerHTML={{__html: this.props.text}} />
    </article>;
  }
}
  
class CommentList extends React.Component {
  render() {
    console.log(this.props.comments);
    return <ul className="uk-comment-list">
        {this.props.comments.map(comment => <li key={comment.id}><Comment {...comment} /></li>)}
    </ul>;
  }
}  

class CommentForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    var author = this.refs.author.value.trim();
    var text = this.refs.text.value.trim();
    this.props.onCommentSubmit({author: author, text: text});
    this.refs.text.value = '';
  }
  render() {
    return <form className="uk-form" onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Your name" ref="author" /> &nbsp;
      <input type="text" placeholder="Say something..." ref="text" /> &nbsp;
      <button className="uk-button" type="submit">Post</button>
    </form>;
  }
}
  
class CommentBox extends React.Component {
  state = {comments: []}
  componentWillMount(){
    function _indexForKey(list, key) {
      for (var i = 0, length = list.length; i < length; ++i) {
        if (list[i]['.key'] === key) {
          return i;
        }
      }

      /* istanbul ignore next */
      return -1;
    }
    firebaseRef.orderByPriority().limitToLast(5).on('value', querySnapshot => {
      var array = [];
      
      querySnapshot.forEach(function(snapshot) {
        var key = snapshot.key();
        var value = snapshot.val();
        
        array.push({id: key, ...value});
      });
      this.setState({comments: array});
    });
  }
  handleCommentSubmit(comment) {
    firebaseRef.push(comment);
  }
  render() {
    return <div>
      <CommentList comments={this.state.comments} />
      <CommentForm onCommentSubmit={this.handleCommentSubmit} />
    </div>;
  }
}

ReactDOM.render(<CommentBox/>, mountNode);`} />
			    </div>
            </div>
          </div>
        </div>
      </div>;
  }

}