import { Link } from 'react-router-dom';

const Notes = ({ blogs: notes }) => {
  return (
    <div className="notes-list">
      {notes.map(notes => (
        <div className="notes-preview" key={notes.id} >
          <Link to={`/notes/${notes.id}`}>
            <h2>{ notes.title }</h2>
            <p>Created On: { notes.date }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default Notes;