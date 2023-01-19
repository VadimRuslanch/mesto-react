import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from "./PopupWithForm.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js"
import { ArrayCardsContext } from "../contexts/ArrayCardsContext.js"

export default function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({})
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCard()])
      .then(([userData, initialCards]) => {
        setCurrentUser(userData)
        setCards(initialCards)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }, [setCurrentUser, setCards])

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
    setisEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  };

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  };

  function closeAllPopups() {
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };

  function handleCardClick(props) {
    setSelectedCard(props);
  };

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
      });
  };

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((item) => item._id !== card._id))
      });
  };

  function handleUpdateUser(userData) {
    api.setUserInfo(userData);
    setCurrentUser(userData);
    closeAllPopups();
  }

  function handleUpdateAvatar(userData) {
    console.log(userData)
    api.setUserAvatar(userData);
    setCurrentUser(userData);
    closeAllPopups();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <ArrayCardsContext.Provider value={cards}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <EditProfilePopup
          name={currentUser.name}
          description={currentUser.about}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups} 
          onUpdateAvatar={handleUpdateAvatar}
          />
        <PopupWithForm
          name='addImage'
          title='Новое место'
          children={editAddImagechildren}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <Footer />
      </ArrayCardsContext.Provider>
    </CurrentUserContext.Provider>
  );
};