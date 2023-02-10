

const SmallCard = (props) => {
    return(
        <div className='small-card'>
          <div className="small-card-image" style={{backgroundImage:`url(${props.image})`}}></div>
          <div>
            <p className="header-sm">{props.text.name}</p>
            <p className="paragraph">{props.text.text}</p>
          </div>
        </div>
    );
}

export default SmallCard;