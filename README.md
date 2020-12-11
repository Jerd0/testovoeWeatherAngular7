# testovoeWeatherAngular7

Первая версия сделанная на Angular7

Данное приложение показывает погоду в Варшаве.

# Дизайн
https://www.figma.com/file/VQuw3mm2nXPdCQGVQHgbuN/Untitled?node-id=0%3A1

# TЗv1
Сделать приложение прогноза погоды на 7 дней, начиная от ближайшего прошедшего понедельника.
Открытие подробной информации по каждому дню должно изменять URL. URL для каждого дня строится по маске:  spa.ru/2020/02/02 - то есть мы открываем прогноз погоды на второе февраля 2020 и показываем всю неделю, в которую входила эта дата. (edited) 
# ТЗv2
#Ввиду проблем с API были внесены правки заказчика

Поступим следующим образом: openweathermap.org на бесплатном аккаунте дает возможность посмотреть прогноз на 7 дней вперед и 5 дней назад.
Так что выводить нужно не 7 карточек с прогнозом, а только 3: вчера, сегодня (эту карточку по центру) и завтра.
Все остальное - остается точно так же как и было описано. Ввод даты будет открывать прогноз по конкретному дню (карточка слева - день назад, карточка справа - день вперед). Просто при тестах мы сами будем следить за тем, чтобы не выйти за ограничения
8:31
А в идеале - тебе нужно будет добавить обработку выхода за пределы ограничений. То есть если API не даст данных - то сообщить об этом и показать ближайший возможный день (но это доп. задание, которое можно не делать)

Для запуска локально используйте

### npm install

### npm start


Для деплоя использовался firebase

Для просмотра в сети интернет перейдите по ссылке https://weatherforecastjerdo.web.app
