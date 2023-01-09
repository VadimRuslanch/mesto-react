import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";


export default function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  const editAvatarChildren = (
    <>
      <input
        className="popup__input"
        id="input-avatar"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required=""
      />
      <span className="popup__error popup__error_padding input-avatar-error" />
    </>
  );

  const editProfileChildren = (
    <>
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
    </>
  );

  const editAddImagechildren = (
    <>
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
    </>
  );

  function handleEditProfileClick() {
    document.querySelector(".profile__edit-button").addEventListener('click', () => {
      setisEditProfilePopupOpen(true);
    });
  };

  function handleAddPlaceClick() {
    document.querySelector('.profile__add-button').addEventListener('click', () => {
      setisAddPlacePopupOpen(true);
    });
  };

  function handleEditAvatarClick() {
    document.querySelector(".profile__avatar-button").addEventListener('click', () => {
      setisEditAvatarPopupOpen(true);
    });
  };

  function handleCardClick(props) {
    document.querySelector(".element__img").addEventListener('click', () => {
      setSelectedCard(props, true);
    });

  };

  function closeAllPopup() {
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setSelectedCard(false);
  };

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        children={editProfileChildren}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopup}
      />
      <PopupWithForm
        name='addImage'
        title='Новое место'
        children={editAddImagechildren}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopup}
      />
      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        children={editAvatarChildren}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopup}
      />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopup}
      />
      <Footer />
    </>
  );
};