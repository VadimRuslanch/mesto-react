export default function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    };

    function handleLikeClick() {
        props.onCardLike(props.card)
    };

    function handleDeleteClick() {
        props.onCardDelete(props.card)
    }

    return (
        <article className="element" >
            <button className="element__button-img">
                <img
                    className="element__img"
                    src={props.card.link}
                    alt={props.card.name}
                    onClick={handleClick}
                />
            </button>
            {props.isOwn && <button
                className='element__trash'
                onClick={handleDeleteClick}
            />}
            <div className="element__group-text-like">
                <h2 className="element__text">
                    {props.card.name}
                </h2>
                <div className="element__likes">
                    <button
                        className={props.like}
                        onClick={handleLikeClick} />
                    <span className="element__likes-number">{props.card.likes.length}</span>
                </div>
            </div>
        </article>
    );
};