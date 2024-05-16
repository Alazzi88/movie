import { ALLMOVIES, MovieApi } from "../types/moviesType";
import axios from "axios";

//
export const getAllMovie = () => {
  return async (dispatch) => {
    const res = await axios.get(MovieApi);
    console.log(res.data);
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getMovieSearch = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${word}&api_key=2aeabb633b5c9e4254abaf5dd51c8480&language=ar`
    );
    console.log(res.data);
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};


export const getPage = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=2aeabb633b5c9e4254abaf5dd51c8480&language=ar&page=${page}`

    );
    console.log(res.data);
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

