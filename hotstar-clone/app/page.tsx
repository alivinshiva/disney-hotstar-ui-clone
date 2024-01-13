import Image from 'next/image' 
import MoviesCarousel from '@/components/MoviesCarousel'
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '@/lib/getMovies';
import CarouselBannerWrapper from '@/components/CarouselBannerWrapper';
export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  const nowPlaying = await getNowPlayingMovies();
  return (
    <main className="">

      <CarouselBannerWrapper/>
      <div className=' flex flex-col space-y-2 xl:-mt-48 '>
        <MoviesCarousel movies={upcomingMovies} title='Upcomming' />
        <MoviesCarousel movies={topRatedMovies} title='Top Rated' />
        <MoviesCarousel movies={popularMovies} title='Popular' />
        <MoviesCarousel movies={nowPlaying} title='Now Playing' />
      </div>
    </main>
  )
}
