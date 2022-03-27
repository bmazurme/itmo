import React from 'react';
import Social from './Social';
import img from '../images/articles/tLZhFRLj6nY.jpg';
import { icons } from '../data/social';

function CardArticle() {
  const [active, setActive] = React.useState(false);
  const [sharedPopup, setSharedPopup] = React.useState(false);
  const {title, content, tags } = {
    title: 'Topic-driven Ensemble for Online Advertising Generation', 
    content: 'Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. Professional generation of banners requires creative and writing skills and a basi…',
    tags: [
      'Egor Nevezhin',
      'Nikolay Butakov',
      'Maria Khodorchenko',
      'Maxim Petrov',
      'Denis Nasonov']
  }

  function handleClick() {
    setActive(!active);
    handleClickShared(false);
  }

  function handleClickShared(val) {
    setSharedPopup(val);
  }

  return(
    <div className="card-article"
         onPointerEnter={handleClick}
         onPointerLeave={handleClick} 
    >
      <img className={`card-article__image ${active && 'card-article__image_active'}`} 
           src={img}
           alt=""
      />

      <div className="card-article__box">
        <div className="card-article__title">
          {title}
        </div>
        <div className="card-article__tags">
          {tags.map((tag, index) => 
            <span className='card-article__tag' 
                  key={index}>{tag}
            </span>)}
        </div>
        <div className="card-article__content">
          {content}
        </div>
      </div>

      {active && 
        <div className='card-article__button'>
          <div className="card-article__link">            
            <a href='#' 
               className='card-article__label'>
                  Читать полностью
                <div className="card-article__icon"/>
            </a>
            <div onClick={()=>handleClickShared(true)}
                 className="card-article__shared">
              <div className={`card-article__popup ${sharedPopup && 'card-article__popup_active'}`}>
                <Social icons={icons}/>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default CardArticle;