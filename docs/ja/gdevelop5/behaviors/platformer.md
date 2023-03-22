---
title: プラットフォーム型のビヘイビア
---
# プラットフォーム型のビヘイビア

!!! note

        **やってみよう!** 🎮
    [プラットフォームのビヘイビアのサンプルをすぐに見たいですか？](#Examples)

ボタンをクリックするだけで、ゲームのプラットフォームタイプ（２Dマリオゲームタイプ)のビヘイビア(動作)とキャラクターコントロールを設定できます。

## プラットフォーム型ビヘイビア

![select-platform-behavior.png](/gdevelop5/behaviors/select-platform-behavior.png) まず、新しいオブジェクトを作成します。 「クリックしてオブジェクトを追加」オプションをクリックして、シーンの「オブジェクト」リストからオブジェクトを選択します。 表示されるリストから、「オブジェクトの編集」を選択します。表示されるリストから「プラットフォーム」ビヘイビアを選択します。 これで、オブジェクトをプラットフォームタイプに変えることができます。 オブジェクトが「プラットフォーム」として定義されると、「プラットフォームキャラクター」オブジェクトはその上を歩くことができます。

\[プラットフォーム\]オプションを選択すると、プラットフォームのビヘイビアオプションリストが表示されます。

![platform-behavior-options.png](/gdevelop5/behaviors/platform-behavior-options.png)

### プラットフォームの種類

プラットフォームのビヘイビアをクリックすると、3つの異なるプラットフォームの種類から選択できます。

![platform-type-button.png](/gdevelop5/behaviors/platform-type-button.png)

* **プラットフォーム:** これはデフォルトです。このデフォルトのビヘイビア動作では、オブジェクトは通常のプラットフォームブロックとして設定されます。キャラクターはプラットフォームブロックと衝突したり、上を歩いたりすることができます。 * **ジャンプスループラットフォーム:** このオプションを選択すると、キャラクターはプラットフォームブロックと衝突たり上を歩くことができますが、キャラクターはプラットフォームブロックの下からジャンプすることもできます。 * **ラダー:** ラダーとはハシゴのことです。その名前が示すように、このオプションはオブジェクトをラダーに変えます。キャラクターオブジェクトはラダーオブジェクトと衝突できません。ラダーオブジェクトの上を歩くことはできませんが、キャラクターオブジェクトがラダーオブジェクトと重なると、キャラクターはラダーオブジェクトを使用して登ったり降りたりすることができます

### ブロックの端をつかむ

プラットフォームブロックの棚は、デフォルトで設定されています。「ブロックの端をつかむ」とは、キャラクターオブジェクトがブロックの端の近くにジャンプしたときに、端をつかむことができることを意味します。この機能が必要ない場合は、このオプションのチェックを外してください。必要な場合は、チェックボックスがオンになっていることを確認してください ![ledges-canbe-grabbed-option.png](/gdevelop5/behaviors/ledges-canbe-grabbed-option.png)

ブロックの端の幅(オフセット)は、Y軸でも変更できます。 ![grab-offset-option.png](/gdevelop5/behaviors/grab-offset-option.png) オフセットオプションを使用すると、キャラクターのアニメーションに合わせてブロックの端の位置を変更できます。

## プラットフォーム型キャラクタのビヘイビア

![select-platformer-character-behavior.png](/gdevelop5/behaviors/select-platformer-character-behavior.png)

リストから「プラットフォーム型キャラクター」を選択すると、オブジェクトを「プラットフォーム型キャラクター」に変えることができます。 「プラットフォーム型キャラクター」オプションを選択すると、プラットフォームキャラクターのプロパティ/パラメーターが表示されます。 ![platformer-character-behavior-options.png](/gdevelop5/behaviors/platformer-character-behavior-options.png)

すべてのオプションを確認するには、スクロールする必要があるかもしれません。

### コントロール

プラットフォーム型キャラクターの動作には、キャラクターを制御するために設定されたデフォルトキーが設定されています。矢印キーとシフトキーです。 デフォルトのコントロールを使用したくない場合は、「プラットフォームの文字」オプションの下にある「デフォルトのコントロール」ボックスのチェックを外して、デフォルトのコントロールをオフにする必要があります。 ![](/gdevelop5/behaviors/platformer-defaultcontrols-box.png)

### キャラクタの端をつかむ

プラットフォームのビヘイビアと同様に、「プラットフォーム型キャラクター」の「端をつかむ」オプションがあります。このオプションにより、キャラクターオブジェクトがプラットフォームブロックの端をつかむことができます。このオプションはデフォルトで無効になっています。有効にするには、オプションリストのボックスをチェックします。 ![](/gdevelop5/behaviors/platformer-character-grabledge-box.png)

このオプションを有効にすると、キャラクターはすべてのプラットフォームブロックの端をつかむことができます。

ここでも、「プラットフォームのビヘイビア」と同様に、キャラクターのY軸に幅(オフセット)を設定できます。プラットフォームのビヘイビアとは異なり、X軸に幅の許容値を設定することもできます。

![](/gdevelop5/behaviors/platformer-character-grab-tolerancex.png)

幅の許容値を変更することで、キャラクターがプラットフォームオブジェクトをゲットできるようにするために、キャラクターがプラットフォームブロックにどれだけ接近する必要があるかを設定できます。

### スロープの最大角度

![](/gdevelop5/behaviors/platformer-character-maximum-slope.png) この値を変更することにより、プレイヤーが登ることができる斜面の最大角度を設定できます。デフォルトは0です。 デフォルト0は、キャラクターが平面上でのみ移動できることを意味します。

### スピードと重力

![](/gdevelop5/behaviors/platformer-character-speed-options.png) 「速度と重力」オプションで対応する値を変更することにより、キャラクターが加速、減速、移動、落下、ジャンプする速度を変更できます。これらのオプションは一目瞭然だと思うので、あまり説明する必要はないと思います。 キャラクターオブジェクトを遅くしたい場合、これらの値を減します。キャラクターオブジェクトをスピードアップしたい場合、これらの値を増やします。

ここのすべてのオプションは、ゲーム中いつでもイベントを使用して変更できます。

# サンプル

!!! note

        **やってみよう！** 🎮
    これらのサンプルはオンラインで実行できます

**プラットフォーム型ビヘイビアのサンプル**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://platformer){ .md-button .md-button--primary }

[![](/gdevelop5/behaviors/platformerbehavior.png)](https://editor.gdevelop-app.com/?project=example://platformer)


**平行スクロール型ビヘイビアのサンプル**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://parallax-scrolling){ .md-button .md-button--primary }

[![](/gdevelop5/behaviors/parallaxscrollingbehavior.png)](https://editor.gdevelop-app.com/?project=example://parallax-scrolling)
