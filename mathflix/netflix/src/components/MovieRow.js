import React from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default ({title , itens}) => {
    return (
     <div>   
        <div  className="movie">
            <h2>{title}</h2>
            <div className="movierow-left" >
                <NavigateBeforeIcon sx={{fontSize: 50}}/>
            </div>
            <div className="movierow-right">
                <NavigateNextIcon sx={{fontSize: 50}}/>
            </div>
            
            <div className="MovieRow-list-area">
                <div className="movierow--list">
                {itens.results.length > 0 && itens.results.map((item, key) =>(
                <div key={key} className="movie--item">
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                </div>
                ))}
                </div> 
            </div>
        </div>
     </div>                           
    );
}
/*<h2>{title}</h2>*/
/*<div className="movierow-left" >
    <NavigateBeforeIcon style={{fontSize: 50}}/>
</div>
<div className="movierow-right">
    <NavigateNextIcon style={{fontSize: 50}}/>
</div>*/



/*<h2>{title}</h2>
<div class="chacbox-pagina">
     <imput type="checkbox" id="toggle">
     <label class="checkbox" for="toggle">
         <div class="trace"></div>
         <div class="trace"></div>
         <div class="trace"></div>
         <div class="trace"></div>
     </label>
</imput> </div>*/
