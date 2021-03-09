import './App.css';
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      markdown: ""
    }
  }

handleChange = (e) => {
  //when text is entered into the editor element
  this.setState({
    markdown: e.target.value //update preview element
    
  })
}



  render() {
    const { markdown } = this.state; //what does this do again?

    return(
    <div>
      <div>Hello</div>
      <h1>markdown previewer</h1>
      <h2>convert your markdown!</h2>
      <textarea
        id="editor"
        value={markdown}
        onChange={this.handleChange}

        //trigger a change event here, and update the state of preview to render
        //what was written in the editor as html

      ></textarea>
      {/* When I enter text into the #editor element, the #preview element
is updated as I type to display the content of the textarea. */}

      {/* When I enter GitHub flavored markdown into the #editor element,
the text is rendered as HTML in the #preview element as I type. */}
      <div
        id="preview"
      >
        {//result of preview
        }


      </div>
    </div>

    )}

}


// ReactDOM.render(<App/>, document.getElementById('app'))

export default App;
