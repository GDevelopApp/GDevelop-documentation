---
title: Настройка Firebase
---
##  Настройка Firebase

Чтобы использовать Firebase, вам необходимо подключить GDevelop к учетной записи Firebase. На этой странице объясняется, как это сделать.

!!! note

    В этом руководстве будут использоваться скриншоты на английском языке, если где-то запутались, поменяйте на время язык в Firebase.

### Шаг 1. Создание проекта Firebase

Сначала перейдите на <https://console.firebase.google.com/>. У вас должен быть список проектов. Создадим новый: ![](/gdevelop5/all-features/firebase/quickstart1.jpg)

Введите название для вашего проекта. В этом руководстве мы назовём его"Tutorial-GDevelop". ![](/gdevelop5/all-features/firebase/quickstart2.jpg)

Затем выберите, включать или отключать Google Analytics. В этом примере мы включим его, так как хотим продемонстрировать каждую функцию Firebase, но решать вам, будете вы это использовать или нет. Вы всегда сможете изменить это позже.

![](/gdevelop5/all-features/firebase/bandicam_2020-05-07_17-25-40-916.jpg)

![](/gdevelop5/all-features/firebase/bandicam_2020-05-07_17-25-55-986.jpg)

Теперь у вас должна отобразиться панель управления Firebase.

![](/gdevelop5/all-features/firebase/bandicam_2020-05-07_17-26-34-404.jpg)

### Шаг 2. Зарегистрируйте приложение для своей игры GDevelop

Чтобы зарегистрировать игру, создайте в Firebase новое «веб-приложение». Для этого нажмите третью кнопку, чтобы добавить «веб-приложение» (см. Следующий скриншот).

![](/gdevelop5/all-features/firebase/bandicam_2020-05-07_17-27-51-338.jpg)

Введите любое имя еще раз и снимите флажок «Настроить хостинг Firebase».

!!! note

    На момент написания нет поддержки хостинга Firebase, но он может быть добавлен в GDevelop позже.

Firebase теперь покажет вам код, который вы бы использовали, если бы создавали код для веб-приложения (нам понадобится только фрагмент).

![](/gdevelop5/all-features/firebase/quickstart4.png)

Вам понадобится только конфигурационная часть Firebase. Скопируйте и вставьте часть между {}, включая {}. Например, на этом снимке экрана нам нужно скопировать: ```

    {
        apiKey: "AIzaSyCbFhG_bCyAvnxlmVSgIgn7Em0XOYE9YXA",
        authDomain: "tutorial-gdevelop.firebaseapp.com",
        databaseURL: "https://tutorial-gdevelop.firebaseio.com",
        projectId: "tutorial-gdevelop",
        storageBucket: "tutorial-gdevelop.appspot.com",
        messagingSenderId: "386980638073",
        appId: "1:386980638073:web:b00afc0ecb3ed7ca4f53a8",
        measurementId: "G-R0KBN0HPQ8"
    }

```

Теперь откройте проект GDevelop, в который вы хотите интегрировать Firebase, и перейдите в свойства проекта. В поле «Firebase Configuration» вставьте скопированную конфигурацию. Вы заметите, что появляется сообщение об ошибке, в котором говорится, что это недопустимый JSON: ![](/gdevelop5/all-features/firebase/quickstart5.png) Это нормально, потому что формат, используемый GDevelop, более строг, чем код, отображаемый Firebase. Вам нужно заключить все ключи в кавычки. Примером может стать:

```

    {
        "apiKey": "AIzaSyCbFhG_bCyAvnxlmVSgIgn7Em0XOYE9YXA",
        "authDomain": "tutorial-gdevelop.firebaseapp.com",
        "databaseURL": "https://tutorial-gdevelop.firebaseio.com",
        "projectId": "tutorial-gdevelop",
        "storageBucket": "tutorial-gdevelop.appspot.com",
        "messagingSenderId": "386980638073",
        "appId": "1:386980638073:web:b00afc0ecb3ed7ca4f53a8",
        "measurementId": "G-R0KBN0HPQ8"
    }

``` Теперь ошибки быть не должно:

![](/gdevelop5/all-features/firebase/quickstart6.png)

Теперь вы можете начать использовать [Сервисы Firebase](/ru/gdevelop5/all-features/firebase).
