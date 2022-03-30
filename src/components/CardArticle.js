import React from 'react';
import Social from './Social';
import img from '../images/articles/tLZhFRLj6nY.jpg';
import { icons } from '../data/social';

function CardArticle(props) {
  const [active, setActive] = React.useState(false);
  const [sharedPopup, setSharedPopup] = React.useState(false);

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
          {props.card.title}
        </div>
        <div className="card-article__tags">
          {props.card.tags.map((tag, index) => 
            <span className='card-article__tag' 
                  key={index}>{tag}
            </span>)}
        </div>
        <div className="card-article__content">
          {props.card.content}
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