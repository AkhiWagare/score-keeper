export const Form = ({hit, slicedCommentary, handleSubmit}) => (
    <form onSubmit={handleSubmit}>
      <input type="text" readOnly value={hit} /> &nbsp;
      <input type="text" readOnly value={slicedCommentary} /> <br /> <br />
      <button>Submit</button>
    </form>
)