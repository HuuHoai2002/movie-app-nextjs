type categories = "movie" | "tv";
type movieType = "popular" | "top_rated" | "upcoming" | "now_playing";
type imageWithSize =
  | "w92"
  | "w154"
  | "w185"
  | "w342"
  | "w500"
  | "w780"
  | "original";

class TmdbApi {
  private readonly apiKey: string;
  private readonly baseUrl: string;
  private readonly baseImageUrl: string;

  private readonly categories = {
    movie: "movie",
    tv: "tv",
  };

  constructor(apiKey: string, baseUrl: string, baseImageUrl: string) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
    this.baseImageUrl = baseImageUrl;
  }

  getDetail(id: string, category: categories): string {
    const url = `${this.baseUrl}/${category}/${id}?api_key=${this.apiKey}`;
    return url;
  }

  getMovies(type: movieType, page: number): string {
    const url = `${this.baseUrl}/${this.categories.movie}/${type}?api_key=${this.apiKey}&page=${page}`;
    return url;
  }

  getTvSeries(movieType: movieType, page: number): string {
    const url = `${this.baseUrl}/${this.categories.tv}/${movieType}?api_key=${this.apiKey}&page=${page}`;
    return url;
  }

  getImageUrl(path: string, size: imageWithSize): string {
    const url = `${this.baseImageUrl}/${size}/${path}`;
    return url;
  }
}

export const tmdb = new TmdbApi(
  "26a7d8afe9f82facc441f01c4235b0a5",
  "https://api.themoviedb.org/3",
  "https://image.tmdb.org/t/p"
);
