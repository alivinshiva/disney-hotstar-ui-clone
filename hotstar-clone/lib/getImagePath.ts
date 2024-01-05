const getImagePath = (imagePath?: string, fullsize?: boolean)=>{
    return imagePath
        ? `http://image.tmdb.org/t/p/${fullsize ? "original" : "w500"}/${imagePath}`
        : "https://links.papareact.com/o8z"
}
export default getImagePath;