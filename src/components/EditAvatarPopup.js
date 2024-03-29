import React from "react";
import PopupWithForm from "./PopupWithForm.js";

export default function EditAvatarPopup(props) {
    const avatarRef = React.useRef();

    React.useEffect(() => {
        avatarRef.current.value = "";
    }, [props.isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }
    return (
        <PopupWithForm
            name='avatar'
            title='Обновить аватар'
            textBtn="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <input
                className="popup__input"
                id="input-avatar"
                type="url"
                placeholder="Ссылка на картинку"
                required=""
                ref={avatarRef}
            />
            <span className="popup__error popup__error_padding input-avatar-error" />
        </PopupWithForm>)
}