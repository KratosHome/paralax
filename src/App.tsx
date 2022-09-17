import React, {useEffect, useRef, useState} from 'react';
import './App.css';

function App() {


    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, {passive: true});
        window.addEventListener('scroll', e => {
            document.body.style.cssText = `--scrollTop: ${offset}px`
        })
        return () => window.removeEventListener('scroll', onScroll);
    }, [offset]);



    return (
        <div className="wrapper" >
            <div className="content">

                <header className="main-header">
                    <div className="layers">
                        <div className="layer__header">
                            <div className="layers__caption">Welcome to Parallax</div>
                            <div className="layers__title">Fairy Forest</div>
                        </div>
                        <div className="layer layers__base"></div>
                        <div className="layer layers__middle"></div>
                        <div className="layer layers__front"></div>
                    </div>
                </header>

                <article className="main-article">
                    <div className="main-article__content">
                        <h2 className="main-article__header">To be continued</h2>
                        <p className="main-article__paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit.
                            Omnis error provident dignissimos facere. Repellendus tempore autem qui! Quia magnam
                            tempora
                            esse id necessitatibus corrupti mollitia expedita sapiente cum rerum, ut dicta
                            laboriosam!</p>
                    </div>
                    <div className="copy">© Oleg Tkach OlegonTkach101@gmail.com</div>
                </article>

            </div>
        </div>
    );
}

export default App;
