---
title: シェイプペインタオブジェクト
---
# シェイプペインタオブジェクト

!!! note

        **やってみよう！** 🎮
    [シェイプペインタオブジェクトの例をすぐみたいですか](#Examples)

シェイプペインターオブジェクトを使用すると、ゲームで図形を描画できます。単純なユーザーインターフェイス（UI）要素を作成するのに役立ちます。シェイプペインタを使用して、選択ボックスを作成することもできます。

### シェイプペインタオブジェクトの追加

「シェイプペインタ」オブジェクトを追加するには、シーンエディターインターフェイスの右側にあるプロパティエディターリストから新しいオブジェクトを作成します。次に、新しいオブジェクトを選択してクリックし、「オブジェクトの編集」を選択します。表示されるリストで、「シェイプペインタ」をクリックします。 リストを下にスクロールして見つける必要がある場合があります。 ![add-shape-painter-object.png](/gdevelop5/objects/add-shape-painter-object.png)

### プロパティーを編集

次に、オブジェクトのプロパティを編集します。再び、右側の\[プロパティ\]リストから、オブジェクトをクリックします。表示されるポップアップリストから\[オブジェクトの編集\]を選択します。新しいウィンドウが開きます。ペインタオブジェクトのプロパティが表示されます。 ![shape-painter-properties.png](/gdevelop5/objects/shape-painter-properties.png)

### 色と不透明度を変更する

シェイプペインタのプロパティウィンドウには、オブジェクトの輪郭の色/色、オブジェクトの塗りつぶしの色/色、各色/色の不透明度、オブジェクトの輪郭のサイズを変更できるオプションがあります

![change-color-of-shape-painter.png](/gdevelop5/objects/change-color-of-shape-painter.png)

### 相対オブジェクト位置

デフォルトでは、画面に描画する図形の位置は、「シェイプペインタ」オブジェクトを基準にしています。 ![shape-painter-relative-position-property.png](/gdevelop5/objects/shape-painter-relative-position-property.png)

相対位置の場合、画面に図形を描画すると、その相対位置はX軸とY軸の位置0になります。Shapeペインタオブジェクトの位置になります。つまり、画面の位置がXで100ピクセル、Yで100ピクセルになる形状を描画する場合、位置は、画面上のどこにいても形状ペインタオブジェクトから100ピクセルになります。

ボックスがチェックされていない/チェックされていない場合、X軸とY軸の位置0は、オブジェクトの位置に関係なく、シーンの左上隅になります。

### 図形の描画

通常どおり、シェイプを描画するには、オブジェクトエディターを使用して新しいオブジェクトを作成します。「シェイプペインタ」オブジェクトをシーンに追加します。ここでプレビューを実行すると、何も表示されません。シェイプペインタオブジェクトは、基本的にオブジェクトの機能を追加するだけです。現時点では、「シェイプペインタ」プロパティ/パラメータのみを保持しています。シェイプを描画するには、シーン（イベント）エディターを使用する必要があります。イベントに慣れていない場合は、*Wikiのイベントページ*を確認することをお勧めします。

シーンイベントエディターに移動して、イベントを追加しましょう。新しいイベントを追加したら、「アクションを追加」テキストをクリックします。プリミティブ描画のイベントを見つけます。

![](/gdevelop5/objects/primitivedrawingeventchoices.png)

描画する3種類の形状から選択できます。円、線、長方形。画面に長方形を描画します。描画プロパティの下の長方形を選択します。

![draw-shape-event.png](/gdevelop5/objects/draw-shape-event.png)

右側で、使用する形状ペインタオブジェクトを選択します。左上の位置にXとYの両方に0を入力します。右下の位置にXとYの両方に100を入力します。

![draw-shape-event-properties.png](/gdevelop5/objects/draw-shape-event-properties.png)

シーンプレビューを起動すると、シーン/画面に幅100ピクセル、高さ100ピクセルの長方形が描画されます。

![rectanlge-shape-painter.png](/gdevelop5/objects/rectanlge-shape-painter.png)

相対位置を有効にしたままにすると、原点が0であっても、四角形がシェイプペインタオブジェクトと同じ位置にあることに気付くでしょう。このオプションを無効にして、プレビューを再度起動すると、オブジェクトが表示されます。シーンの左上隅に描画されます。

イベントを使用して、その場で図形のプロパティを変更することもできます

![](/gdevelop5/objects/shapepaintereventsexample.png)

## 例

!!! note

        **やってみよう！** 🎮
    サンプルをオンラインで実行できます

[![](/gdevelop5/objects/shapepainterobject.png)](https://editor.gdevelop.io/?project=example://advanced-shape-based-painter)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://advanced-shape-based-painter){ .md-button .md-button--primary }
