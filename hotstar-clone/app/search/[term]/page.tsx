import { notFound } from "next/navigation";

type Props = {
    params: {
        term: string;
    }
}
function SearchPage({ params: { term } }: Props) {
    // this will redirect user to 404 if page not found.
    if (!term) notFound();
    // for cleaning the url. 
    const termToUse = decodeURI(term);

    // API call to get the Serached movies

    // API call to get the Popular movies

  


    // console.log(props);
    return (
        <div>Welcome to the search page {termToUse}</div>
    )
}

export default SearchPage;