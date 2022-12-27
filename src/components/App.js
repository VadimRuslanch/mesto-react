import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from "./PopupWithForm.js";


export default function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);

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
    document.querySelector('.popup_type_profile').classList.add('popup_opened')
  };

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_addImage').classList.add('popup_opened')
  };

  function handleEditAvatarClick() {
    document.querySelector('.profile__avatar-button').addEventListener('click', () => {
      setisEditAvatarPopupOpen(isEditAvatarPopupOpen => !isEditAvatarPopupOpen);
    })
    
  };

  function closeAllPopup() {
    document.querySelector(".popup_type_avatar").classList.remove('popup_opened');
    document.querySelector(".popup_type_profile").classList.remove('popup_opened');
    document.querySelector(".popup_type_addImage").classList.remove('popup_opened');

  };

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      >
        <PopupWithForm
          name='avatar'
          title='Обновить аватар'
          children={editAvatarChildren}
          isOpen={handleEditAvatarClick}
          isClose={closeAllPopup}
        />
        <PopupWithForm
          name='profile'
          title='Редактировать профиль'
          children={editProfileChildren}
          isClose={closeAllPopup}
        />
        <PopupWithForm
          name='addImage'
          title='Новое место'
          children={editAddImagechildren}
          isClose={closeAllPopup}
        />
      </Main>
      <Footer />
    </>
  );
}