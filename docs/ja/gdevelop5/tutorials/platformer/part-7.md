---
title: プラットフォーマー チュートリアル Part 7：敵がプレイヤーを殺せる（そしてプレイヤーも敵を殺せる）ようにしよう
---
# プラットフォーマー チュートリアル Part 7：敵がプレイヤーを殺せる（そしてプレイヤーも敵を殺せる）ようにしよう

今回は、敵をやっつける――そして敵にもプレイヤーをやっつけさせる――方法を説明します。

## シリーズ

いま読んでいるのは[プラットフォーマー チュートリアル](/ja/gdevelop5/tutorials/platformer/start)の **Part 7** です。

1. [プラットフォーマー チュートリアル Part 1](/ja/gdevelop5/tutorials/platformer/start)
2. [プラットフォーマー チュートリアル Part 2](/ja/gdevelop5/tutorials/platformer/part-2)
3. [プラットフォーマー チュートリアル Part 3](/ja/gdevelop5/tutorials/platformer/part-3)
4. [プラットフォーマー チュートリアル Part 4](/ja/gdevelop5/tutorials/platformer/part-4)
5. [プラットフォーマー チュートリアル Part 5](/ja/gdevelop5/tutorials/platformer/part-5)
6. [プラットフォーマー チュートリアル Part 6](/ja/gdevelop5/tutorials/platformer/part-6)
7. プラットフォーマー チュートリアル Part 7
8. [プラットフォーマー チュートリアル Part 8](/ja/gdevelop5/tutorials/platformer/part-8)


## ステップ 1：プレイヤーを殺す

敵に接触するとプレイヤーが死ぬようにします。プレイヤーを「キル」する一番簡単な方法は、敵と接触したときに「Player」オブジェクトを削除することです。

次の手順で、敵と接触した「Player」オブジェクトを削除します。

1. 新しいイベントを作成します。
2. 「Player」オブジェクトの**衝突**条件をイベントに追加して、「Slime」オブジェクトとの接触をテストします。
3. 「Player」オブジェクトの**は地面上にいる**条件を追加します。これはプレイヤーがプラットフォーム上にいるときだけ（つまりジャンプ中ではない）やられるようにするためです。
4. **オブジェクトを削除する**アクションをイベントに追加して、「Player」オブジェクトを削除します。

![](/gdevelop5/tutorials/platformer/07-01-kill-player.jpg)

ゲームをプレビューすると、敵にぶつかったプレイヤーが死にます。

![](/gdevelop5/tutorials/platformer/07-02-killing-player-preview.gif)

## ステップ 2：敵を殺す

ジャンプしたプレイヤーが敵を踏みつけると、敵が死ぬようにします。さっきの手順に似た内容ですが、今度「死ぬ」のは「Slime」オブジェクトの方です。

次の手順で、プレイヤーが踏みつけたときに「Slime」オブジェクトを削除します。

1. 新しいイベントを作成します。
2. 「Player」オブジェクトの**衝突**条件をイベントに追加して、「Slime」オブジェクトとの接触をテストします。
3. 「Player」オブジェクトに**は落下中である**条件を追加します。これはプレイヤーがジャンプ中のときだけ（つまりプラットフォーム上にいるのではない）敵が死ぬようにするためです。
4. **オブジェクトを削除する**アクションをイベントに追加して、「Slime」オブジェクトを削除します。

![](/gdevelop5/tutorials/platformer/07-03-kill-enemy.jpg)

ゲームをプレビューすると、プレイヤーが踏みつけた敵は死にます。

![](/gdevelop5/tutorials/platformer/07-04-killing-enemy-preview.gif)

## （オプション）ステップ 3：敵の頭上で跳ね返る

多くのプラットフォームゲームでは、プレイヤーが敵を踏みつけると、敵の上でプレイヤーが弾むような動きをします。それによって、敵にあるていどの弾力性を感じさせる効果があります。

次の手順で、敵の頭上でプレイヤーが跳ね返るようにします。

1. 「Player」オブジェクトに**再ジャンプを許可する**アクションを追加します。
2. 「Player」オブジェクトに**ジャンプキー押下シミュレーション**アクションを追加します。

![](/gdevelop5/tutorials/platformer/07-05-bounce-kill.jpg)

ゲームをプレビューすると、敵を踏みつけたときにプレイヤーが跳ね返るようになります。

![](/gdevelop5/tutorials/platformer/07-06-killing-enemy-bounce-preview.gif)

## 次のステップ

次は[プラットフォーマー チュートリアル Part 8](/ja/gdevelop5/tutorials/platformer/part-8) です。