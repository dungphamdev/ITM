import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { urlMovies } from '../endpoints';
import AlertContext from '../utils/AlertContext';
import { landingPageDTO } from './movies.model';
import MoviesList from './MoviesList';

import { Header } from "../components/header";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Gallery } from "../components/gallery";
import { Testimonials } from "../components/testimonials";
import { Team } from "../components/Team";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";


export default function LandingPage() {

  const [movies, setMovies] = useState<landingPageDTO>({});

  const landingPageData = { ...JsonData }

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    axios.get(urlMovies).then((response: AxiosResponse<landingPageDTO>) => {
      setMovies(response.data);
    })
  }

  return (
    // <AlertContext.Provider value={() => {
    //   loadData();
    // }}>
    //   <h3>In Theaters</h3>
    //   <MoviesList movies={movies.inTheaters} />

    //   <h3>Upcoming Releases</h3>
    //   <MoviesList movies={movies.upcomingReleases} />
    // </AlertContext.Provider>

    <>

      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />

    </>
  )
}