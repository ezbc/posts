

const mindsetQuestions = [
  `In your own words, what does it mean to be curious about something?`,
  `What’s one thing that you were curious to learn more about recently (this doesn’t need to be coding-related)? How did you learn more about it?`,
  `What’s one best practice you’ve learned in your first few weeks at CTD that you don’t know “the why” behind? How can you find out “the why”?`
]

// how can we make this function more concise?
function MindsetQuestions() {
  let answer = '';
  return (
    <div>
      <h1>Mindset Questions</h1>
      <form>
      { 
        mindsetQuestions.map((question) => {
          return (
            // how would we show the answer in a new p tag below the question?
            <div>
              <p>{question}</p>
              <div style={{paddingLeft: "16px"}}>
                <label htmlFor="mindset-response">Answer</label>
                <input
                 id="mindset-response"
                 type="text"
                 onChange={
                   (event) => {
                     answer = event.target.value;
                   }
                 }>
                 </input>
                 <p>Subitted answer: {answer}</p>
              </div>
            </div>
          )
        }) 
      }
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default MindsetQuestions;
