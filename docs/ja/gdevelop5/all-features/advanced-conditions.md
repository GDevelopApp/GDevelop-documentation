---
title: 高度な条件
---
# 高度な条件

## かつ（And）論理操作
![](/gdevelop5/all-features/and.png)

イベントで「**かつ**」条件を使用すると、すべての副条件が真である場合のみ、アクションを実行します。もし一つでも副条件が偽だったら、アクションは実行されません。
!!! note

    「**かつ**」条件はふつう、「**または**」条件の内部で使われます。同じイベントボックス内に 2 つの条件を並べると、それだけで「**かつ**」条件を使ったのと同じ意味になるため、「かつ」条件単独でわざわざ使うことは、あまりありません。



## または（Or）論理操作
![](/gdevelop5/all-features/or-condition.png)

イベントで「**または**」条件を使用すると、一つでも副条件が真であれば、アクションを実行します。もし真になる副条件が一つもなければ、アクションは実行されません。

!!! warning

    「または」条件は、[GDevelop のオブジェクトフィルタリングロジック](http://wiki.compilgames.net/doku.php/ja/gdevelop5/tutorials/basic-game-making-concepts#イベントとそれがいかにしてオブジェクトを選択するか)に関して特殊な振る舞いをします。条件判定の対象になったオブジェクトは、条件に合致しない場合は_選択されません_。そのため、これらのオブジェクトを対象にしたアクションは動作しないことがあります。状況によっては、「すべてのインスタンスを選択する」アクションを併用することで問題が解決するかもしれません。そうでなければ、「または」条件を置き換える必要があります。

## ではない（Not）論理操作
![](/gdevelop5/all-features/not-condition.png)

イベントで「**ではない**」条件を使用すると、副条件の結果を反転した結果を返します。副条件が真であれば偽を返し、副条件が偽であれば真を返します。

## 一度だけ実行する
![](/gdevelop5/all-features/trigger-once-condition.png)

「**真のあいだ一度だけ実行する**」条件を使用すると、条件が真になっているあいだ、そのイベントのアクションを一度だけ実行します。たとえばキーが押された時に一回だけ何かしたいが、キーが連続何フレームに渡って押され続けるか予測できない（1 フレームだけしか押されないとは言い切れない）というような場合に使います。

!!! warning

    この条件はオブジェクトに適用されます。インスタンスには適用されません。個々のインスタンスについて一度だけトリガーさせる必要がある場合は、代わりにインスタンス変数を使ってください。

## 二つの数値を比べる
![](/gdevelop5/all-features/compare-two-numbers-condition.png)

**二つの数値を比べる**条件は、2 つの数値/式をテスト記号に基づいて比較します。テストをパスした場合は、条件が真を返し、対応するアクションが実行されます。

たとえば最初の数値が 5 でテスト記号が「<（未満）」、2 番目の数値に 7 が入力されたとします。この場合、5 は 7 未満なので条件は真を返します。

## 二つの文字列を比べる
![](/gdevelop5/all-features/compare-two-strings-condition.png)

**二つの文字列を比べる**条件は、2 つの文字列/式をテスト記号に基づいて比較します。テストをパスした場合は、条件が真を返し、対応するアクションが実行されます。