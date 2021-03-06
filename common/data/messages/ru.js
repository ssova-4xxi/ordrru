export default {
  // common
  'time': 'Время',
  'date': 'Дата',
  'close': 'Закрыть',
  'cancel': 'Отменить',
  'create': 'Создать',

  // Users part
  'organizationType.bathhouse': 'Бани и сауны',
  'organizationType.carwash': 'Автомойки',

  'cities.Magnitogorsk': 'Магнитогорск',
  'cities.Chelyabinsk': 'Челябинск',
  'cities.Yekaterinburg': 'Екатеринбург',

  'bathhouseType.bathhouse': 'Баня',
  'bathhouseType.sauna': 'Сауна',
  'bathhouseType.hammam': 'Хаммам',

  'options.pool': 'Бассейн',
  'options.internet': 'Интернет',
  'options.smoking': 'Можно курить',
  'options.billiards': 'Бильярд',
  'options.kitchen': 'Кухня',
  'options.bar': 'Бар/Ресторан',
  'options.jacuzzi': 'Джакузи',
  'options.icehole': 'Прорубь',
  'options.parking': 'Парковка',
  'options.karaoke': 'Караоке',

  'filters.datetime': 'Дата и время',
  'filters.options': 'Услуги и удобства',
  'filters.type': 'Тип',
  'filters.distance': 'До центра, км',
  'filters.prepayment': 'Предоплата',
  'filters.price': 'Цена, руб',
  'filters.guests': 'Кол-во гостей',
  'filters.searchName': 'По названию',
  'filters.sorting': 'Сортировка',

  'sorting.popularity': 'Популярность',
  'sorting.distance': 'Дистанция',
  'sorting.price': 'Цена',

  'tags.datetime': 'Дата/время',
  'tags.options': 'Услуги',
  'tags.types': 'Тип',
  'tags.distance': 'Дистанция',
  'tags.prepayment': 'Предоплата',
  'tags.price': 'Цена',
  'tags.guests': 'Кол-во гостей',
  'tags.searchName': 'Название',

  'prepayment.yes': 'Да',
  'prepayment.no': 'Нет',
  'prepayment.whatever': 'Неважно',

  'mode.list': 'Список',
  'mode.map': 'Карта',

  'showFilters': 'Показать фильтры',
  'showOffers': 'Показать предложения',
  'moreFilters': 'Еще фильтры',

  'ordered-time': 'Занятое время',
  'free-time': 'Свободное время',
  'selected-time': 'Выбранное время',

  'more': 'Подробнее',
  'hide': 'Скрыть',

  'toOrder': 'Заказать',
  'order': 'Заказ',

  'priceOfInterval': 'с {start} до {end} цена {price} руб.',
  'priceFrom': 'от {price} руб.',
  'guestCount': 'Количество гостей',
  'additionalServices': 'Дополнительные услуги',
  'additionalServicesIsEmpty': 'Дополнительные услуги отсутствуют',

  'emptyResultShowText': 'К сожалению, нам ничего не удалось найти по Вашему запросу. Рекомендуем немного изменить критерии поиска, или сбросить их полностью.',
  'offersCount': '{offersCount, plural, =0 {Нет предложений} one {Всего {offersCount} предложение} few {Всего {offersCount} предложения} many {Всего {offersCount} предложений}}',

  'notifier.cancel': 'К сожалению, Ваш заказ был отменен администратором бани',
  'notifier.reserve': 'К сожалению, Ваш заказ был отменен, т.к. только что был зарезервирован другим пользователем, либо администратором бани',

  'selectTime': 'Выберите время',
  'loading': 'Загрузка',
  'comment': 'Комментарий',
  'comments': 'Комментарии',

  // Manager part
  'entrance': 'Войти',
  'username': 'Логин',
  'password': 'Пароль',
  'welcome': 'Добро пожаловать!',
  'history': 'История',
  'message': 'Сообщение',
  'messages': 'Сообщения',
  'availableTime': 'Доступное время',
  'disabledTime': 'Недоступное время',
  'createdManagerTime': 'Создано администратором',
  'createdUserTime': 'Создано пользователем',
  'dataOrder': 'Данные заказа',
  'amountOfTime': 'Стоимость за время',
  'totalAmount': 'Общая сумма',
  'createOrder': 'Создание заказа',

  // errors
  'usernameIsAlphanumeric': 'Логин должен содержать только цифры и буквы',
  'usernameIsLength': 'Логин должен содержать больше 3 символов',
  'passwordIsLength': 'Пароль должен содержать больше 3 символов',

  // codes:
  'ORDER_CREATED_BY_USER_SUCCESSFULLY': 'Пользователь НОМЕР создал заказ',
  'ORDER_CREATED_BY_USER_UNSUCCESSFULLY': 'Ошибка создания заказа',

  'ORDER_CREATED_BY_MANAGER_SUCCESSFULLY': 'Заказ успешно создан',
  'ORDER_CREATED_BY_MANAGER_UNSUCCESSFULLY': 'Ошибка создания заказа',

  // server-side errors - code : transcription
  'LOGIN_FAILED': 'Неверный логин или пароль',
  'ORDER_INCORRECT_DATE_FORMAT': 'Некорректный формат даты заказа',
  'ORDER_INCORRECT_DURATION': 'Некорректная продолжительность заказа',
  'ORDER_INCORRECT_PERIOD_FORMAT': 'Некорректный формат времени заказа',
  'ORDER_INCORRECT_PERIOD_VALUE': 'Некорректное время заказа',
  'ORDER_INCORRECT_DATES_SEQUENCE': 'Некорректные даты начала и окончания заказа',
  'ORDER_INCORRECT_PERIODS_SEQUENCE': 'Некорректные время начала и время окончания заказа',
  'ORDER_INCORRECT_DATETIME_SUM': 'Некорректные данные заказа',
  'ORDER_INCORRECT_INTERVAL': 'Некорректные данные заказа',
}
