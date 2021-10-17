import {MovieDetails} from "./movie-details";

export class Filme {

    constructor(link?: string, movieDetails?: MovieDetails) {
        this.link = link;
        this.movieDetails = movieDetails;
    }

    link: string | undefined;
    movieDetails: MovieDetails | undefined;

}
