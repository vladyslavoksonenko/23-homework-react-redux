import React from 'react';
import {createPost} from '../store/actions'
import { connect } from 'react-redux';

class PostAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      urlImg: "https://",
      authorAddPost: "",
      date: Date.now(),
      like: 0,
      authors: [
      {
        nickname: "@pavel_durov",
        name: "Pavel Durov",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg"
      },
      {
        nickname: "@mark_zuckerberg",
        name: "Mark Zuckerberg",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1280px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
      },
    
    ]
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    const {text, urlImg, authorAddPost} = this.state;

    if (!text.trim()) {
      return;
    }

    const newPost = {
      text, urlImg, authorAddPost, id: Date.now().toString()
    }
    
    this.props.createPost(newPost);
    this.setState({text: "", urlImg: "https://"})
  }

  changeInputHandler = (event) => {
    this.setState(prev => ({ ...prev, 
      ...{[event.target.name]: event.target.value}
    }));
  }

  changeSelectionHandler = (event) => {
    this.setState({authorAddPost: this.state.authors[event.target.value]})
  }

  render() {
    return (
      <div className="post-add">
        <form onSubmit={this.submitHandler} className="post-add__form">
          <input type="text" className="post-add__text-post" placeholder="Text" name="text" value={ this.state.text } onChange={ this.changeInputHandler } />
          <input type="text" className="post-add__image-url" name="urlImg" value={ this.state.urlImg } onChange={ this.changeInputHandler } />
          <select name="authors" className="post-add__select" onChange={ this.changeSelectionHandler }>
            <option value=''>Select</option>
            {this.state.authors.map((author, index) => <option key={author.nickname} value={index}>{author.name}</option>)}
          </select>
          <input className="post-add__button" type="submit" value="Додати" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  createPost
}


export default connect(null, mapDispatchToProps)(PostAdd);