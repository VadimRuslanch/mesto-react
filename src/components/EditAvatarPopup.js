import React from "react";
import PopupWithForm from "./PopupWithForm.js";

export default function EditAvatarPopup(props) {
    const [avatar, setAvatar] = React.useState('');
    const link = React.useRef();

    function handleChange(e) {
        setAvatar(e.target.value);
      }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            
        });
    }
    return (
        <PopupWithForm
            name='avatar'
            title='Обновить аватар'
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            textBtn="Сохранить"
        >
            <input
                className="popup__input"
                id="input-avatar"
                type="url"
                placeholder="Ссылка на картинку"
                required=""
                value={avatar}
                onChange={handleChange}
            />
            <span className="popup__error popup__error_padding input-avatar-error" />
        </PopupWithForm>)
}