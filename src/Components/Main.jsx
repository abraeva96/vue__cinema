import React from 'react'
import play from '../assets/icon/play.svg';
import img from '../assets/images/black.png';
import video from '../assets/video/video.mp4';
// import filmImg1  from '../assets/images/film1.png'
// import filmImg2  from '../assets/images/film2.png'
// import filmImg3  from '../assets/images/film3.png'




function Main() {
    return (
        <React.Fragment>
            <main className="main ">
                <div className="container">
                    <section className='films'>
                    
                    <h2 className="title">films</h2>
                    <div className="films__box">
                        <div className="films__card">
                            <img className='film__play'  src={play} alt="" />
                            <p className="film__time">2:14:33</p>
                            <h3 className="film__title">Black Panther</h3>
                            <p className="film__text">At first glance, you can decide that Wakanda is an ordinary territory of wild Africa, but this is not so. Here, in the bowels of the desert lands, there are hidden deposits of a unique metal capable of absorbing...</p>
                        </div>
                        <div className="films__card">
                            <img className='film__play'  src={play} alt="" />
                            <p className="film__time">2:32:13</p>
                            <h3 className="film__title">The Dark Knight</h3>
                            <p className="film__text">Batman raises stakes in the war on crime. With the help of Lieutenant Jim Gordon and Attorney Harvey Dent, he intends to clear the streets of crime that is poisoning the city. The cooperation is effective, but soon they...</p>
                        </div>
                        <div className="films__card">
                            <img className='film__play'  src={play} alt="" />
                            <p className="film__time">1:53:45</p>
                            <h3 className="film__title">The Gentlemen</h3>
                            <p className="film__text">One cunning American, from his student years, had been selling drugs, and now he came up with a scheme of illegal enrichment using the estates of an impoverished English aristocracyand made a very good fortune on ...</p>
                        </div>
                        <div className="films__card">
                            <img className='film__play'  src={play} alt="" />
                            <p className="film__time">2:58:20</p>
                            <h3 className="film__title">The Lord of the...</h3>
                            <p className="film__text">Tales of Middle-earth is a chronicle of the Great War for the Ring, a war that lasted more than one thousand years. The one who owned the Ring received power over all living creatures, but was obliged to serve evil...</p>
                        </div>
                    </div>
               
            </section>
            </div>
                <section className='widow'>
                  
                  
                <div className="container">
                <img src={img} alt="" />
                    <p className="widow__text">After the events at the Leipzig-Halle airport, Natasha was overtaken by the mistakes of the past. The Red Room again made itself felt - a program to create Widows - professional killers and spies - just like her. Natasha decides once and for all to deal with people whose efforts she herself became a Widow.</p>
                    <a href="#!" className='intro__link'>Watch now</a>
                  
                   <video className='widow__video' autoPlay muted loop src={video}></video>
                </div>
                    
                </section>
                <section className='collections'>
                    <div className="container">
                        <h2 className="title">Collections</h2>
                        <div className="collections__box">
                            <div className="collections__card">
                            
                               <img src={play} alt="" className='collectoins__item-bg' />
                               <h3 className="collections__title">All Marvel Films</h3>
                            </div>
                            <div className="collections__card">
                               
                               <img src={play} alt="" className='collectoins__item-bg' />
                               <h3 className="collections__title">Fast and the Furious</h3>
                            </div>
                            <div className="collections__card">
                               
                               <img src={play} alt="" className='collectoins__card-bg' />
                               <h3 className="collections__title">Star Wars</h3>
                            </div>
                          
                        </div>
                    </div>
                </section>
                <section className='series'>
                    <div className="container">
                        <h2 className="title">Series</h2>
                        <div className="game">
                            <h2 className="game__title">Game of Thrones</h2>
                            <p className="game__text">The time of prosperity is drawing to a close, and the summer, 
                            which lasted almost a decade, is dying away. Around the center of power of the Seven Kingdoms, 
                            the Iron Throne, a conspiracy is ripening, and during this difficult time, the king decides to seek support 
                            from his youth friend Eddard Stark. In a world where everyone - from the king to the mercenary - is eager for power, 
                            intrigues and is ready to stick a knife in the back, there is ...</p>
                            <a href="#!" className="intro__link">Watch now</a>
                        </div>
                        <div className="serries__box">
                        <div className="serries__card">
                            <img src={play} alt="" />
                            <h2 className="serries__title">Wanda Vision</h2>
                        </div>
                        <div className="serries__card">
                            <img src={play} alt="" />
                            <h2 className="serries__title">The Flash</h2>
                        </div>
                        <div className="serries__card">
                            <img src={play} alt="" />
                            <h2 className="serries__title">The Great</h2>
                        </div>
                        <div className="serries__card">
                            <img src={play} alt="" />
                            <h2 className="serries__title">GOTHAM</h2>
                        </div>
                        <div className="serries__card">
                            <img src={play} alt="" />
                            <h2 className="serries__title">The witcher</h2>
                        </div>
                        </div>
                        
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}

export default Main