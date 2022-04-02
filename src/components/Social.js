function Social(props) {
  return(
    <div className='social'>
      {props.icons.map((item, index) => 
        <a key={`link_${index}`} 
           className='social__link' 
           href={item.link} 
        >
          <div className={`social__icon ${props.type==='lt' && 'social__icon_lt'} ${props.type==='lt' ? `social__icon_${item.icon}-lt` : `social__icon_${item.icon}`}`}/>
        </a>
      )}
    </div>
  );
}

export default Social;