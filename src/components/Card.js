export default function card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    };

    return (
        <article className="element" >
            <button className="element__button-img">
                <img className="element__img"
                    src={`${props.linkCard}`}
                    alt={props.nameCard}
                    onClick={handleClick}
                />
            </button>
            <input className='element__trash' type="button" />
            <div className="element__group-text-like">
                <h2 className="element__text">{props.nameCard}</h2>
                <div className="element__likes">
                    <input className="element__like" type="button" />
                    <span className="element__likes-number">{props.likesCard.length}</span>
                </div>
            </div>
        </article>
    );
};