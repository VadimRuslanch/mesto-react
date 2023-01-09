export default function ImagePopup(props) {
    return (
        <section className={`${props.card ? `popup popup_opened` : `popup`}`}>
            <div className="popup__open-image">
                <img className="popup__image" src={`${props.card.link}`} alt={props.card.name} />
                <button className="popup__close-button" type="button" onClick={props.onClose} />
                <h2 className="popup__text">{props.card.name}</h2>
            </div>
        </section>
    )
}