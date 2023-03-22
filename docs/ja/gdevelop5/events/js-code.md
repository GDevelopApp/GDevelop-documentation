---
title: JavaScript コードイベント
---
# JavaScript コードイベント

このイベントを使用すると、ゲームに独自の **JavaScript コード**を追加できます。JavaScript プログラミングに精通した上級ユーザーのみが使用することを意図しています。

JavaScriptイベントを追加するには、イベントシートツールバーの![](/gdevelop5/events/chooseaddeventiconnew.png)ボタンをクリックし、JavaScript コードを選択します。

![](/gdevelop5/events/insert-javascript-code-eventnew.png)

追加したら、コードをクリックして編集します。GDevelop がイベントに到達するたびにコードが実行されます。

コードには Strict モードが適用されますが、_runtimeScene_ という名前の変数にはアクセスできます。この変数 runtimeScene は、実行中のシーンを表します。以下は標準の GDevelop イベントと、JavaScript を使った同等のイベントの例です。

![](/gdevelop5/events/javascript-code-example.png)

runtimeScene パラメーターの隣にある「ここをクリックして Javascript に渡すオブジェクトを選択」をクリックすると、「objects」という配列変数が利用可能になります。ゲームオブジェクトを選択するメニューが表示されるので、必要なゲームオブジェクトを選択します。ここで指定したオブジェクトはパラメーターとなる JavaScrpt オブジェクト配列に追加されます。

![](/gdevelop5/events/jsruntimeclickeventnew.png)

「objects」は、選択したオブジェクトのインスタンスを含む配列です。これはアクションや条件が使用するものとまったく同じです。たとえば次の図は、JavaScript イベントをサブイベントとして使用するイベントです。JavaScript イベントは、プレイヤーと衝突している敵を操作します。

![](/gdevelop5/events/javascript-code-with-objects-example.png)

## サンプル

!!! tip

        **やってみよう！** 🎮
    オンラインで下記のサンプルを実行できます。下記で示すリンクを開いてください。GDevelop で新規プロジェクトを作成する画面で例タブをクリックすると、もっとたくさんの例を利用できます。

