import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header-logo"> 
                <a href="/">
                    <img src="https://www.pxpng.com/public/uploads/preview/-11621687998ytrgnduxoh.png"alt = "netflix" />
                </a>  
            </div>
            <div className="header-user">
                <a href="/">
                    <img src="https://img2.gratispng.com/20181108/ufv/kisspng-digital-art-oni-hannya-drawing-oni-mask-art-www-pixshark-com-images-galleries-w-5be45a13b8cc72.1384405615416919237569.jpg"alt = "netflix" />
                </a>
            </div>    
        </header>
    );
}