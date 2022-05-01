import React, {useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovie';
import Header from './components/Header';
  

export default ()=> {

    const [ movieList, setMovieList ] = useState([]);
    const [featuredata , setfeaturedata ] = useState(null) ;
    const [blackheader, setblackheader ] = useState(false);

    useEffect(()=>{
        //lista de filmes
        const loadAll = async() => {
            let list = await Tmdb.getHomeList();
            setMovieList(list);
            //iformações dos filmes
            let originals = list.filter(i=>i.slug === 'originals') ;
            //numero aleatorio
            let randomChosen = Math.floor(Math.random() * (originals[0].itens.results.length - 1));
            //usando numero aleatorio para escolhers um filme
            let chosen = originals[0].itens.results[randomChosen];
            //pengando informações adicionais 
            let  choseninfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
            setfeaturedata(choseninfo);
        }
        loadAll();
    }, []);
    useEffect(()=>{
        const scrollListener = () => {
            if(window.scrollY > 10){
                setblackheader(true);
            }else {
                setblackheader(false);
            }
        }
        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll',scrollListener);
        }
    },[]);

    return(
        <div className="page">
            <Header black ={blackheader} /> 

            {featuredata &&
             <FeatureMovie item={featuredata} />
            }
          <section className="lists">
               {movieList.map((item, key) => ( 
                    <MovieRow key={key} title={item.title} itens={item.itens} /> 
               ))}
           </section>
        </div>
    );
}