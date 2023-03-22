---
title: タイルスプライトオブジェクト
---
# タイルスプライトオブジェクト

!!! note

        **やってみよう！** 🎮
    [タイルスプライトオブジェクトのサンプルがすぐにみたいですか？](#Examples)

タイルスプライトオブジェクトを使用すると、タイルのように敷き詰めて画像を表示できます。シーン内のオブジェクトをスケーリングすることにより、タイルセットのサイズを増減できます。

タイルスプライトオブジェクトは、プラットフォームゲームでプラットフォームを作成するために使用できます。同じ画像のグループとして使用することもできます。この場合、複数のスプライトオブジェクトを扱う必要はありません。

![](/gdevelop5/objects/tiled-sprite-object.png)

### タイルスプライトオブジェクトを追加する

タイルスプライトオブジェクトをシーンに追加するには、オブジェクトリストから新しいオブジェクトを作成します。開いたパネルから「タイルスプライト」オプションを選択します。

![](/gdevelop5/objects/add-tiled-sprite-object.png)

### オブジェクトのプロパティを開く

次に、再び右側のオブジェクトリストから、オブジェクトを右クリックしてオブジェクトのプロパティを開きます。表示されるポップアップリストから\[オブジェクトの編集\]を選択します

![tiled-sprite-properties.png](/gdevelop5/objects/tiled-sprite-properties.png)

### 画像を追加する

オブジェクトに画像を追加するには、「画像を選択」フィールドをクリックします。ローカルファイルブラウザがコンピューターで開きます。お好みの画像を選択してください。

![add-image-to-tiled-sprite.png](/gdevelop5/objects/add-image-to-tiled-sprite.png)

選択した画像は、右側のプレビューウィンドウに表示されます。

![tiled-sprite-image-preview.png](/gdevelop5/objects/tiled-sprite-image-preview.png)

### デフォルトのサイズを変更する

下部の\[デフォルトの幅\]と\[デフォルトの高さ\]の値を変更することにより、タイルスプライトオブジェクトのデフォルトサイズを変更できます。

![](/gdevelop5/objects/tiled-sprite-default-size.png)

デフォルトのサイズは、オブジェクトに表示される画像の表示に影響します。たとえば、これは、オブジェクトサイズが32×32の場合の画像の見え方です。

![](/gdevelop5/objects/tiled-sprite-3232.png)

ご覧のとおり、上記の画像はオブジェクトに合わせて拡大縮小されませんが、画像は部分的にしか見えません。

オブジェクトのサイズを100×100に設定すると（下図を参照）、オブジェクトのサイズは実際の画像よりも大きくなるため、空のスペースを埋めるために画像の描画を繰り返します。

![](/gdevelop5/objects/tiled-sprite-100100.png)

### オブジェクトを拡大縮小する

シーンエディターでオブジェクトをスケーリングして、必要な外観/サイズに変更することで、即座に結果を得ることができます。

![](/gdevelop5/objects/scale-tiled-sprite.png)

シーン（イベント）エディターを使用して、タイルスプライトのサイズを変更することもできます。イベントエディターを使用すると、ゲームプレイがより流動的で興味深いものになります。

![](/gdevelop5/objects/scaleasprite.png)

## 例

!!! note

        **やってみよう！** 🎮
    サンプルをオンラインで実行できます

[![](/gdevelop5/behaviors/platformerbehavior.png)](https://editor.gdevelop.io/?project=example://platformer)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://platformer){ .md-button .md-button--primary }
