import React, {useState} from 'react';
import MindsetQuestions from './MindsetQuestions';
import Answer from './Answer';

/* Lesson 1-3 learning objectives

Understand how to handle changes the user is making to input fields on your site
Understand how object data can be passed between components
Understand how state allows data to be altered/page content to be updated over time
Understand how callback handlers are used to share data up the component tree

References
- javascript events: https://developer.mozilla.org/en-US/docs/Web/Events
- prevent default usage: 


*/


/* Topics covered in lesson

1. handle changes from input 
2. pass data between components: props
3. handle changes over time
4. use callback handlers to share data up the tree

*/

function App() {
  const [answers, setAnswers] = useState('')
  return (
    <div>
      <Answer onSubmit={
        function(event)  {
          setAnswers(answers + ', ' + event.target.title.value);
          event.preventDefault();
        }
      }
      
        onRender={()=> console.log('answer rendered')}
      />
      <p>{answers}</p>
    </div>
  );
}


export default App;
