type Props = {
    params: {
        id: string;
    };
    searchParams: {
        genre: string;
    };
};
// here we are displaying the name with the id of the search url. 
function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
    return (
        <div>Welcomr to the GenrePage with id: {id} and name {genre}</div>
    )
}
// http://localhost:3000/genre/80?genre=alivin

export default GenrePage