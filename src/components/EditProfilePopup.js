import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js"

export default function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, props.isOpen]);

    function handleNameChange(e) {
        setName(e.target.value)
    };

    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name)
        props.onUpdateUser({
            name: name,
            about: description,
        });
    };

    return (
        <>
            <PopupWithForm name='profile'
                title='Редактировать профиль'
                isOpen={props.isOpen}
                onClose={props.onClose}
                onSubmit={handleSubmit}
                textBtn="Сохранить"
            >
                <label >
                    <input
                        className="popup__input"
                        id="input-name"
                        type="text"
                        placeholder="Ваше имя"
                        minLength={2}
                        maxLength={40}
                        required=""
                        value={name || ''}
                        onChange={handleNameChange}
                    />
                    <span className="popup__error input-name-error" />
                    <input
                        className="popup__input"
                        id="input-about-me"
                        type="text"
                        placeholder="Расскажите о себе"
                        minLength={2}
                        maxLength={200}
                        required=""
                        value={description || ''}
                        onChange={handleDescriptionChange}
                    />
                    <span className="popup__error input-about-me-error" />
                </label>
            </PopupWithForm>
        </>
    )
}