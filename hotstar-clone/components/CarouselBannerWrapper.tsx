import { getDiscoveremovies } from "@/lib/getMovies";
import CarouselBanner from "./CarouselBanner";

type Props = {
    id?: string;
    keywords?: string;
}
async function CarouselBannerWrapper({ id, keywords }: Props) {
    const movies = await getDiscoveremovies(id, keywords);
    return (

        // <CarouselBanner movies={movies}/>
        <CarouselBanner movies={movies} />
    )

}

export default CarouselBannerWrapper