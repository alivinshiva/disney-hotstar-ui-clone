import MoviesCarousel from "@/components/MoviesCarousel";
import OpenAIAzureSuggestions from "@/components/OpenAIAzureSuggestions";
import { getDiscoveremovies } from "@/lib/getMovies";


async function GenrePage({
    params: { id },
    searchParams: { genre },
}: {
    params: { id: string };
    searchParams: {
        genre: string;
    };
}) {
    console.log(id);
    const movies = await getDiscoveremovies(id);


    return (
        <div className="max-w-7xl mx-auto">
            <div className=" flex flex-col space-y-5 mt-32 xl:mt-42">
                <h1 className=" text-6xl font-bold px-10">Result for {genre}</h1>

                {/* AZURE  AI suggestions */}
                {/* <OpenAIAzureSuggestions term={genre} /> */}
                {/* <AISuggestion term={genre} /> */}
                <MoviesCarousel title={`genre`} movies={movies} isVertical />

            </div>
        </div>
        // 3.19 completed


    )
}
export default GenrePage