---
title: プラットフォーマー チュートリアル Part 4：プレイヤーキャラクターをアニメーションさせよう
---
# プラットフォーマー チュートリアル Part 4：プレイヤーキャラクターをアニメーションさせよう

今回はプレイヤーキャラクターにアニメーションをさせる方法を説明します。

次の内容を含んでいます。

- オブジェクトにアニメーションを追加する
- イベントを使ってアニメーションをトリガーする

## シリーズ

いま読んでいるのは[プラットフォーマー チュートリアル](/ja/gdevelop5/tutorials/platformer)の **Part 4** です。

1. [プラットフォーマー チュートリアル Part 1](/ja/gdevelop5/tutorials/platformer)
2. [プラットフォーマー チュートリアル Part 2](/ja/gdevelop5/tutorials/platformer/part-2)
3. [プラットフォーマー チュートリアル Part 3](/ja/gdevelop5/tutorials/platformer/part-3)
4. プラットフォーマー チュートリアル Part 4
5. [プラットフォーマー チュートリアル Part 5](/ja/gdevelop5/tutorials/platformer/part-5)
6. [プラットフォーマー チュートリアル Part 6](/ja/gdevelop5/tutorials/platformer/part-6)
7. [プラットフォーマー チュートリアル Part 7](/ja/gdevelop5/tutorials/platformer/part-7)
8. [プラットフォーマー チュートリアル Part 8](/ja/gdevelop5/tutorials/platformer/part-8)


## ステップ 1：プレイヤーにジャンプするアニメーションを追加する

GDevelop ではオブジェクトにアニメーションを追加して、そのアニメーションを（プレイヤーがジャンプしたときのような）何かのきっかけを合図にトリガーすることができます。

### 「Player」オブジェクトに「Jumping」アニメーションを追加する

「Player」オブジェクトにジャンプするアニメーションを追加する手順は次の通りです。

1. **オブジェクト**パネル上で **Player** オブジェクトを右クリックします。
2. **オブジェクトを編集**を選択します。
3. **アニメーションを追加**をクリックします。
4. アニメーションの名前に「Jumping」（ジャンプ）と入力します。
5. **追加**をクリックします。
6. ファイルを開くダイアログが表示されたら、アセットの「p1_jump.png」を選択します。

![](/gdevelop5/tutorials/platformer/part-4-01.jpg)

これでオブジェクトにアニメーションは追加されましたが、それをトリガーするものが何もないのでまだ再生しない状態です。

### 「Jumping」アニメーションをトリガーする

「Jumping」アニメーションをトリガーする手順は次の通りです。

1. イベントエディターに切り替えます。
2. 新しいイベントを作成します。
3. 「Player」オブジェクトの**ジャンプ中である**条件を追加します。
4. **名前でアニメーションを変更する**アクションをイベントに追加します。
5. **アニメーションの名前**フィールドに「"Jumping"」と入力します。名前を二重引用符でくくるのをお忘れなく（つまり `"Jumping"` です）。
6. **OK**をクリックします。

![](/gdevelop5/tutorials/platformer/part-4-02.jpg)

ここまでの変更によって、ジャンプするアニメーションがトリガーされるようになりました。

![](/gdevelop5/tutorials/platformer/part-4-03.gif)

## ステップ 2：プレイヤーに待機アニメーションを追加する

ジャンプするアニメーションには、ひとつ問題があります。プレイヤーがジャンプし終わっても、リセットされないのです。これを改善するには、プレイヤーが着地したときに「待機」アニメーションをトリガーするようにします。

### プレイヤーの接地状態を検出する

GDevelop はプラットフォームの表面を_地面_として認識します。

オブジェクトの接地状態は、次の手順で検出できます。

1. 新しいイベントを作成します。
2. 「Player」オブジェクトの**は地面上にいる**条件を追加します。

![](/gdevelop5/tutorials/platformer/part-4-04.jpg)

### プレイヤーの静止状態を検出する

「待機」アニメーションをトリガーするときは、プレイヤーが静止していないと困ります。次のステップで説明しますが、プレイヤーがもし移動していたら「走り」アニメーションをトリガーすべきなので。

次の手順で、プレイヤーが移動していないことを確認します。

1. 「Player」オブジェクトの**は動いている**条件を追加します。
2. **条件を反転**オプションを_オン_に切り替えます。

**条件を反転**オプションには、条件のテスト結果を反転させる作用があります。したがって**は動いている**条件は、今や**は動いていない**条件に変わったということです。

![](/gdevelop5/tutorials/platformer/part-4-05.jpg)

### 「Idle」アニメーションをトリガーする

ここまでの条件を両方満たしたときこそ、「待機」アニメーションをトリガーすべきときです。

1. **名前でアニメーションを変更する**アクションを追加します。
2. **アニメーションの名前**フィールドに「"Idle"」と入力します。名前を二重引用符でくくるのをお忘れなく（つまり `"Idle"` です）。

![](/gdevelop5/tutorials/platformer/part-4-06.jpg)

ゲームをプレビューすると、ジャンプした後「Player」オブジェクトが「待機」アニメーションにリセットされるはずです。

![](/gdevelop5/tutorials/platformer/part-4-jumping-with-idle-animation.gif)

## ステップ 3：プレイヤーに走るアニメーションを追加する

### 「Player」オブジェクトに「Running」アニメーションを追加する

1. 「Player」オブジェクトに「Running」と名付けたアニメーションを追加します。
2. ファイルを開くダイアログが表示されたら、以下のアセットをすべて選択します。

   - p1_walk03.png
   - p1_walk04.png
   - p1_walk05.png
   - p1_walk06.png
   - p1_walk07.png
3. **ループ**オプションにチェックを入れます。このオプションを有効にすると、アニメーションを（一回だけ再生して停止するのではなく）連続再生するようになります。
4. **適用**をクリックします。

![](/gdevelop5/tutorials/platformer/part-4-07.jpg)

### 「Running」アニメーションをトリガーする

1. 新しいイベントを作成します。
2. 「Player」オブジェクトの**は地面上にいる**条件を追加します。
3. 「Player」オブジェクトの**は動いている**条件を追加します。
4. **名前でアニメーションを変更する**アクションをイベントに追加します。
5. **アニメーションの名前**フィールドに「"Running"」と入力します。名前を二重引用符でくくるのをお忘れなく（つまり `"Running"` です）。
6. **OK**をクリックします。

![](/gdevelop5/tutorials/platformer/part-4-08.jpg)

ゲームをプレビューすると、プレイヤーが移動したときに「走り」アニメーションが再生されます。

![](/gdevelop5/tutorials/platformer/part-4-running-animation.gif)

## 次のステップ

次は[プラットフォーマー チュートリアル Part 5](/ja/gdevelop5/tutorials/platformer/part-5) です。