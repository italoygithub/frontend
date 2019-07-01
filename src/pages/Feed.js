import React, { Component } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';
class Feed extends Component {
    render() {
        return (
            <section id='post-list'>
                <article>
                    <header>
                        <div className='user-info'>
                            <span>Italo Cedro</span>
                            <span className='place'>Recife</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://localhost:3333/files/foto.jpg" alt="" />

                    <footer>
                        <div className='actions'>
                            <img src={like} alt="like" />
                            <img src={comment} alt="comment" />
                            <img src={send} alt="send" />
                        </div>

                        <strong>900 curtidas</strong>

                        <p>
                            Um post muito massa da OmniStack!
                            <span>#react #omnistack #top</span>
                        </p>
                    </footer>
                </article>

                <article>
                    <header>
                        <div className='user-info'>
                            <span>Italo Cedro</span>
                            <span className='place'>Recife</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://localhost:3333/files/foto.jpg" alt="" />

                    <footer>
                        <div className='actions'>
                            <img src={like} alt="like" />
                            <img src={comment} alt="comment" />
                            <img src={send} alt="send" />
                        </div>

                        <strong>900 curtidas</strong>

                        <p>
                            Um post muito massa da OmniStack!
                            <span>#react #omnistack #top</span>
                        </p>
                    </footer>
                </article>
            </section>
        );
    }
}

export default Feed;
