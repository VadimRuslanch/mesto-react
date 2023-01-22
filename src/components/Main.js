import React from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="main">

            <section className="profile">
                <div className="profile__page-autor">
                    <button
                        className="profile__avatar-button"
                        onClick={props.onEditAvatar}
                    >
                        <img
                            className="profile__avatar"
                            src={currentUser.avatar}
                            alt="Аватар"
                        />
                    </button>
                    <div className="profile__info">
                        <div className="profile__name">
                            <h1
                                className="profile__info-name profile-info"
                                id="name"
                                name="name"
                            >
                                {currentUser.name}
                            </h1>
                            <button
                                className="profile__edit-button" type="button"
                                onClick={props.onEditProfile} />
                        </div>
                        <p
                            className="profile__info-about-me profile-info"
                            id="about"
                            name="about"
                        >
                            {currentUser.about}
                        </p>
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

            <section className="elements">{
                props.cards.map((card) => {
                    const isOwn = card.owner._id === currentUser._id;
                    const isLiked = card.likes.some(i => i._id === currentUser._id);
                    const cardLikeButtonClassName = (
                        `element__like ${isLiked && 'element__like_active'}`
                    );
                    return (
                        <Card
                            key={card._id}
                            card={card}
                            isOwn={isOwn}
                            like={cardLikeButtonClassName}
                            onCardClick={props.onCardClick}
                            onCardLike={props.onCardLike}
                            onCardDelete={props.onCardDelete}
                        />
                    )
                })
            }
            </section>
        </main>
    )
};