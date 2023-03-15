---
title: ドラッグ対応オブジェクトビヘイビア
---
# ドラッグ対応オブジェクトビヘイビア

!!! tip
    
        **やってみよう！** 🎮  
    [説明はいいから、とにかくドラッグ対応ビヘイビアが動くところを見たい？　わかりました、こちらを先にどうぞ。](/#サンプル)
    

ドラッグ対応オブジェクトビヘイビアは、オブジェクトをマウスでドラッグしたり、タッチスクリーンであればタッチでドラッグできるようにします。

## ドラッグ対応ビヘイビアをオブジェクトに追加する

ドラッグ対応ビヘイビアをオブジェクトに追加するには、新しくオブジェクトを作成するか、またはオブジェクトリストから既存オブジェクトのプロパティを開きます。ポップアップメニューから［オブジェクトを編集］を選択します。次に［ビヘイビア］を選択し、ビヘイビア追加ボタンをクリックします。 

![](/gdevelop5/behaviors/addbehavior.jpg)

リストからビヘイビアを選択します。

![](/gdevelop5/behaviors/draggable-object-behavior-inlist.png)

## プロパティとイベント

このビヘイビアには、特に設定はありません。ビヘイビアを追加したオブジェクトには自動的に機能が適用されます。
イベントを使うと、特定のオブジェクトのビヘイビアを無効化したり再有効化したりできます。これによってプレイヤーが移動できるオブジェクトや時間帯を制限できます。

イベントを使うと、オブジェクトがドラッグ操作中かどうかを調べることもできます。

![](/gdevelop5/behaviors/eventcondtiondraggableobject.png)


# サンプル 

!!! tip
    
        **やってみよう！** 🎮  
    オンラインで下記のサンプルを実行できます。

**グリッドに吸着**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://snap-object-to-grid){ .md-button .md-button--primary }

[![](/gdevelop5/behaviors/snaptogrid.png)](https://editor.gdevelop-app.com/?project=example://snap-object-to-grid)

  

**弾丸を放物線上に発射**（放物線は U 字型の鏡面対称になる平面曲線です。基本的に、発射されたオブジェクトは目標に向かって曲線状の軌跡を描きます）

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://shoot-bullet-in-parabola){ .md-button .md-button--primary }

[![](/gdevelop5/behaviors/shootbulletparabolapattern.png)](https://editor.gdevelop-app.com/?project=example://shoot-bullet-in-parabola)

  

**セーブとロード**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://save-load){ .md-button .md-button--primary }

[![](/gdevelop5/behaviors/saveandloadexample.png)](https://editor.gdevelop-app.com/?project=example://save-load)

  

**経路探索の基本**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://pathfinding-basics){ .md-button .md-button--primary }

[![](/gdevelop5/behaviors/pathfindingbasics.png)](https://editor.gdevelop-app.com/?project=example://pathfinding-basics)