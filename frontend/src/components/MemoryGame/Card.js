
function Card({card, index, clickhandler}) {

    return (
        <div className={`card ${card.status}`} onClick={() => clickhandler(index)}>
            <img src={card.img} alt={card.name}  className='img'/>
        </div>
    )
}

export default Card;