[![400](https://editor.gdevelop.io/?project=example://text-to-speech)](/ gdevelop5/events/javascripttexttospeechexample.png)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://text-to-speech){ .md-button .md-button--primary }

[![400](https://editor.gdevelop.io/?project=example://javascript-blocks-in-platformer)](/gdevelop5/events/platformerjavascriptblocksexample.png)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://javascript-blocks-in-platformer){ .md-button .md-button--primary }

## ドキュメント 📚

  * **[ゲームエンジンのドキュメント](https://docs.gdevelop-app.com/GDJS%20Runtime%20Documentation/)** を参考にしてください。
  * **[GDJS ゲームエンジンのソースコード](https://github.com/4ian/GD/tree/master/GDJS/Runtime)**も直接ブラウズできます。


## コードサンプル

### 変数値を読み書きする

```javascript
var myVar = runtimeScene.getVariables().get("MyVar");
var myVar2 = runtimeScene.getVariables().get("MyVar2");

var currentValue = myVar.getAsNumber();
myVar.setNumber(currentValue+1);

myVar2.setString("Hello, world");
```

ドキュメント [gdjs.Variable](https://docs.gdevelop-app.com/GDJS%20Runtime%20Documentation/gdjs.Variable.html) と [gdjs.VariablesContainer](https://docs.gdevelop-app.com/GDJS%20Runtime%20Documentation/gdjs.VariablesContainer.html) を参照してください。

### オブジェクトを別の位置に移動し、ゲームが最初のフレームをレンダリングしているかどうかを確認する

```javascript
const players = runtimeScene.getObjects("Player");
const playerHitBoxes = runtimeScene.getObjects("PlayerHitBox");
// プレイヤーかヒットボックスオブジェクトが見つからなければ、すぐに中止する。
if (playerHitBoxes.length === 0 || players.length === 0) return;

// 最初のフレームだけで実行（つまりシーン開始時）。
if (runtimeScene.getTimeManager().isFirstFrame()) {
  // PlayerHitBoxes の最初のインスタンスを非表示にする。
  playerHitBoxes[0].hide();
}

// プレイヤーオブジェクトの位置を設定する。
players[0].setX(playerHitBoxes[0].getX() - 12);
players[0].setY(playerHitBoxes[0].getY());
```

同等のイベントは次のとおりです。
![](/gdevelop5/events/hide-and-set-position-player-hitbox.png)

### オブジェクトのビヘイビアの条件を調べてアニメーションを変更する

!!! tip

    以下のコードでは、アノテーション（注釈）と呼ばれるコメントを使用しています

JavaScript の変数宣言の直前に**アノテーション** `/** @type {gdjs.XXX} */` を 記述することで、変数の型が gdjs.XXX であることをコードエディターに知らせます。このおかげで、エディターは入力中（または単語にカーソルを合わせたとき）に**オートコンプリート**を表示できます。

ほとんどの場合、アノテーションは必要ありません。ここで使うメソッドは、すでに型アノテーションによって[ドキュメント化](http://4ian.github.io/GD-Documentation/GDJS%20Runtime%20Documentation/)済みだからです。しかし、オブジェクトリストを使うときに、そのオブジェクト特有のメソッドにアクセスしたいと思うかもしれません（たとえばスプライトオブジェクトのアニメーションを変更するメソッドとか）。そこでアノテーション `/** @type {gdjs.SpriteRuntimeObject} */` を使うと、エディターが固有メソッドを認識できるようになります。

アノテーションを使わなくてもコードは実行できますが、その場合エディターは基本クラス `gdjs.RuntimeObject` のメソッドしか表示できません。

オブジェクトからビヘイビアを取得するときに、それがどんなビヘイビアなのか知ることもできます。アノテーションを使って、エディターにそれが何なのかを知らせるのです（さもなくば、基本クラス `gdjs.RuntimeBehavior` のメソッドしかオートコンプリートに出てこないでしょう）。

```javascript
const players = runtimeScene.getObjects("Player");
const playerHitBoxes = runtimeScene.getObjects("PlayerHitBox");
if (playerHitBoxes.length === 0 || players.length === 0) return;

/** @type {gdjs.SpriteRuntimeObject} */
const player = players[0];

/** @type {gdjs.PlatformerObjectRuntimeBehavior} */
const platformerBehavior = playerHitBoxes[0].getBehavior("PlatformerObject");

if (platformerBehavior.isJumping() || platformerBehavior.isFalling()) {
  player.setAnimation(1);
} else if (platformerBehavior.isOnFloor()) {
  if (!platformerBehavior.isMoving()) {
    player.setAnimation(0);
  } else {
    player.setAnimation(2);
  }
}

const LEFTKEY = 37;
const RIGHTKEY = 39;
if (runtimeScene.getGame().getInputManager().isKeyPressed(LEFTKEY)) {
  player.flipX(true);
} else if (runtimeScene.getGame().getInputManager().isKeyPressed(RIGHTKEY)) {
  player.flipX(false);
}
```

同等のイベントは次のとおりです。
![](/gdevelop5/events/change-animation-according-to-behavior-conditions.png)

### カメラの位置をオブジェクトに合わせる
```javascript
if (!objects.length) return;

// ここで使う objects は、関数の設定時に指定した「Player」のリスト
// を指します。

runtimeScene.getLayer("").setCameraX(objects[0].getX());
```

同等のイベントは次のとおりです。
![](/gdevelop5/events/set-camera-x-position-x.png)

### スプライトオブジェクトを床に置かれた後にフェードアウトさせる（プラットフォーマーオブジェクトビヘイビアを使用）

```javascript
objects.forEach(object => {
  /** @type {gdjs.SpriteRuntimeObject} */
  const enemy = object;

  /** @type {gdjs.PlatformerObjectRuntimeBehavior} */
  const platformerBehavior = object.getBehavior("PlatformerObject");

  if (enemy.getAnimation() === 1 && platformerBehavior.isOnFloor() && !platformerBehavior.isMoving()) {
      object.activateBehavior("PlatformerObject", false);
      enemy.setOpacity(enemy.getOpacity() - 50 * object.getElapsedTime(runtimeScene) / 1000);

      if (enemy.getOpacity() === 0) {
          object.deleteFromScene(runtimeScene);
      }
  }
});
```

同等のイベントは次のとおりです。
![](/gdevelop5/events/fade-out-and-behavior.png)

### JavaScript でパラメーターの値を取得する

JavaScript で関数から値を取得するのは簡単です。
オブジェクトにどうアクセスするか、見てみましょう。次の例に示すタイプは _Objects_ です。_Objects_ は複数形ですが、これはつまりパラメーターに指定したオブジェクトのインスタンス配列が返ることを意味します。（訳注：言語設定が日本語の場合は名詞で複数形を区別しないため、「オブジェクト」と表示されます）
{{ :gdevelop5:events:function_rotate_parameters.png
?nolink |}}

インスタンス配列は次の関数で取得できます。

```javascript
eventsFunctionContext.getObjects("myParameter");
```

次の例では _RotateObjects_ という名前のパラメーターで受け取ったオブジェクトを 45 度回転しています。


```javascript
const objects = eventsFunctionContext.getObjects("RotateObjects");
const firstInstance = objects[0];
firstInstance.setAngle(45);
```

今度は角度もパラメーターとして受け取れるようにしてみましょう。タイプは数値です。

{{ :gdevelop5:events:degrees_angle_function.png
?nolink |}}

```javascript
const angle = eventsFunctionContext.getArgument("degrees");
```

タイプが文字列やそれ以外の場合でも、コードは同様です。

ちなみに、次の関数を思い出した人もいるかもしれませんが。
```
GetArgumentAsString()
GetArgumentAsNumber()
```
この 2 つは式で、JavaScript 内では使えませんので注意してください。