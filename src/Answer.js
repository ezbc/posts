const Answer = ({onSubmit, onRender}) => {

    onRender()

    return <div>

      <form onSubmit={onSubmit}>
        <label htmlFor="mindset-response">Answer</label>
        <input
        name="title"
        id="mindset-response"
        type="text">
        </input>
      <button type="submit">Submit</button>
      </form>
    </div>
}

export default Answer