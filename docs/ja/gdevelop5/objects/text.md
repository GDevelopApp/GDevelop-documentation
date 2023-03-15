---
title: テキストオブジェクト
---
# テキストオブジェクト

!!! note
    
        **やってみよう！** 🎮  
    [テキストオブジェクトのサンプルがすぐにみたいですか？](#Examples) 

テキストオブジェクトは、画面にテキストを表示します。作成時にテキストのプロパティ（サイズや色など）をカスタマイズできます。イベントを使用して、ゲームプレイ中にテキストオブジェクトのプロパティを変更することもできます。

## テキストオブジェクトのプロパティ

### デフォルトのテキスト

中央のテキストフィールドを使用して、オブジェクトによって表示されるテキストを設定できます。 ![](/gdevelop5/objects/change-text.png)

### サイズ

サイズフィールドを使用して、テキストのデフォルトのフォントサイズを設定します。 ![](/gdevelop5/objects/change-size-of-text.png)

### 色

テキストの色は、パレットの色の正方形をクリックして変更できます。 ![](/gdevelop5/objects/change-color-of-text.png)

### フォントとスタイル

太字と斜体から選択できます。テキストにカスタムフォントを設定することもできます。 ![](/gdevelop5/objects/change-style-of-text.png)

### 追加効果

* イベントを使用して**グラデーション**を作成できます。 ![textgradient.png](/gdevelop5/objects/textgradient.png)

最大4色を選択できます。

* イベントを使用して**シャドウ(影)**を設定できます。

![](/gdevelop5/objects/showtextshadow.png) ![](/gdevelop5/objects/changetextshadow.png)

影を変更するときは、色、距離、ぼかし、角度を選択できます。これは、明るい色でグロー効果を作成するためにも使用できます。

* オブジェクトの**不透明度**を変更できます：

![](/gdevelop5/objects/changetextopacity.png)

* オブジェクトの**スケーリング（拡大・縮小）**を変更できます

![](/gdevelop5/objects/textscaling.png)

![modifytextscale.png](/gdevelop5/objects/modifytextscale.png)

次の3つのオプションがあります：「スケール」（X軸とY軸の両方にスケールするように比率を設定）、「X軸のスケール」（幅）、および「Y軸のスケール」（高さ）。

### 他のスタイル

イベントを使用して、他のプロパティを変更できます。

- Bold(太字)
- Italic(斜体)
- Padding
- Alignment
- Wrapping
- Wrapping Width

## イベント中での変更

イベントを使用して、ゲーム中にテキストのほとんどのプロパティを操作できます。たとえば、テキストフォントのサイズを変更するイベントは次のとおりです。

![changetextsizeviaevents.png](/gdevelop5/objects/changetextsizeviaevents.png)

## 例

!!! note
    
        **やってみよう！** 🎮  
    サンプルをオンラインで実行

テキストオブジェクトを操作する

[![](/gdevelop5/objects/changetextexample1.png)](https://editor.gdevelop-app.com/?project=example://manipulate-text-object)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://manipulate-text-object){ .md-button .md-button--primary }

テキストのフェードインとフェードアウト

[![](/gdevelop5/objects/textfadeoutinexample.png)](https://editor.gdevelop-app.com/?project=example://text-fade-in-out)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://text-fade-in-out){ .md-button .md-button--primary }

テキストのタイピング表示

[![](/gdevelop5/objects/type-ontexteffectexample.png)](https://editor.gdevelop-app.com/?project=example://type-on-text-effect)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://type-on-text-effect){ .md-button .md-button--primary }
