---
title: トップダウン移動ビヘイビア
---
## トップダウン移動ビヘイビア

!!! tip

        **やってみよう！** 🎮
    [説明はいいから、とにかくトップダウン移動ビヘイビアが動くところを見たい？　わかりました、こちらを先にどうぞ。](/#サンプル)


![](/gdevelop5/behaviors/topdownmovementbehavioriconnew.jpg) 「トップダウン移動」ビヘイビアはオブジェクトに 4 方向または 8 方向に移動する機能を追加します。

####  ビヘイビアをオブジェクトに追加する

トップダウン移動ビヘイビアをオブジェクトに追加するには、まずオブジェクトメニューから、またはシーンに配置されたオブジェクトを右クリックして、オブジェクトプロパティを開きます。ポップアップメニューから［オブジェクトを編集］を選択します。次に［ビヘイビア］を選択し、ビヘイビア追加ボタンをクリックします。

####  トップダウン移動ビヘイビア

リストからビヘイビアを選択すると、オブジェクトにその能力が追加されます。

![](/gdevelop5/behaviors/top-down-movement-behav-inlist.png)

ビヘイビアを選択するとすぐに、利用できるオプションが表示されます。

![](/gdevelop5/behaviors/topdown-movement-options.png)

####  移動と回転の速度を変更する

加速度、減速度、最高速度を変更することで、移動の速さを調整できます。

回転速度を変更することで、回転の速さを調整できます。また、そもそも回転するかどうかも設定できます。回転については、あとでくわしく説明します。

####  角度オフセットを変更する

デフォルトでは、スプライトの対面方向は 0 度になっています。対面方向とは移動時に進行方向を向く側のことで、0 度はスプライトの右側を指します。この設定は角度オフセットの値で変更できます。次に GDevelop の座標概念を表す図を示します。

![](/gdevelop5/behaviors/gdevelop_covaliantcuriosity.jpg)

!!! note

    `AngleBetweenPositions` のようないくつかの式は -180～180 の範囲の値を返しますが、これは上の図と同じ概念です。角度 -45 度は、270 度と同じ角度になります。
####  斜め移動を許可する

![](/gdevelop5/behaviors/allow-diagonals-box.png)

このオプションはデフォルトで有効です。オブジェクトが斜めを含む 8 方向に移動できるようにします。このオプションを無効にすると、斜め方向に移動できなくなります。無効時に移動できるのは、上下左右の 4 方向のみです。斜め方向は含まれません。

####  デフォルトコントロール

![](/gdevelop5/behaviors/top-down-movement-default-controls-box.png)

トップダウン移動ビヘイビアは既定でデフォルトコントロールが有効になっています。デフォルトコントロールとはキーボードの 4 つの方向キー（矢印キー）のことです。オブジェクトの移動を独自制御したいときは、このオプションを無効にする必要があります。オプションのチェックを外した上で、オブジェクトを移動するときはトップダウン移動ビヘイビアが提供するアクションを実行します。

![](/gdevelop5/behaviors/top-down-movement-events.png)

####  オブジェクトを回転する

![](/gdevelop5/behaviors/top-down-movement-rotateobject-box.png)

デフォルトで、オブジェクトは移動方向に向かって回転します。回転速度はオプションで指定しできます。回転させたくない場合は、オプションのチェックを外して無効にします。

オプションはどれも、GDevelop の「イベント」タブで該当するアクションを実行すると、ゲーム中にいつでも変更できます。

![](/gdevelop5/behaviors/eventstabnew.jpg)



# サンプル

!!! tip

        **やってみよう！** 🎮
    オンラインで下記のサンプルを実行できます。

**スペースシューター**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://space-shooter){ .md-button .md-button--primary }

[![](/gdevelop5/behaviors/spaceshooter.png)](https://editor.gdevelop.io/?project=example://space-shooter)



**アイソメトリックゲーム**（2D ゲームで疑似的に 3D 画像を作り出す）

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://isometric-game){ .md-button .md-button--primary }

[![](/gdevelop5/behaviors/isometricgame.png)](https://editor.gdevelop.io/?project=example://isometric-game)