---
title: 一般的な変換
---
# 一般的な変換

このカテゴリーは、角度の変換や数値とテキストの相互変換をサポートします。

## 角度の変換

角度は度とラジアンのどちらの単位でも表現できます。円の角度は 360 度または 2π ラジアンと形容されます。同様に、半円は 180 度または π ラジアンと形容されます。

数式の中で `ToRad` か `ToDeg` を使うと、ラジアンと度をお互いに変換できます。

![](/wiki/pres_coord2.png)

## 数値とテキストの相互変換

文字列フィールドにはテキストのみを入力できます。同様に、数値フィールドには数値のみを入力できます。

数式中に文字列を入力するには、「テキスト→数値」式で文字列を数値に変換する必要があります。もし文字列中に数字以外の文字が含まれていた場合、式は非数を表す「NaN」（Not a Number）を返します。

逆に文字列式中に数値を入力するには、「数値→テキスト」式で数値を文字列に変換する必要があります。このとき数値が 1e+21 以上であれば、式は科学表記（指数表記）の値を返します。