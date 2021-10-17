export class MovieDetails {

    constructor(title?: string, overview?: string, imdb_id?: string, release_date?: string , vote_average?: string , vote_count?: string, runtime?: string , poster_path?: string) {
        this.title = title;
        this.overview = overview;
        this.imdb_id = imdb_id;
        this.release_date = release_date;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
        this.runtime = runtime;
        this.poster_path = poster_path;
    }

    title: string | undefined;
    overview: string | undefined;
    imdb_id: string | undefined;
    release_date: string | undefined;
    vote_average: string | undefined;
    vote_count: string | undefined;
    runtime: string | undefined;
    poster_path: string | undefined;


}
