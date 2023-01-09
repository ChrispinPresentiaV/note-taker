import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const DetailsNote = () => {
  const { id } = useParams();
  const { data: notes, error, isPending } = useFetch('http://localhost:8000/notes/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/notes/' + notes.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="notes-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { notes && (
        <article>
          <h2>{ notes.title }</h2>
          <p>Created on  -  { notes.date }</p>
          <div>{ notes.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default DetailsNote;