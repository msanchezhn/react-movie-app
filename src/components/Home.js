import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../common/services/MovieSlice';
import MovieListing from './MovieListing';

const Home = () => {
    const dispatch = useDispatch();
    const movieText = "Harry";
    const showText = "Friends";

    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(showText));
    }, [dispatch]);

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    )
};

export default Home;