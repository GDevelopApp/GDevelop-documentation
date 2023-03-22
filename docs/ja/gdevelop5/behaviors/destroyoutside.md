---
title: 画面外のビヘイビアを消去
---
# 画面外のビヘイビアを消去

**[画面外のビヘイビアを消去するサンプルをすぐに見たいですか？](#Examples) **

これは、最もシンプルでありながら便利な動作の1つです。それをオブジェクトに追加すると、このオブジェクトのインスタンスがゲームシーン/画面の境界から出るたびに、このインスタンスは破棄されます。

これは、ゲームの速度を低下させる可能性のあるごみオブジェクトでゲームがいっぱいにならないようにする簡単な方法です。

### オブジェクトにビヘイビアを追加

オブジェクトに動作を追加するには、最初に\[オブジェクト\]リストにあるオブジェクトを右クリックしてオブジェクトプロパティを開きます。ポップアップリストから\[オブジェクトの編集\]を選択します。次に、「ビヘイビア」タブを選択します。「ビヘイビアを追加」ボタンをクリックします。

![](/gdevelop5/behaviors/addbehavior.jpg)

### 画面外に出たら消去

![](/gdevelop5/behaviors/destroy-outside-screen-behavior-inlist.png)

リストから破棄ビヘイビアを選択すると、オブジェクトが画面外にあるときはいつでもオブジェクトが削除されます。このビヘイビアには変更するオプションがなく、オブジェクトのすべてのインスタンスに自動的に適用されます。

# 例

!!! note

        **やってみよう！** 🎮

    サンプルをオンラインで実行できます

**スクリーン外のビヘイビア**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://space-shooter){ .md-button .md-button--primary }

[![](/gdevelop5/behaviors/outsidescreenbehaviorspaceshooter.png)](https://editor.gdevelop.io/?project=example://space-shooter)


**画面/シーンの外の弾丸を消去する**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://shoot-bullets){ .md-button .md-button--primary }

[![](/gdevelop5/behaviors/outsidescreendestroybullets.png)](https://editor.gdevelop.io/?project=example://shoot-bullets)


**弾丸の説明**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://shooting-bullets-explanation){ .md-button .md-button--primary }

[![](/gdevelop5/behaviors/bulletshootingexplanationexample.png)](https://editor.gdevelop.io/?project=example://shooting-bullets-explanation)
