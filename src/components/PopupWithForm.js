export default function PopupWithForm(props) {
    console.log(props.name)
    return (
        <>
            <section className={props.isOpen ? `popup popup_type_${props.name}` : `popup`}> 
                <div className="popup__container">
                    <h2 className="popup__header">{props.title}</h2>
                    <button className="popup__close-button" type="button" onClick={props.isClose} />
                    <form className="popup__form" noValidate="">
                        {props.children}
                    </form>
                    <input
                        className="popup__save-button"
                        id="save-button-profile"
                        type="submit"
                        defaultValue="Сохранить" />
                </div>
            </section>
        </>
    )
};