export default function Main(props) {
    return (
        <main className="main">
            <section className="profile">
                <div className="profile__page-autor">
                    <button
                        className="profile__avatar-button"
                        onClick={props.onEditAvatar}>
                        <img className="profile__avatar" src="#" alt="Аватар"
                        />
                    </button>
                    <div className="profile__info">
                        <div className="profile__name">
                            <h1
                                className="profile__info-name profile-info"
                                id="name"
                                name="name"
                            />
                            <button className="profile__edit-button" type="button"
                                onClick={props.onEditProfile} />
                        </div>
                        <p
                            className="profile__info-about-me profile-info"
                            id="about"
                            name="about"
                        />
                    </div>
                </div>
                <button
                    className="profile__add-button"
                    type="button"
                    onClick={props.onAddPlace}>
                    <div className="profile__add-button-plus"
                    />
                </button>
            </section>

            <section className="popup" id="popup-open-image">
                <div className="popup__open-image">
                    <img className="popup__image" src="#" alt="#" />
                    <button className="popup__close-button" type="button" />
                    <h2 className="popup__text" />
                </div>
            </section>

            <section className="popup" id="popup-delete-image">
                <div className="popup__container">
                    <h3 className="popup__header popup__header_delete">Вы уверены?</h3>
                    <button className="popup__close-button" type="button" />
                    <form className="popup__form" id="form-delete-image" noValidate="">
                    </form>
                    <input
                        className="popup__save-button"
                        id="delete-button-images"
                        type="submit"
                        defaultValue="Да" />
                </div>
            </section>

            {/* <section className="elements"></section>
            <template id="elementTemplate" />
            <section className="popup" id="popup-profile">
                <div className="popup__container">
                    <h2 className="popup__header">Редактировать профиль</h2>
                    <button className="popup__close-button"
                        type="button"
                        onClick={closeAllPopup} />
                    <form
                        className="popup__form popup__form_media"
                        id="form-profile"
                        name="form-profile"
                        noValidate="">
                        <input
                            className="popup__input"
                            id="input-name"
                            type="text"
                            name="name"
                            placeholder="Ваше имя"
                            minLength={2}
                            maxLength={40}
                            required=""
                        />
                        <span className="popup__error input-name-error" />
                        <input
                            className="popup__input"
                            id="input-about-me"
                            type="text"
                            name="about"
                            placeholder="Кто вы?"
                            minLength={2}
                            maxLength={200}
                            required=""
                        />
                        <span className="popup__error input-about-me-error" />
                    </form>
                    <input
                        className="popup__save-button"
                        id="save-button-profile"
                        type="submit"
                        defaultValue="Сохранить"
                    />
                </div>
            </section>

            <section className="popup" id="popup-add-image">
                <div className="popup__container">
                    <h2 className="popup__header">Новое место</h2>
                    <button className="popup__close-button" type="button" onClick={closeAllPopup} />
                    <form
                        className="popup__form"
                        id="form-image"
                        name="form-image"
                        noValidate="">
                        <input
                            className="popup__input"
                            id="input-title"
                            type="text"
                            name="name"
                            placeholder="Название"
                            minLength={2}
                            maxLength={30}
                            required="" />
                        <span className="popup__error input-title-error" />
                        <input
                            className="popup__input"
                            id="input-link"
                            type="url"
                            name="link"
                            placeholder="Ссылка на картинку"
                            required="" />
                        <span className="popup__error input-link-error" />
                    </form>
                    <input
                        className="popup__save-button"
                        id="save-button-images"
                        type="submit"
                        defaultValue="Сохранить"
                    />
                </div>
            </section>

            <section className="popup" id="popup-avatar">
                <div className="popup__container">
                    <h2 className="popup__header">Обновить аватар</h2>
                    <button className="popup__close-button" type="button" onClick={closeAllPopup} />
                    <form
                        className="popup__form"
                        id="form-avatar"
                        name="form-avatar"
                        noValidate="">
                        <input
                            className="popup__input"
                            id="input-avatar"
                            type="url"
                            name="link"
                            placeholder="Ссылка на картинку"
                            required=""
                        />
                        <span className="popup__error popup__error_padding input-avatar-error" />
                    </form>
                    <input
                        className="popup__save-button"
                        id="save-button-avatar"
                        type="submit"
                        defaultValue="Сохранить" />
                </div>
            </section> */}
        </main>
    )
};