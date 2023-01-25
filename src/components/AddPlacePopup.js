import React from "react";
import PopupWithForm from "./PopupWithForm.js";

export default function AddPlacePopup(props) {
    const [name, setName] = React.useState("");
    const [link, setLink] = React.useState("");

    React.useEffect(() => {
        setName("")
        setLink("")
    }, [props.isOpen]);

    function handleNameChange(e) {
        setName(e.target.value)
    };

    function hendelLinkChenge(e) {
        setLink(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddCard({
            name: name,
            link: link,
        });
    };

    return (
        <PopupWithForm
            name='addImage'
            title='Новое место'
            textBtn="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <input
                className="popup__input"
                id="input-title"
                type="text"
                name="name"
                placeholder="Название"
                minLength={2}
                maxLength={30}
                required=""
                value={name}
                onChange={handleNameChange}
            />
            <span className="popup__error input-title-error" />
            <input
                className="popup__input"
                id="input-link"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                required=""
                value={link}
                onChange={hendelLinkChenge}
            />
            <span className="popup__error input-link-error" />
        </PopupWithForm>
    )
};