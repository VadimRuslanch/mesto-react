export default function PopupWithForm(props) {
    return (
        <>
            <section className={`${props.isOpen ? `popup popup_type_${props.name} popup_opened` : `popup`}`}>
                <div className="popup__container">
                    <h2 className="popup__header">{props.title}</h2>
                    <button className="popup__close-button" type="button" onClick={props.onClose} />
                    <form className="popup__form" onSubmit={props.onSubmit}>
                        {props.children}

                        <button
                            className="popup__save-button"
                            id="save-button-profile"
                            type="submit"
                        >
                            {props.textBtn}
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
};