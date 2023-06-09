---
title: キーボード
---
# キーボード

GDevelop はすべてのキーボード入力に対応しています。特定のキーを押しているか放したかを調べる条件も利用できます。

## 何かのキーを押している

この条件は、何かのキーを押している場合に、対応するアクションを実行します。

## キーを押している

この条件は、指定したキーを押している場合に、対応するアクションを実行します。

## キーを放した

この条件は、指定したキーを放した直後に一度だけ、対応するアクションを実行します。

## キーを押している（テキスト式）

キー名をテキスト式の形式で指定したキーを押しているかどうかをテストします。たとえば左矢印キーを押しているかどうかを調べたい場合は、"Left" と入力します。

!!! danger

    キー名は忘れずに二重引用符でくくってください。

![](/gdevelop5/all-features/annotation_2019-06-20_191229.png)

## キーを放した（テキスト式）

キー名をテキスト式の形式で指定したキーを放した直後かどうかをテストします。たとえば左矢印キーを放した直後かどうかを調べたい場合は、"Left" と入力します。

![](/gdevelop5/all-features/annotation_2019-06-20_191302.png)

## 最後に押されたキー

式「最後に押されたキー」は、最後に押されたキーを文字列形式で返します。たとえば最後に押されたキーが左矢印キーだった場合は、"Left" を返します。