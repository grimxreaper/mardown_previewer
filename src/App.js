import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    state = {
      edit: true
    }
  }

handleChange = () => {
  //when text is entered into the editor element
  this.setState(() => ({
    edit: !state.edit //update preview element
    
  }))
}



  render() {
    <div>
      <textarea
        id="editor"

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

;
      </div>
    </div>
  }
}




export default App;
