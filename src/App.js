import React,{useState} from 'react';
import './App.css';
import { marked } from 'marked'
function App() {
 
  const [text, setText] = useState("`Prévisualisateur - First Project`\n### Oh ! Mon tout premier projet avec React !\nEn réalité : ceci s\'appelle du markdown, et ce projet réalisé entièrement avec React permet de le transformer en *HTML* !\n\n### Cas d\'utilisation\n* *italique*\n* **gras**\n* `monospace`\n* ~~barré~~\n* # h1\n* ## h2\n* ### h3\n* #### etc\n Le projet a était réalisé à la suite dans le cadre d'une Formation sur [Believemy](https://believemy.com)'"); 

  // Fonctions

  const changeTextHandler = event => { 
   let nouveauText = event.target.value;
    setText(nouveauText)
    console.log(marked(text))
  }
  
  const mardownToHtml = () => { 
    return {__html: marked(text)}
 }

  return (
    <div className="App">
      <div className='elements'>
        <div className='element'>
          <textarea
            rows="30"
            value={text}
            onChange={(e) => changeTextHandler(e)}>
          </textarea>
        </div>
        <div className='element'>
          <div dangerouslySetInnerHTML={mardownToHtml()}>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
