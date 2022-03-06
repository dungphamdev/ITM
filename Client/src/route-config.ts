import IndexGenres from "./genres/IndexGenres";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";

import IndexActors from "./actors/IndexActors";
import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";

import IndexMovieTheaters from "./movietheaters/IndexMovieTheaters";
import CreateMovieTheater from "./movietheaters/CreateMovieTheater";
import EditMovieTheater from "./movietheaters/EditMovieTheater";

import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";
import MovieDetails from './movies/MovieDetails';

import LandingPage from "./movies/LandingPage";
import RedirectToLandingPage from './utils/RedirectToLandingPage';

import Register from './auth/Register';
import Login from './auth/Login';
import IndexUsers from './auth/IndexUsers';

const routes = [
    {path: '/departments', component: IndexGenres, exact: true, isAdmin: true},
    {path: '/departments/create', component: CreateGenre, isAdmin: true},
    {path: '/departments/edit/:id(\\d+)', component: EditGenre, isAdmin: true},

    {path: '/facility', component: IndexActors, exact: true, isAdmin: true},
    {path: '/facility/create', component: CreateActor, isAdmin: true},
    {path: '/facility/edit/:id(\\d+)', component: EditActor, isAdmin: true},

    {path: '/branch', component: IndexMovieTheaters, exact: true, isAdmin: true},
    {path: '/branch/create', component: CreateMovieTheater, isAdmin: true},
    {path: '/branch/edit/:id(\\d+)', component: EditMovieTheater, isAdmin: true},

    {path: '/courses/create', component: CreateMovie, isAdmin: true},
    {path: '/courses/edit/:id(\\d+)', component: EditMovie, isAdmin: true},
    {path: '/courses/filter', component: FilterMovies},
    {path: '/courses/:id(\\d+)', component: MovieDetails},

    {path: '/register', component: Register},
    {path: '/login', component: Login},
    {path: '/users', component: IndexUsers, isAdmin: true},


    {path: '/', component: LandingPage, exact: true},
    {path: '*', component: RedirectToLandingPage}
];

export default routes;