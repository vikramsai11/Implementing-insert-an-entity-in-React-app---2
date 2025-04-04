import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [synopsis, setSynopsis] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Movie added!');
    };

    return (
        <div>
            <h2>Add a New Movie</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="text" placeholder="Director" value={director} onChange={(e) => setDirector(e.target.value)} required />
                <select value={genre} onChange={(e) => setGenre(e.target.value)} required>
                    <option value="">Select Genre</option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Horror">Horror</option>
                </select>
                <input type="number" placeholder="Release Year" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} required />
                <textarea placeholder="Synopsis" value={synopsis} onChange={(e) => setSynopsis(e.target.value)} required></textarea>
                <input type="url" placeholder="Poster Image URL" value={posterUrl} onChange={(e) => setPosterUrl(e.target.value)} required />
                <button type="submit">Submit</button>
                <button type="button" onClick={() => navigate('/')}>Cancel</button>
            </form>
        </div>
    );
};

export default AddMovie;