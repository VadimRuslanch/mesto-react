class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    };

    _parseResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    };

    // Управление лайком карточки
    _setLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
            .then(res => this._parseResponse(res))
    };

    _deleteLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(res => this._parseResponse(res))
    }

    changeLikeCardStatus(cardId, isLiked) {
        if (isLiked) {
            return this._setLike(cardId);
        } else {
            return this._deleteLike(cardId);
        }
    };

    // Удаление карточки
    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers
        })
            .then(res => this._parseResponse(res))
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
    }

    // Добавление новой карточки
    addCard(cardData) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: cardData.name,
                link: cardData.link
            })
        })
            .then(res => this._parseResponse(res))
    };

    // Редактирует аватар пользователя
    setUserAvatar(userData) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: userData.link
            })
        })
            .then(res => this._parseResponse(res))
    }

    // Редактирует информацию профиля
    setUserInfo(userData) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: userData.name,
                about: userData.about
            })
        })
            .then(res => this._parseResponse(res))

    };

    // загрузка карточек с сервера
    getCard() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
            .then(res => this._parseResponse(res))
    };

    // Загрузка информации о пользователе с сервера
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then((res) => this._parseResponse(res))
    };
};

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49',
    headers: {
        authorization: '278ad23c-54e7-41b4-b653-b024325dde52',
        'Content-Type': 'application/json'
    }
});

export default api;