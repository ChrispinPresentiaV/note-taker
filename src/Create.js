import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [date, setStartDate] = useState(Date.now());
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const notes = { title, body, date};

    fetch('http://localhost:8000/notes/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(notes)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Notes title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Notes:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Date:</label>
        <input 
          type="date" 
          required
          value={date} 
          onChange={(e) => setStartDate(e.target.value)} />
        <button>Add Notes</button>
      </form>
    </div>
  );
}
 
export default Create;