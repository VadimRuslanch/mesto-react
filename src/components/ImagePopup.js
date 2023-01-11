export default function ImagePopup({ card, onClose }) {
    return (
        <section
            className={card !== null ? 'popup popup_opened popup_opacity' : 'popup'}>
            <div className="popup__open-image">
                <img
                    className="popup__image"
                    src={card !== null ? card.link : ''}
                    alt={card !== null ? card.name : ''} />
                <button
                    className="popup__close-button"
                    type="button"
                    onClick={onClose} />
                <h2
                    className="popup__text">{card !== null ? card.name : ''}</h2>
            </div>
        </section>
    )
}