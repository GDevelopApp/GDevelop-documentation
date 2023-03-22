---
title: BBText オブジェクト
---
# BBText オブジェクト

!!! tip

        **やってみよう！** 🎮

    [説明はいいから、とにかく BBText オブジェクトが動くところを見たい？　わかりました、こちらを先にどうぞ。](/#サンプル)


**BBText** はリッチな「複数スタイル」テキストを画面に表示するオブジェクトです。「BBCode」スタイルタグを使って、テキストの一部のスタイルプロパティ（たとえばサイズや色など）を個別にカスタマイズできます。またイベントを使うと BBText オブジェクトのプロパティをゲーム中に変更することもできます。

!!! warning

    これを[テキストオブジェクト](/ja/gdevelop5/objects/text)と混同しないようにしてください。テキストオブジェクトもテキストを表示しますが、フォントとサイズは 1 種類しか指定できません。また書式指定用のタグも使えません。もし高度な書式指定が必要なければ、[テキストオブジェクト](/ja/gdevelop5/objects/text)の使用を最初に検討することをお勧めします。そちらの方がパフォーマンスに優れており、よりシンプルです。

!!! note

    BBCode に対応するため、この拡張機能は内部的に [pixi-multistyle-text](https://github.com/tleunen/pixi-multistyle-text/) を改変して使用しています。技術的な詳細に興味がある方は、対応しているスタイル機能が[こちらにリスト化](https://pixijs.download/dev/docs/PIXI.TextStyle.html)されているので、参照してください。

## 使用できる BBCode タグ

![](/gdevelop5/objects/stylestag.png)

BBText オブジェクトは次の一般的なタグを使用できます。

  * `[b]太字[/b]`
  * `[i]斜体[/i]`
  * `[color=#hexColor]色を付けたテキスト[/color]`
  * `[font=times]フォントファミリーを指定したテキスト[/font]`
  * `[size=23]サイズ 23px のテキスト[/size]`

GDevelop が対応する追加スタイルは次の通りです。

  * `[outline=#hexColor]指定色で縁取りしたテキスト[/outline]`
  * `[shadow=#hexColor]指定色で影を落としたテキスト[/shadow]`
  * `[spacing=12] 文字間に追加の余白を空けたテキスト[/spacing]`
  * `[align=center]左右中央揃えにしたテキスト（left と right 指定も可能）[/align]`

`#hexColor` は 16 進法で表記した色指定です。たとえば #000000 は黒に、#FFFFFF は白になります。[オンラインで色探し](https://htmlcolorcodes.com/)を簡単にできます。

## デフォルトのスタイル

画面に表示するテキストには、あらかじめデフォルトのスタイルを設定できます。タグによる指定は、このデフォルトのスタイルを前提に追加されます。

![](/gdevelop5/objects/basestylebbtext.png)

  * 基本色：デフォルトは黒です。
  * 基本の不透明度：0 ~ 255。0 は完全な透明になります。
  * 基本フォントサイズ：全体のフォントサイズ。デフォルトは 24px です。
  * 基本フォントファミリー：デフォルトは Arial です。
  * 行揃えの位置：デフォルトは左です。"left"、"right"、"center" のどれかになります。
  * BBCode 書式付きテキスト：表示するテキスト。デフォルトはタグを使ったデモンストレーションです。
  * 折り返し：有効にすると、オブジェクト幅にしたがって行を折り返して複数行になります。
  * 開始時に表示：このオプションのチェックを外すと、シーン開始時にオブジェクトは非表示になります。表示するにはイベントを使います。

これらのプロパティはすべて、イベントシートでオブジェクトのアクションや条件を使って変更できます。

## サンプル

!!! tip

        **やってみよう！** 🎮

    オンラインで下記のサンプルを実行できます。

[![](/gdevelop5/objects/bbtext-example.jpg)](https://editor.gdevelop.io/?project=example://bbtext-object-demo)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://bbtext-object-demo){ .md-button .md-button--primary }