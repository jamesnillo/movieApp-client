import { useState, useEffect, useContext } from 'react';
import UserContext from '../UserContext';
import MovieCard from '../components/MoviesCard';

export default function Movies() {
    const { user } = useContext(UserContext);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const fetchData = () => {
        fetch('https://movieapp-api-lms1.onrender.com/movies/getMovies', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setMovies(data.movies || []);
        });
    };

    useEffect(() => {
        fetchData();
    }, [user]);

    const handleDetailsClick = (movie) => {
        setSelectedMovie(movie);
    };

    return (
        <div className="container mt-4">
            <h2>Explore Movies and TV Shows</h2>

            {selectedMovie && (
                <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            {selectedMovie.image && (
                                <div className="text-center">
                                    <img 
                                        src={selectedMovie.image} 
                                        className="img-fluid rounded-top" 
                                        alt={`${selectedMovie.title} Poster`} 
                                        style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                                    />
                                </div>
                            )}
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedMovie.title}</h5>
                                <button 
                                    type="button" 
                                    className="btn-close" 
                                    onClick={() => setSelectedMovie(null)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img 
                                        src="https://img.freepik.com/free-vector/cinema-background-illustration_1284-6960.jpg" 
                                        className="img-fluid mb-3" 
                                        alt="Cinema Background" 
                                    />
                                </div>
                                <p><strong>Description:</strong> {selectedMovie.description}</p>
                                <p><strong>Director:</strong> {selectedMovie.director}</p>
                                <p><strong>Year:</strong> {selectedMovie.year}</p>
                                <p><strong>Genre:</strong> {selectedMovie.genre}</p>
                                {selectedMovie.pictures && selectedMovie.pictures.length > 0 && (
                                    <div className="mt-3">
                                        <h6>Gallery:</h6>
                                        <div className="row">
                                            {selectedMovie.pictures.map((picture, index) => (
                                                <div key={index} className="col-4 mb-2">
                                                    <img 
                                                        src={picture} 
                                                        alt={`Additional ${selectedMovie.title} ${index + 1}`} 
                                                        className="img-fluid rounded"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="modal-footer">
                                <button 
                                    type="button" 
                                    className="btn btn-secondary" 
                                    onClick={() => setSelectedMovie(null)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {movies.length === 0 ? (
                <p>No movies found. Please check back later!</p>
            ) : (
                <div className="row">
                    {movies.map((movie, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card">
                                <img 
                                    src={movie.image || "https://img.freepik.com/free-vector/cinema-background-illustration_1284-6960.jpg"} 
                                    className="card-img-top" 
                                    alt={`${movie.title} Poster`} 
                                    style={{ objectFit: 'cover', height: '200px' }} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <button 
                                        className="btn btn-primary" 
                                        onClick={() => handleDetailsClick(movie)}
                                    >
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
