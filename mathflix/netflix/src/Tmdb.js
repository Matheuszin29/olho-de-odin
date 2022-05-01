const API_KEY ='2feebf45661bd339c24fd5020e9bbb8e';
const API_BASE ='https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export  default {
    getHomeList: async () => {
        return[
            {
                slug: 'originals',
                title:'originais Netflix',
                itens: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'trending',
                title: 'recomedados para voce',
                itens: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'toprated',
                title: 'em alta',
                itens: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'action',
                title: 'ação',
                itens: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'comed',
                title: 'comedia',
                itens: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'horror',
                title: 'terror',
                itens: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'romance',
                title: 'romance',
                itens: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'documetary',
                title: 'documentario',
                itens: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    },
    //colhendo informações de filmes ou series
    getMovieInfo: async (movieID ,type ) => {
        let info = {} ;

        if (movieID) {
            switch(type){
                case 'movie':
                    info = await  basicFetch(`/movie/${movieID}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await  basicFetch(`/tv/${movieID}?language=pt-BR&api_key=${API_KEY}`); 
                break;
                default:
                    info =null ;
                break;    

            }
        }
        return info
    }
    
}