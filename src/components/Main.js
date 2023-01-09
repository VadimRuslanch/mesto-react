import React from "react";
import api from "./utils/api.js";
import Card from "./Card.js";


export default function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCard()])
            .then(([userData, initialCards]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(initialCards);
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
    }, [setUserName, setUserDescription, setUserAvatar, setCards]);

    return (
        <main className="main">

            <section className="profile">
                <div className="profile__page-autor">
                    <button className="profile__avatar-button"
                        onClick={props.onEditAvatar}
                    >
                        <img className="profile__avatar"
                            src={`${userAvatar}`}
                            alt="Аватар"
                        />
                    </button>
                    <div className="profile__info">
                        <div className="profile__name">
                            <h1 className="profile__info-name profile-info"
                                id="name"
                                name="name"
                            >
                                {userName}
                            </h1>
                            <button className="profile__edit-button" type="button"
                                onClick={props.onEditProfile} />
                        </div>
                        <p
                            className="profile__info-about-me profile-info"
                            id="about"
                            name="about"
                        >{userDescription}</p>
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

            <section className="elements">{
                cards.map(item => {
                    return (<Card
                        card={item}
                        nameCard={item.name}
                        linkCard={item.link}
                        likesCard={item.likes}
                        onCardClick={props.onCardClick}
                    />)
                })
            }
            </section>
        </main>
    )
};