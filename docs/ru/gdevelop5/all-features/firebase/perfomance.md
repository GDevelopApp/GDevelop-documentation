---
title: Измерение производительности
---
# Измерение производительности

Firebase включает в себя инструмент, который автоматически измеряет производительность на устройствах игроков.
Таким образом, вы можете узнать, вызывает ли обновление задержки в кадрах, которые вы не заметили на своем устройстве.
Для начала добавьте в любом месте действие «Включить измерение производительности».

## Пользовательские показатели

Набор инструментов для измерения производительности также включает способ проверки производительности для определенной группы событий или в определенный период времени с помощью трассировщиков.
Все, что вам нужно сделать, это запустить трассировщик, когда вы хотите начать запись производительности, и остановить его, когда закончите.
Вы также можете записывать производительность в течение определенного количества миллисекунд.
!!! warning

    Результаты не отправляются на сервер, пока вы не остановите трассировщик, поэтому не забудьте остановить их после завершения записи.