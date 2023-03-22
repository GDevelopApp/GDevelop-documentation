---
title: インスタンスごとに繰り返しイベント
---
# インスタンスごとに繰り返しイベント

インスタンスごとに繰り返し（For Each）[イベント](/ja/gdevelop5/events)は、オブジェクトをパラメーターとして受け取るイベントです。
ゲーム中、オブジェクトのすべてのインスタンスについて、条件とアクションが繰り返されます。

通常は「インスタンスごとに繰り返し」イベントを使用する必要はありません。条件とアクションは、オブジェクトの全インスタンスで自動的に実行されます。それらは条件によって定義されます。ただしオブジェクトの各インスタンスに依存するアクションを実行するには、「インスタンスごとに繰り返し」イベントが役立つ場合があります。

## 例

!!! tip

        **やってみよう！** 🎮
    オンラインで下記のサンプルを実行できます。

[![](/gdevelop5/events/shootingbulletsexplanationexample.png)](https://editor.gdevelop.io/?project=example://shooting-bullets-explanation)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://shooting-bullets-explanation){ .md-button .md-button--primary }

[![](/gdevelop5/behaviors/platformerbehavior.png)](https://editor.gdevelop.io/?project=example://platformer)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://platformer){ .md-button .md-button--primary }

## どんなとき使うのか

次の例を見てください。このイベントはプレイヤーが「Kill​​AllEnemyBonus」というオブジェクトと衝突した場合、すべての敵の「life」変数を 0 に設定します。また、各敵の位置に特別な種類の爆発を作成します。これを実現するには、「インスタンスごとに繰り返し」イベントが必要です。そうしないと、最初の敵の位置で爆発が 1 回だけ発生するでしょう。

![](/gdevelop5/events/for-each-example.png)