import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import marked from 'marked';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ""
    }
  }

handleChange = (event) => {
  //when text is entered into the editor element
  this.setState({
    text: event.target.value //update preview element
    
  })
}



  render() {
    const { text } = this.state; //what does this do again?

    const markdown = marked(text);
    return(
    <div>
      <h1 className="text-center mt-4">Convert Your Markdown!</h1>
      <div className="row">
        <div className="col-6">
          <h5 className="text-center">Enter your markdown here:</h5>

      <textarea
        className="form-control"
        id="editor"
        value={text}
        onChange={this.handleChange}
      />
      </div>

      <div
        id="preview"
        className="col-6"
      >
        <h5 className="text-center">See the result:</h5>
        <div className="preview rounded">
        <p> dfsdfsdfsf </p>
        </div>
      </div>
    </div>
    </div>


    )}

}

ReactDOM.render(<App/>, document.getElementById('app'));
export default App;
