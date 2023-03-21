---
title: 式リファレンス
---
# 式リファレンス

次の 2 つのボタンのどちらかが脇に表示されているフィールドには、式を入力できます。

![](/gdevelop5/field_expressions.png)

  * 左のボタンは「文字列式」（テキスト）を表します
  * 右のボタンは「数式」（数値）を表します

このページは GDevelop で利用できるすべての式を、それが属する拡張機能や
オブジェクト、ビヘイビア別に分類したリファレンスです。`Object` と表記されている部分は、実際のオブジェクト名を入力する場所です。**[式の書き方についての詳細は、こちらを参照してください。](/ja/gdevelop5/all-features/expressions)**

!!! note

    式は、数学と同じように関数と呼ばれるときもあります。

## すべてのオブジェクト向け機能

GDevelop の全オブジェクト共通の機能です。[くわしい説明を読む](/ja/gdevelop5/objects)

| 式 | 説明 ||
|----|-----|----|
| `Count(object)` | イベントで現在選択されている指定オブジェクトの個数 ||
|| _object_ | オブジェクト |

| 式 | 説明 ||
|----|-----|----|
| `Object.Angle()` | オブジェクトの現在の角度（度） ||
| `Object.AngleToObject(object)` | 2 オブジェクト間の角度を計算する。もし任意の位置に対する角度を調べたい場合は、AngleToPosition を使ってください。| |
|| _object_ | オブジェクト |
| `Object.AngleToPosition(number, number)` | オブジェクトの中心と対象位置のあいだの角度を計算する。もし 2 オブジェクト間の角度を調べたい場合は、AngleToObject を使ってください。||
|| _number_ | 対象の X 位置 |
|| _number_ | 対象の Y 位置 |
| `Object.Distance(object)` | 2 つのオブジェクト間の距離 ||
|| _object_ | オブジェクト |
| `Object.DistanceToPosition(number, number)` | オブジェクトと対象位置のあいだの距離 ||
|| _number_ | 対象の X 位置 |
|| _number_ | 対象の Y 位置 |
| `Object.ForceAngle()` | フォースの平均角度 ||
| `Object.ForceLength()` | フォースの平均長さ（大きさ） ||
| `Object.ForceX()` | フォースの平均 X 座標 ||
| `Object.ForceY()` | フォースの平均 Y 座標 ||
| `Object.Height()` | オブジェクトの高さ ||
| `Object.Layer()` | オブジェクトが属しているレイヤー名を返す ||
| `Object.ObjectName()` | オブジェクト名を返す ||
| `Object.ObjectTimerElapsedTime(string)` | タイマーの値 ||
|| _string_ | タイマーの名称 |
| `Object.SqDistance(object)` | 2 つのオブジェクト間の 2 乗距離 ||
|| _object_ | オブジェクト |
| `Object.SqDistanceToPosition(number, number)` | Square distance between an object and a position ||
|| _number_ | 対象の X 位置 |
|| _number_ | 対象の Y 位置 |
| `Object.Variable(objectvar)` | オブジェクトの変数 ||
|| _objectvar_ | 変数 |
| `Object.VariableChildCount(objectvar)` | オブジェクトから子要素の数を取得する ||
|| _objectvar_ | 変数 |
| `Object.VariableString(objectvar)` | オブジェクトの変数のテキスト ||
|| _objectvar_ | 変数 |
| `Object.Width()` | オブジェクトの幅 ||
| `Object.X()` | オブジェクトの X 位置 ||
| `Object.Y()` | オブジェクトの Y 位置 ||
| `Object.ZOrder()` | オブジェクトの Z オーダー ||

---



## スプライト

ゲームのほとんどの要素に使用できるアニメーション対応オブジェクトです。[くわしい説明を読む](/ja/gdevelop5/objects/sprite)

| 式 | 説明 ||
|----|-----|----|
| `Object.Animation()` | オブジェクトのアニメーション ||
| `Object.AnimationName()` | オブジェクトのアニメーション名 ||
| `Object.AnimationSpeedScale()` | アニメーションの速度スケール ||
| `Object.Direction()` | オブジェクトの方向 ||
| `Object.Opacity()` | 不透明度 ||
| `Object.PointX(string)` | ポイントの X 位置 ||
|| _string_ | ポイントの名前 |
| `Object.PointY(string)` | ポイントの Y 位置 ||
|| _string_ | ポイントの名前 |
| `Object.ScaleX()` | オブジェクトの幅スケール ||
| `Object.ScaleY()` | オブジェクトの高さスケール ||
| `Object.Sprite()` | オブジェクトのアニメーションフレーム ||

---


## 標準的な変換

数値、テキスト、単位量へ変換する式です。[くわしい説明を読む](/ja/gdevelop5/all-features/common-conversions)

| 式 | 説明 ||
|----|-----|----|
| `LargeNumberToString(number)` | 科学的表記を使わずに式の結果をテキストに変換する ||
|| _number_ | テキストに変換される式 |
| `ToDeg(number)` | ラジアンで表現された角度を度に変換する ||
|| _number_ | ラジアン表記の角度 |
| `ToNumber(string)` | テキストを数値に変換する ||
|| _string_ | 数値に変換するテキスト |
| `ToRad(number)` | 度で表現された角度をラジアンに変換する ||
|| _number_ | 度表記の角度 |
| `ToString(number)` | 式の結果をテキストに変換する ||
|| _number_ | テキストに変換される式 |

---


## 変数機能

変数を処理するアクション、条件、式です。プレイヤーのスコアや残ライフ数といった単純な変数から、インベントリや Web リクエストの結果のような任意データを含む複雑な変数まで、幅広く取り扱います。[くわしい説明を読む](/ja/gdevelop5/all-features/variables)

| 式 | 説明 ||
|----|-----|----|
| `GlobalVariable(globalvar)` | グローバル変数の数値 ||
|| _globalvar_ | グローバル変数の名前 |
| `GlobalVariableChildCount(globalvar)` | グローバル変数の子要素の数を取得する ||
|| _globalvar_ | 変数 |
| `GlobalVariableString(globalvar)` | グローバル変数のテキスト ||
|| _globalvar_ | 変数 |
| `Variable(scenevar)` | シーン変数の数値 ||
|| _scenevar_ | 変数 |
| `VariableChildCount(scenevar)` | シーン変数の子要素の数を取得する ||
|| _scenevar_ | 変数 |
| `VariableString(scenevar)` | シーン変数のテキスト ||
|| _scenevar_ | 変数 |

---


## マウスとタッチ

マウスとタッチスクリーン上のタッチの両方を処理する条件とアクションです。マウス関連の条件は、デフォルトでタッチにも反応するように設定されています。これはゲームで両方に対応するのを簡単にするための措置ですが、マウスとタッチを個別のイベントで処理したい場合は、その設定を無効にもできます。[くわしい説明を読む](/ja/gdevelop5/all-features/mouse-touch)

| 式 | 説明 ||
|----|-----|----|
| `LastEndedTouchId()` | 最後に終わったタッチの識別子 ||
| `LastTouchId()` | 最終タッチの識別子 ||
| `MouseWheelDelta()` | スクロールホイールによる変位 ||
| `MouseX(layer, camera)` | カーソル X 位置 ||
|| _layer_ | レイヤ― _省略可_|
|| _camera_ | カメラ _省略可_|
| `MouseY(layer, camera)` | カーソル Y 位置 ||
|| _layer_ | レイヤ― _省略可_|
|| _camera_ | カメラ _省略可_|
| `TouchX(number, layer, camera)` | タッチ X 位置 ||
|| _number_ | タッチ識別子 |
|| _layer_ | レイヤ― _省略可_|
|| _camera_ | カメラ _省略可_|
| `TouchY(number, layer, camera)` | タッチ Y 位置 ||
|| _number_ | タッチ識別子 |
|| _layer_ | レイヤ― _省略可_|
|| _camera_ | カメラ _省略可_|

---


## キーボード機能

ゲームをキーボード入力に対応させます。タッチスクリーンのオンスクリーンキーボードには対応していません。モバイル/タッチスクリーンデバイス用のゲームの場合は、代わりにタッチ関連の条件を使ってください。[くわしい説明を読む](/ja/gdevelop5/all-features/keyboard)

| 式 | 説明 ||
|----|-----|----|
| `LastPressedKey()` | キーボードの最後に押されたキー名を取得する ||

---


## シーンマネジメント機能

ゲーム中にシーンを操作するためのアクションと条件です。

| 式 | 説明 ||
|----|-----|----|
| `CurrentSceneName()` | 現在のシーン名 ||
| `Random(number)` | ランダムな整数 ||
|| _number_ | 最大値 |
| `RandomFloat(number)` | ランダムな浮動小数点数 ||
|| _number_ | 最大値 |
| `RandomFloatInRange(number, number)` | 指定範囲内でランダムな浮動小数点数 ||
|| _number_ | 最小値 |
|| _number_ | 最大値 |
| `RandomInRange(number, number)` | 指定範囲内でランダムな整数 ||
|| _number_ | 最小値 |
|| _number_ | 最大値 |
| `RandomWithStep(number, number, number)` | ステップ値刻みのランダム値 ||
|| _number_ | 最小値 |
|| _number_ | 最大値 |
|| _number_ | ステップ値 |

---


## 時間

タイマーの実行や現在時刻の取得、タイムスケールの変更（ゲーム実行速度に影響し、スローモーションエフェクトに有用）を行うアクションと条件です。[くわしい説明を読む](/ja/gdevelop5/all-features/timers)

| 式 | 説明 ||
|----|-----|----|
| `Time(string)` | 現在の時間 ||
|| _string_ | 時間：hour - 分：min - 秒: sec - 月間通算日（1日＝1）：mday - 月（1月＝0）：mon - 1900年からの経過年数：year - 日曜日からの経過日数（日曜＝0）：wday - 年間通算日（1月1日＝1）：yday - タイムスタンプ（ms）：timestamp |
| `TimeDelta()` | 前のフレームが画面にレンダーされてからの経過時間 ||
| `TimeFromStart()` | シーンの最初からの経過時間 ||
| `TimerElapsedTime(string)` | シーンタイマーの値 ||
|| _string_ | タイマーの名称 |

---


## 数学的ツール

式で使用する数学関数のセットです。

| 式 | 説明 ||
|----|-----|----|
| `AngleBetweenPositions(number, number, number, number)` | 2 点間の角度を計算する。||
|| _number_ | 最初の点の X 位置 |
|| _number_ | 最初の点の Y 位置 |
|| _number_ | 2 番目の点の X 位置 |
|| _number_ | 2 番目の点の Y 位置 |
| `AngleDifference(number, number)` | 二つの角度間の差 ||
|| _number_ | 最初の角度 |
|| _number_ | 2 番目の角度 |
| `DistanceBetweenPositions(number, number, number, number)` | 2 点間の距離を計算する。||
|| _number_ | 最初の点の X 位置 |
|| _number_ | 最初の点の Y 位置 |
|| _number_ | 2 番目の点の X 位置 |
|| _number_ | 2 番目の点の Y 位置 |
| `abs(number)` | 絶対値 ||
|| _number_ | 式 |
| `acos(number)` | アークコサイン（逆余弦） ||
|| _number_ | 式 |
| `acosh(number)` | ハイパーボリックアークコサイン（双曲線逆余弦） ||
|| _number_ | 式 |
| `asin(number)` | アークサイン（逆正弦） ||
|| _number_ | 式 |
| `asinh(number)` | ハイパーボリックアークサイン（双曲線逆正弦） ||
|| _number_ | 式 |
| `atan(number)` | アークタンジェント（逆正接） ||
|| _number_ | 式 |
| `atan2(number, number)` | 2 引数アークタンジェント（atan2） ||
|| _number_ | Y |
|| _number_ | X |
| `atanh(number)` | ハイパーボリックアークタンジェント（双曲線逆正接） ||
|| _number_ | 式 |
| `cbrt(number)` | 平方根 ||
|| _number_ | 式 |
| `ceil(number)` | 値を整数に切り上げる ||
|| _number_ | 式 |
| `clamp(number, number, number)` | 値を指定範囲に制限する ||
|| _number_ | 値 |
|| _number_ | 最小値 |
|| _number_ | 最大値 |
| `cos(number)` | コサイン（余弦） ||
|| _number_ | 式 |
| `cosh(number)` | ハイパーボリックコサイン（双曲線余弦） ||
|| _number_ | 式 |
| `cot(number)` | コタンジェント（余接） ||
|| _number_ | 式 |
| `csc(number)` | コセカント（余割） ||
|| _number_ | 式 |
| `exp(number)` | 指数 ||
|| _number_ | 式 |
| `floor(number)` | 値を整数に切り下げる ||
|| _number_ | 式 |
| `lerp(number, number, number)` | a から b 間の x を線形補間する ||
|| _number_ | （式 a+(b-a) * x における）a |
|| _number_ | （式 a+(b-a) * x における）b |
|| _number_ | （式 a+(b-a) * x における）x |
| `log(number)` | 対数 ||
|| _number_ | 式 |
| `log10(number)` | 底 10 の対数 ||
|| _number_ | 式 |
| `log2(number)` | 底 2 の対数 ||
|| _number_ | 式 |
| `max(number, number)` | 2 つの数値の最大値 ||
|| _number_ | 最初の式 |
|| _number_ | 2 番目の式 |
| `min(number, number)` | 2 つの数値の最小値 ||
|| _number_ | 最初の式 |
|| _number_ | 2 番目の式 |
| `mod(number, number)` | 剰余（x mod y） ||
|| _number_ | （x mod y における）x |
|| _number_ | （x mod y における）y |
| `normalize(number, number, number)` | 値を 0 から 1 のあいだで再配置する||
|| _number_ | 値 |
|| _number_ | 最小値 |
|| _number_ | 最大値 |
| `nthroot(number, number)` | N 乗根（ルート） ||
|| _number_ | 数値 |
|| _number_ | N |
| `pow(number, number)` | 指数 n で累乗（べき乗）する ||
|| _number_ | 数値 |
|| _number_ | 指数（「x の n 乗」における n） |
| `round(number)` | 丸め（四捨五入） ||
|| _number_ | 式 |
| `sec(number)` | セカント（正割） ||
|| _number_ | 式 |
| `sign(number)` | 数値の符号（1、-1、0） ||
|| _number_ | 式 |
| `sin(number)` | サイン（正弦） ||
|| _number_ | 式 |
| `sinh(number)` | ハイパーボリックサイン（双曲線正弦） ||
|| _number_ | 式 |
| `sqrt(number)` | 平方根 ||
|| _number_ | 式 |
| `tan(number)` | タンジェント（正接） ||
|| _number_ | 式 |
| `tanh(number)` | ハイパーボリックタンジェント（双曲線正接） ||
|| _number_ | 式 |
| `trunc(number)` | 小数点以下を切り捨て ||
|| _number_ | 式 |

---


## カメラとレイヤー機能

各シーンは複数のレイヤーで構成できます。これらの条件とアクションでゲーム中にレイヤーを操作できます。具体的には、レイヤーのカメラをあるオブジェクトの中心や指定位置に合わせることができます。[くわしい説明を読む](/ja/gdevelop5/interface/scene-editor/layers-and-cameras)

| 式 | 説明 ||
|----|-----|----|
| `CameraHeight(layer, number)` | レイヤーのカメラの高さ ||
|| _layer_ | レイヤー |
|| _number_ | カメラ番号（デフォルト：0） |
| `CameraRotation(layer, number)` | レイヤーのカメラの角度 ||
|| _layer_ | レイヤ― _省略可_|
|| _number_ | カメラ番号（デフォルト：0） _省略可_|
| `CameraWidth(layer, number)` | レイヤーのカメラの幅 ||
|| _layer_ | レイヤー |
|| _number_ | カメラ番号（デフォルト：0） |
| `CameraX(layer, number)` | カメラ X 位置 ||
|| _layer_ | レイヤ― _省略可_|
|| _number_ | カメラ番号（デフォルト：0） _省略可_|
| `CameraY(layer, number)` | カメラ Y 位置 ||
|| _layer_ | レイヤ― _省略可_|
|| _number_ | カメラ番号（デフォルト：0） _省略可_|
| `CameraZoom(layer, number)` | レイヤーのカメラのズーム値 ||
|| _layer_ | レイヤ― _省略可_|
|| _number_ | カメラ番号（デフォルト：0） _省略可_|
| `LayerDefaultZOrder(layer)` | レイヤーのデフォルト Z オーダー ||
|| _layer_ | レイヤー |
| `LayerTimeScale(layer)` | タイムスケール ||
|| _layer_ | レイヤー |

---


## オーディオ

GDevelop はオーディオファイルを再生するための条件とアクションを提供しています。長い音楽と短い効果音の両方に使えます。[くわしい説明を読む](/ja/gdevelop5/all-features/audio)

| 式 | 説明 ||
|----|-----|----|
| `GlobalVolume()` | ゲームグローバルボリューム値 ||
| `MusicChannelPitch(number)` | 音楽のピッチ ||
|| _number_ | チャンネル |
| `MusicChannelPlayingOffset(number)` | 音楽再生位置 ||
|| _number_ | チャンネル |
| `MusicChannelVolume(number)` | 音楽ボリューム ||
|| _number_ | チャンネル |
| `SoundChannelPitch(number)` | サウンドのピッチ ||
|| _number_ | チャンネル |
| `SoundChannelPlayingOffset(number)` | サウンド再生位置 ||
|| _number_ | チャンネル |
| `SoundChannelVolume(number)` | サウンドボリューム ||
|| _number_ | チャンネル |

---


## 基本的インターネット機能

Web リクエストの送信、外部「API」との通信、その他ネットワーク関連のタスクを処理する機能です。[くわしい説明を読む](/ja/gdevelop5/all-features/network)

| 式 | 説明 ||
|----|-----|----|
| `GlobalVarToJSON(globalvar)` | グローバル変数を JSON に変換する ||
|| _globalvar_ | 文字列化するグローバル変数 |
| `ObjectVarToJSON(object, objectvar)` | オブジェクト変数を JSON に変換する ||
|| _object_ | 変数を持つオブジェクト |
|| _objectvar_ | 文字列化するオブジェクト変数 |
| `ToJSON(scenevar)` | シーン変数を JSON に変換する ||
|| _scenevar_ | 文字列化するシーン変数 |

---


## ウィンドウ機能

ゲームウィンドウを操作するアクションと条件です。ゲームを実行するプラットフォームによっては、一部の機能を利用できない場合があります。[くわしい説明を読む](/ja/gdevelop5/all-features/window)

| 式 | 説明 ||
|----|-----|----|
| `SceneWindowHeight()` | シーンウィンドウ（または HTML5 ゲームのシーンキャンバス）の高さ ||
| `SceneWindowWidth()` | シーンウィンドウ（または HTML5 ゲームのシーンキャンバス）の幅 ||
| `ScreenHeight()` | Height of the screen (or the page for HTML5 games in browser) ||
| `ScreenWidth()` | 画面（またはブラウザー内の HTML5 ゲームのページ）の幅 ||
| `WindowTitle()` | ウィンドウタイトル ||

---


## テキスト操作

文字列（テキスト）操作関連の式を提供します。

| 式 | 説明 ||
|----|-----|----|
| `FromCodePoint(number)` | コードポイントを文字に変換する ||
|| _number_ | コードポイント |
| `NewLine()` | 改行を挿入する ||
| `StrAt(string, number)` | 指定位置の文字を取得する ||
|| _string_ | テキスト |
|| _number_ | 文字の位置（最初の文字は位置 0） |
| `StrFind(string, string)` | テキスト内検索（見つかった位置を返す、見つからなければ -1） ||
|| _string_ | テキスト |
|| _string_ | 検索語句 |
| `StrFindFrom(string, string, number)` | 指定位置からテキスト内検索（見つかった位置を返す、見つからなければ -1） ||
|| _string_ | テキスト |
|| _string_ | 検索語句 |
|| _number_ | 検索開始位置 |
| `StrFindLast(string, string)` | 末尾からテキスト内検索（見つかった語句の先頭位置を返す、見つからなければ -1） ||
|| _string_ | テキスト |
|| _string_ | 検索語句 |
| `StrFindLastFrom(string, string, number)` | 末尾からテキスト内検索（見つかった語句の先頭位置が指定位置までのものを返す、見つからなければ -1）（訳注：指定位置は検索範囲の終点ではない点に注意） ||
|| _string_ | テキスト |
|| _string_ | 検索語句 |
|| _number_ | 見つかった語句の先頭位置の上限 |
| `StrLength(string)` | テキストの長さ（文字数） ||
|| _string_ | テキスト |
| `StrRepeat(string, number)` | テキストをリピートする ||
|| _string_ | リピートするテキスト |
|| _number_ | リピート回数 |
| `SubStr(string, number, number)` | 部分文字列を取得する ||
|| _string_ | テキスト |
|| _number_ | 部分文字列の開始位置（最初の文字は位置 0） |
|| _number_ | 部分文字列の長さ（文字数） |
| `ToLowerCase(string)` | テキストを小文字にする ||
|| _string_ | テキスト |
| `ToUpperCase(string)` | テキストを大文字にする ||
|| _string_ | テキスト |

---


## 高度な制御機能

イベントで使用する高度な制御機能です。

| 式 | 説明 ||
|----|-----|----|
| `GetArgumentAsNumber(string)` | 関数パラメーター（引数とも呼ぶ）の値を取得する ||
|| _string_ | パラメーター名 |
| `GetArgumentAsString(string)` | 関数パラメーター（引数とも呼ぶ）のテキストを取得する ||
|| _string_ | パラメーター名 |

---



## プラットフォーム（プラットフォームビヘイビア拡張機能より）

プラットフォーマーキャラクターがその上を走れるプラットフォームです。[くわしい説明を読む](/ja/gdevelop5/behaviors/platformer)

_このビヘイビアには式がありません。_


## プラットフォーマーキャラクター（プラットフォームビヘイビア拡張機能より）

プラットフォーム上をジャンプしたり走ったりできる操作可能なキャラクターです。[くわしい説明を読む](/ja/gdevelop5/behaviors/platformer)

| 式 | 説明 ||
|----|-----|----|
| `Object.PlatformerObject::Acceleration()` | 加速度 ||
| `Object.PlatformerObject::CurrentFallSpeed()` | 現在の落下速度 ||
| `Object.PlatformerObject::CurrentJumpSpeed()` | 現在のジャンプ速度 ||
| `Object.PlatformerObject::CurrentSpeed()` | 現在の速度 ||
| `Object.PlatformerObject::Deceleration()` | 減速度 ||
| `Object.PlatformerObject::Gravity()` | オブジェクトに適用された重力を取得する ||
| `Object.PlatformerObject::JumpSpeed()` | ジャンプ速度 ||
| `Object.PlatformerObject::JumpSustainTime()` | ジャンプボタンを押し続けているあいだ、ジャンプの初速を持続できる時間です。||
| `Object.PlatformerObject::LadderClimbingSpeed()` | はしごを登る速度を取得する ||
| `Object.PlatformerObject::MaxFallingSpeed()` | 最大落下速度を取得する ||
| `Object.PlatformerObject::MaxSpeed()` | 最大速度 ||

---



## 画面外に出たら破棄（画面外で破棄ビヘイビア拡張機能より）

画面境界の外に出たらオブジェクトを自動的に破棄します。[くわしい説明を読む](/ja/gdevelop5/behaviors/destroyoutside)

_このビヘイビアには式がありません。_


---



## タイルスプライト（タイルスプライトオブジェクト拡張機能より）

領域全体に画像を敷き並べて表示します。[くわしい説明を読む](/ja/gdevelop5/objects/tiled_sprite)

| 式 | 説明 ||
|----|-----|----|
| `Object.Opacity()` | 不透明度 ||

---



## ドラッグ対応オブジェクト（ドラッグ対応ビヘイビア拡張機能より）

オブジェクトをマウス（またはタッチ）で動かせるようにします。[くわしい説明を読む](/ja/gdevelop5/behaviors/draggable)

_このビヘイビアには式がありません。_


---



## トップダウン移動（4 または 8 方向）（トップダウン移動拡張機能より）

オブジェクトを上下左右に（オプションで斜めにも）移動できるようにします。[くわしい説明を読む](/ja/gdevelop5/behaviors/topdown)

| 式 | 説明 ||
|----|-----|----|
| `Object.TopDownMovement::Acceleration()` | オブジェクトの加速度 ||
| `Object.TopDownMovement::Angle()` | 移動角度（度） ||
| `Object.TopDownMovement::AngleOffset()` | オブジェクトに適用された回転オフセット（訳注：移動時にオブジェクトのどの側が進行方向を向くか） ||
| `Object.TopDownMovement::AngularMaxSpeed()` | オブジェクトの最大角速度 ||
| `Object.TopDownMovement::Deceleration()` | オブジェクトの減速度 ||
| `Object.TopDownMovement::MaxSpeed()` | オブジェクトの最大速度 ||
| `Object.TopDownMovement::Speed()` | オブジェクトの速度 ||
| `Object.TopDownMovement::XVelocity()` | X 軸方向の移動速度 ||
| `Object.TopDownMovement::YVelocity()` | Y 軸方向の移動速度 ||

---



## テキスト（テキストオブジェクト拡張機能より）

テキストを画面に表示します。[くわしい説明を読む](/ja/gdevelop5/objects/text)

| 式 | 説明 ||
|----|-----|----|
| `Object.Angle()` | 角度 ||
| `Object.Opacity()` | テキストオブジェクトの不透明度 ||
| `Object.Padding()` | パディング ||
| `Object.ScaleX()` | テキストオブジェクトの X スケール ||
| `Object.ScaleY()` | テキストオブジェクトの Y スケール ||
| `Object.String()` | テキスト ||

---



## パーティクルエミッター（パーティクルシステム拡張機能より）

小さなパーティクルを大量に表示するビジュアルエフェクトです。[くわしい説明を読む](/ja/gdevelop5/objects/particles_emitter)

| 式 | 説明 ||
|----|-----|----|
| `Object.EmitterAngle()` | エミッション角度 ||
| `Object.EmitterAngleA()` | エミッション角度 A ||
| `Object.EmitterAngleB()` | エミッション角度 B ||
| `Object.EmitterForceMax()` | 最大放出力 ||
| `Object.EmitterForceMin()` | 最小放出力 ||
| `Object.Flow()` | フロー ||
| `Object.NbParticles()` | パーティクル数 ||
| `Object.ParticleAlpha1()` | 透明度のパラメーター 1 ||
| `Object.ParticleAlpha2()` | 透明度のパラメーター 2 ||
| `Object.ParticleBlue1()` | 青色のパラメーター 1 ||
| `Object.ParticleBlue2()` | 青色のパラメーター 2 ||
| `Object.ParticleGravityAngle()` | 重力角度 ||
| `Object.ParticleGravityLength()` | 重力値 ||
| `Object.ParticleGravityX()` | パーティクルの X 重力 ||
| `Object.ParticleGravityY()` | パーティクルの Y 重力 ||
| `Object.ParticleGreen1()` | 緑色のパラメーター 1 ||
| `Object.ParticleGreen2()` | 緑色のパラメーター 2 ||
| `Object.ParticleLifeTimeMax()` | パーティクルの最大生存時間 ||
| `Object.ParticleLifeTimeMin()` | パーティクルの最小生存時間 ||
| `Object.ParticleRed1()` | 赤色のパラメーター 1 ||
| `Object.ParticleRed2()` | 赤色のパラメーター 2 ||
| `Object.ParticleSize1()` | サイズのパラメーター 1 ||
| `Object.ParticleSize2()` | サイズのパラメーター 2 ||
| `Object.RendererParam1()` | レンダリングのパラメーター 1 ||
| `Object.RendererParam2()` | レンダリングのパラメーター 2 ||
| `Object.Tank()` | 容量 ||
| `Object.Texture()` | パーティクルに表示する画像の名前 ||
| `Object.ZoneRadius()` | エミッション領域の半径 ||

---



## パネルスプライト（9 パッチ）（パネルスプライト（9 パッチ）オブジェクト拡張機能より）

画像を格子状に9分割し、角以外を引き延ばして表示します。[くわしい説明を読む](/ja/gdevelop5/objects/panel_sprite)

| 式 | 説明 ||
|----|-----|----|
| `Object.Opacity()` | 不透明度 ||

---



## アンカー

ウインドウ境界にオブジェクトをアンカーするビヘイビアです。[くわしい説明を読む](/ja/gdevelop5/behaviors/anchor)

_このビヘイビアには式がありません。_


---



## シェイプペインター

シンプルな図形を画面に描画します。[くわしい説明を読む](/ja/gdevelop5/objects/shape_painter)

| 式 | 説明 ||
|----|-----|----|
| `Object.FillColorBlue()` | 塗りつぶし色の青成分 ||
| `Object.FillColorGreen()` | 塗りつぶし色の緑成分 ||
| `Object.FillColorRed()` | 塗りつぶし色の赤成分 ||
| `Object.FillOpacity()` | 塗りつぶし色の不透明度 ||
| `Object.OutlineColorBlue()` | 輪郭線の青成分 ||
| `Object.OutlineColorGreen()` | 輪郭線の緑成分 ||
| `Object.OutlineColorRed()` | 輪郭線の赤成分 ||
| `Object.OutlineOpacity()` | 輪郭線の不透明度 ||
| `Object.OutlineSize()` | 輪郭線の太さ ||

---



## テキスト入力（テキスト入力オブジェクト拡張機能より）

キーボード入力されたテキストを保持する非表示のオブジェクトです。[くわしい説明を読む](/ja/gdevelop5/objects/text_entry)

| 式 | 説明 ||
|----|-----|----|
| `Object.String()` | キーボードから入力されたテキスト ||

---


## インベントリ

メモリ内アイテムを扱うインベントリをゲームに追加するためのアクションと条件を提供します。[くわしい説明を読む](/ja/gdevelop5/all-features/inventory)

| 式 | 説明 ||
|----|-----|----|
| `Inventory::Count(string, string)` | インベントリ内のアイテム数を取得する ||
|| _string_ | インベントリ名 |
|| _string_ | アイテム名 |

---



## 経路探索（経路探索ビヘイビア拡張機能より）

障害物として設定されたすべてのオブジェクトを避けてオブジェクトを移動します。[くわしい説明を読む](/ja/gdevelop5/behaviors/pathfinding)

| 式 | 説明 ||
|----|-----|----|
| `Object.Pathfinding::Acceleration()` | パス上のオブジェクトの加速度 ||
| `Object.Pathfinding::AngleOffset()` | パス上のオブジェクトに適用された回転オフセット ||
| `Object.Pathfinding::AngularMaxSpeed()` | パス上のオブジェクトの最大角速度 ||
| `Object.Pathfinding::CellHeight()` | 仮想グリッドの高さ ||
| `Object.Pathfinding::CellWidth()` | 仮想グリッドの幅 ||
| `Object.Pathfinding::DestinationX()` | 目的地の X 位置 ||
| `Object.Pathfinding::DestinationY()` | 目的地の Y 位置 ||
| `Object.Pathfinding::ExtraBorder()` | パス上のオブジェクトに適用された追加境界 ||
| `Object.Pathfinding::GetNodeX(number)` | 次の中間地点の X 位置を取得する ||
|| _number_ | ノードインデックス（0 からスタート） |
| `Object.Pathfinding::GetNodeY(number)` | 次の中間地点の Y 位置を取得する ||
|| _number_ | ノードインデックス（0 からスタート） |
| `Object.Pathfinding::LastNodeX()` | 前の中間地点の X 位置 ||
| `Object.Pathfinding::LastNodeY()` | 前の中間地点の Y 位置 ||
| `Object.Pathfinding::MaxSpeed()` | パス上のオブジェクトの最高速度 ||
| `Object.Pathfinding::NextNodeIndex()` | 次に到着する中間地点のインデックスを取得する ||
| `Object.Pathfinding::NextNodeX()` | 次の中間地点の X 位置を取得する ||
| `Object.Pathfinding::NextNodeY()` | 次の中間地点の Y 位置を取得する ||
| `Object.Pathfinding::NodeCount()` | パス上の中間地点の数を取得する ||
| `Object.Pathfinding::Speed()` | パス上のオブジェクトの速度 ||

## 経路探索の障害物（経路探索ビヘイビア拡張機能より）

オブジェクトを経路探索の障害物として設定します。[くわしい説明を読む](/ja/gdevelop5/behaviors/pathfinding)

| 式 | 説明 ||
|----|-----|----|
| `Object.PathfindingObstacle::Cost()` | 障害物コスト ||

---



## 物理エンジン（物理エンジン拡張機能より（非推奨））

まるで物理法則に従っているかのようにオブジェクトを移動します。ゲームを新規作成する場合は、物理エンジン 2.0 の方を使ってください。[くわしい説明を読む](/ja/gdevelop5/behaviors/physics)

| 式 | 説明 ||
|----|-----|----|
| `Object.Physics::AngularDamping()` | 角度減衰 ||
| `Object.Physics::AngularVelocity()` | 角速度 ||
| `Object.Physics::LinearDamping()` | 線形減衰 ||
| `Object.Physics::LinearVelocity()` | 線速度 ||
| `Object.Physics::LinearVelocityX()` | X コンポーネント ||
| `Object.Physics::LinearVelocityY()` | Y コンポーネント ||
| `Object.Physics::PolygonScaleX()` | 衝突ポリゴンの X スケール ||
| `Object.Physics::PolygonScaleY()` | 衝突ポリゴンの Y スケール ||

---


## 高度なウィンドウ管理

ゲームウィンドウの配置や OS との連携に関連した高度な機能を提供します。

| 式 | 説明 ||
|----|-----|----|
| `AdvancedWindow::WindowOpacity()` | ウィンドウの現在の不透明度を返す（0 から 1 までの数値、1 は完全に不透明）||
| `AdvancedWindow::WindowX()` | ウィンドウの現在の X 位置を返す||
| `AdvancedWindow::WindowY()` | ウィンドウの現在の Y 位置を返す||

---



## BBText（BBCode テキストオブジェクト拡張機能より）

BBCode マークアップに対応したリッチテキストラベルを表示します（テキストの一部を太字や斜体にしたり、色を変えたり影を付けることができます）。[くわしい説明を読む](/ja/gdevelop5/objects/bbtext)

| 式 | 説明 ||
|----|-----|----|
| `Object.GetBBText()` | BBCode テキストを取得する ||
| `Object.GetFontFamily()` | 基本フォントファミリーを取得する ||
| `Object.GetFontSize()` | 基本フォントサイズを取得する ||
| `Object.GetOpacity()` | 基本の不透明度を取得する ||
| `Object.GetWrappingWidth()` | 折り返し幅を取得する ||

---


## デバイスセンサー

モバイル端末のセンサーにアクセスできるようにします。[くわしい説明を読む](/ja/gdevelop5/all-features/device-sensors)

| 式 | 説明 ||
|----|-----|----|
| `DeviceSensors::AccelerationX()` | X 軸のデバイス加速度（m/s²）を取得する ||
| `DeviceSensors::AccelerationY()` | Y 軸のデバイス加速度（m/s²）を取得する ||
| `DeviceSensors::AccelerationZ()` | Z 軸のデバイス加速度（m/s²）を取得する ||
| `DeviceSensors::OrientationAbsolute()` | 端末の方向が絶対方向（相対ではない）かどうかを取得する ||
| `DeviceSensors::OrientationAlpha()` | 端末方向のアルファ値（コンパス）を取得する ||
| `DeviceSensors::OrientationBeta()` | 端末方向のベータ値を取得する ||
| `DeviceSensors::OrientationGamma()` | 端末方向のガンマ値を取得する ||
| `DeviceSensors::RotationAlpha()` | 端末回転のアルファ値を取得する ||
| `DeviceSensors::RotationBeta()` | 端末回転のベータ値を取得する ||
| `DeviceSensors::RotationGamma()` | 端末回転のガンマ値を取得する ||

---


## ダイアログツリー（実験的）

Yarn Spinner を使ったダイアログツリーを制御します。複数選択肢を伴う複雑なダイアログ（せりふ）を作成するのに使います。Yarn Spinner エディターが GDevelop に組み込まれているため、GDevelop から別のアプリに切り替えることなくダイアログを編集できます。[くわしい説明を読む](/ja/gdevelop5/all-features/dialogue-tree)

| 式 | 説明 ||
|----|-----|----|
| `DialogueTree::BranchTag(number)` | 実行中のダイアログの現在のブランチから指定したインデックスのタグを取得する ||
|| _number_ | タグインデックス番号 |
| `DialogueTree::BranchTags()` | 実行中のダイアログの現在のブランチからタグを取得する ||
| `DialogueTree::BranchText()` | 現在のブランチの完全な生テキストを取得する ||
| `DialogueTree::BranchTitle()` | 実行中のダイアログの現在のブランチからタイトルを取得する ||
| `DialogueTree::ClippedLineText()` | タイプライターエフェクトでクリップされたダイアログラインテキストを取得する。タイプライターエフェクトは「クリップテキストをスクロールする」アクションで制御します。||
| `DialogueTree::CommandParameter(number)` | <<command withParameter anotherParameter>> 形式のコマンド呼び出しのパラメーターを取得する ||
|| _number_ | パラメーターのインデックス番号 _省略可_|
| `DialogueTree::CommandParametersCount()` | 現在渡されたコマンドのパラメーター数を取得する ||
| `DialogueTree::HorizontalOptionsList(string)` | オプションラインタイプから利用可能なすべてのオプションのテキストを横型リストとして取得する。オプションで選択カーソル文字列（デフォルトは ->）を指定できます。 ||
|| _string_ | オプションの選択カーソル |
| `DialogueTree::LineText()` | 現在のダイアログラインテキストを返す ||
| `DialogueTree::Option(number)` | オプションラインタイプから指定したオプション番号のオプションテキストを取得する。番号は 0 から始まります。||
|| _number_ | オプションインデックス番号 |
| `DialogueTree::OptionsCount()` | オプションラインタイプ内のオプション番号を取得する ||
| `DialogueTree::SelectedOptionIndex()` | 現在選択されているオプション番号を取得する。オプション選択マーカーを正しい場所にレンダーするために使います。||
| `DialogueTree::TagParameter(number)` | ブランチのタグ条件で見つかったタグからパラメーターを取得する ||
|| _number_ | パラメーターのインデックス番号 _省略可_|
| `DialogueTree::Variable(string)` | ダイアログ状態の値を取得する ||
|| _string_ | 変数名 |
| `DialogueTree::VerticalOptionsList(string)` | オプションラインタイプから利用可能なすべてのオプションのテキストを縦型リストとして取得する。オプションで選択カーソル文字列（デフォルトは ->）を指定できます。 ||
|| _string_ | オプションの選択カーソル |
| `DialogueTree::VisitedBranchTitles()` | 訪問済みブランチのリストを取得する ||

---


## Facebook インスタントゲーム

ゲームがスコアを送信し、Facebook インスタントゲームプラットフォームと通信できるようにします。[くわしい説明を読む](/ja/gdevelop5/publishing/publishing-to-facebook-instant-games)

| 式 | 説明 ||
|----|-----|----|
| `FacebookInstantGames::PlayerId()` | プレイヤーの固有識別子を取得する ||
| `FacebookInstantGames::PlayerName()` | プレイヤー名を取得する ||

---


## ファイルシステム

OS のファイルシステムにアクセスします。[くわしい説明を読む](/ja/gdevelop5/all-features/filesystem)

| 式 | 説明 ||
|----|-----|----|
| `FileSystem::DesktopPath()` | デスクトップフォルダーのパスを取得する||
| `FileSystem::DirectoryName(string)` | パスから最後のファイル名を取り除いた、ディレクトリを表す部分パスを返す||
|| _string_ | ファイルまたはディレクトリのパス |
| `FileSystem::DocumentsPath()` | ドキュメントフォルダーのパスを取得する||
| `FileSystem::ExecutableFolderPath()` | ゲーム実行フォルダーのパスを取得する||
| `FileSystem::ExecutablePath()` | ゲーム実行ファイルのパスを取得する||
| `FileSystem::ExtensionName(string)` | 指定したパスが表すファイルの拡張子を、ピリオドを含む形で返す。たとえば「.txt」。||
|| _string_ | ファイルのパス |
| `FileSystem::FileName(string)` | ファイル名を返す。拡張子があれば、それも含みます。||
|| _string_ | ファイルのパス |
| `FileSystem::PathDelimiter()` | OS のパス区切り文字を取得する||
| `FileSystem::PicturesPath()` | 画像フォルダーのパスを取得する||
| `FileSystem::TempPath()` | 一時フォルダーのパスを取得する||
| `FileSystem::UserHomePath()` | ユーザーホームフォルダーのパスを取得する||
| `FileSystem::UserdataPath()` | ユーザーデータフォルダー（アプリケーション設定用）のパスを取得する||

---


## Firebase

ゲームで Google Firebase サービス（データベース、関数、ストレージ…）を使えるようにします。[くわしい説明を読む](/ja/gdevelop5/all-features/firebase)

| 式 | 説明 ||
|----|-----|----|
| `Firebase::GetAccountCreationTime()` | アカウントの作成日時を取得する。||
| `Firebase::GetAuthToken(string)` | ユーザー認証トークンを取得する。トークンは認証の証拠です。||
|| _string_ | 設定名 |
| `Firebase::GetLastLoginTime()` | ユーザーの前回ログイン日時を取得する。||
| `Firebase::GetPhoneNumber()` | ユーザーの電話番号を取得する。||
| `Firebase::GetPhotoURL()` | ユーザーのプロファイル画像の URL を取得する。||
| `Firebase::GetRefreshToken()` | ユーザーのリフレッシュトークンを取得する。高度な使用法です。||
| `Firebase::GetRemoteConfigNumber(string)` | Firebase のリモート設定を数値で取得する。||
|| _string_ | 設定名 |
| `Firebase::GetRemoteConfigString(string)` | Firebase のリモート設定を文字列で取得する。||
|| _string_ | 設定名 |
| `Firebase::GetTenantID()` | ユーザーのテナント ID を取得する。高度な使用法です。||
| `Firebase::GetUserDisplayName()` | ユーザーの表示名を取得する。||
| `Firebase::GetUserEmail()` | ユーザーのメールアドレスを取得する。||
| `Firebase::GetUserUID()` | ユーザーの固有識別子を取得する。名前やメールアドレスの代わりに、こちらをユーザーへのリンクデータに使ってください。||

---



## ライト（ライト拡張機能より）

半径と色をカスタマイズできるライトをシーンに表示します。 これを作成した後、光をさえぎるオブジェクトにはライト障害物ビヘイビアを追加します。

_このオブジェクトには式がありません。_


## ライト障害物ビヘイビア（ライト拡張機能より）

このビヘイビアはオブジェクトをライト障害物にします。ライトオブジェクトから放射された光はこのオブジェクトにさえぎられます。

_このビヘイビアには式がありません。_


---


## ピアツーピア（P2P）通信（実験的）

ゲームインスタンスが WebRTC（P2P）経由でメッセージをリモート通信できるようにします。[くわしい説明を読む](/ja/gdevelop5/all-features/p2p)

| 式 | 説明 ||
|----|-----|----|
| `P2P::GetEventData(string)` | 前回トリガーされた指定イベントで受信したデータを返す ||
|| _string_ | イベント名 |
| `P2P::GetEventSender(string)` | イベントをトリガーしたピアの ID を返す ||
|| _string_ | イベント名 |
| `P2P::GetID()` | 現在のゲームインスタンスのクライアント ID を取得する ||
| `P2P::GetLastConnectedPeer()` | 新たに接続を開始したピアの ID を取得する||
| `P2P::GetLastDisconnectedPeer()` | 前回接続を終了したピアの ID を取得する||
| `P2P::GetLastError()` | 前回の P2P エラー内容を取得する ||

---



## 物理エンジン 2.0

重力、フォース、ジョイントなどを使ってリアルな物体の物理運動をシミュレートします。[もっとくわしく](/ja/gdevelop5/behaviors/physics2)

| 式 | 説明 ||
|----|-----|----|
| `Object.Physics2::AngularDamping()` | オブジェクトの角度減衰を取得する||
| `Object.Physics2::AngularVelocity()` | オブジェクトの角速度を取得する||
| `Object.Physics2::Density()` | オブジェクトの密度を取得する||
| `Object.Physics2::DistanceJointDampingRatio(number)` | 距離ジョイントの減衰率 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::DistanceJointFrequency(number)` | 距離ジョイントのバネの硬さ ||
|| _number_ | ジョイント ID |
| `Object.Physics2::DistanceJointLength(number)` | 距離ジョイントの長さ ||
|| _number_ | ジョイント ID |
| `Object.Physics2::Friction()` | オブジェクトの摩擦を取得する||
| `Object.Physics2::FrictionJointMaxForce(number)` | 摩擦ジョイントの最大出力 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::FrictionJointMaxTorque(number)` | 摩擦ジョイントの最大トルク ||
|| _number_ | ジョイント ID |
| `Object.Physics2::GearJointFirstJoint(number)` | 歯車ジョイントの最初のジョイント ||
|| _number_ | ジョイント ID |
| `Object.Physics2::GearJointRatio(number)` | 歯車ジョイントの比率 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::GearJointSecondJoint(number)` | 歯車ジョイントの 2 番目のジョイント ||
|| _number_ | ジョイント ID |
| `Object.Physics2::GravityScale()` | オブジェクトの重力スケールを取得する||
| `Object.Physics2::GravityX()` | Ｘ 軸上のワールド重力 ||
| `Object.Physics2::GravityY()` | Y 軸上のワールド重力 ||
| `Object.Physics2::JointFirstAnchorX(number)` | ジョイントの最初のアンカーの X 位置 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::JointFirstAnchorY(number)` | ジョイントの最初のアンカーの Y 位置 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::JointReactionForce(number)` | ジョイントの反動力 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::JointReactionTorque(number)` | ジョイントの反動トルク ||
|| _number_ | ジョイント ID |
| `Object.Physics2::JointSecondAnchorX(number)` | ジョイントの 2 番目のアンカーの X 位置 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::JointSecondAnchorY(number)` | ジョイントの 2 番目のアンカーの Y 位置 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::LinearDamping()` | オブジェクトの線形減衰を取得する||
| `Object.Physics2::LinearVelocity()` | オブジェクトの線速度を取得する||
| `Object.Physics2::LinearVelocityX()` | オブジェクトの X 軸上の線速度を取得する||
| `Object.Physics2::LinearVelocityY()` | オブジェクトの Y 軸上の線速度を取得する||
| `Object.Physics2::MassCenterX()` | 質量中心の X 位置 ||
| `Object.Physics2::MassCenterY()` | 質量中心の Y 位置 ||
| `Object.Physics2::MotorJointAngularOffset(number)` | モータージョイントの角度オフセット ||
|| _number_ | ジョイント ID |
| `Object.Physics2::MotorJointCorrectionFactor(number)` | モータージョイントの補正係数 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::MotorJointMaxForce(number)` | モータージョイントの最大出力 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::MotorJointMaxTorque(number)` | モータージョイントの最大トルク ||
|| _number_ | ジョイント ID |
| `Object.Physics2::MotorJointOffsetX(number)` | モータージョイントのオフセット X ||
|| _number_ | ジョイント ID |
| `Object.Physics2::MotorJointOffsetY(number)` | モータージョイントのオフセット Y ||
|| _number_ | ジョイント ID |
| `Object.Physics2::MouseJointDampingRatio(number)` | マウスジョイントの減衰率 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::MouseJointFrequency(number)` | マウスジョイントのバネの硬さ ||
|| _number_ | ジョイント ID |
| `Object.Physics2::MouseJointMaxForce(number)` | マウスジョイントの最大出力 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::MouseJointTargetX(number)` | マウスジョイント目標の X 位置 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::MouseJointTargetY(number)` | マウスジョイント目標の Y 位置 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::PrismaticJointAxisAngle(number)` | 直動ジョイントの軸角度 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::PrismaticJointMaxMotorForce(number)` | 直動ジョイントの最大モーター出力 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::PrismaticJointMaxTranslation(number)` | 直動ジョイントの最大移動量 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::PrismaticJointMinTranslation(number)` | 直動ジョイントの最小移動量 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::PrismaticJointMotorForce(number)` | 直動ジョイントのモーター出力 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::PrismaticJointMotorSpeed(number)` | 直動ジョイントのモーター速度 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::PrismaticJointReferenceAngle(number)` | 直動ジョイントの基準角度 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::PrismaticJointSpeed(number)` | 直動ジョイントの速度 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::PrismaticJointTranslation(number)` | 直動ジョイントの現在移動量 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::PulleyJointFirstGroundAnchorX(number)` | 滑車ジョイントの最初の接地アンカーの X 位置 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::PulleyJointFirstGroundAnchorY(number)` | 滑車ジョイントの最初の接地アンカーの Y 位置 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::PulleyJointFirstLength(number)` | 滑車ジョイントの最初の長さ ||
|| _number_ | ジョイント ID |
| `Object.Physics2::PulleyJointRatio(number)` | 滑車ジョイントの比率 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::PulleyJointSecondGroundAnchorX(number)` | 滑車ジョイントの 2 番目の接地アンカーの X 位置 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::PulleyJointSecondGroundAnchorY(number)` | 滑車ジョイントの 2 番目の接地アンカーの Y 位置 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::PulleyJointSecondLength(number)` | 滑車ジョイントの 2 番目の長さ ||
|| _number_ | ジョイント ID |
| `Object.Physics2::Restitution()` | オブジェクトの反発を取得する||
| `Object.Physics2::RevoluteJointAngle(number)` | 回転ジョイントの現在角度 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::RevoluteJointMaxAngle(number)` | 回転ジョイントの最大角度 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::RevoluteJointMaxMotorTorque(number)` | 回転ジョイントの最大モータートルク ||
|| _number_ | ジョイント ID |
| `Object.Physics2::RevoluteJointMinAngle(number)` | 回転ジョイントの最小角度 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::RevoluteJointMotorSpeed(number)` | 回転ジョイントのモーター速度 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::RevoluteJointMotorTorque(number)` | 回転ジョイントのモータートルク ||
|| _number_ | ジョイント ID |
| `Object.Physics2::RevoluteJointReferenceAngle(number)` | 回転ジョイントの基準角度 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::RevoluteJointSpeed(number)` | 回転ジョイントの角速度 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::RopeJointMaxLength(number)` | ロープジョイントの最大長 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::TimeScale()` | ワールドタイムスケール ||
| `Object.Physics2::WeldJointDampingRatio(number)` | 溶接ジョイントの減衰率 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::WeldJointFrequency(number)` | 溶接ジョイントのバネの硬さ ||
|| _number_ | ジョイント ID |
| `Object.Physics2::WeldJointReferenceAngle(number)` | 溶接ジョイントの基準角度 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::WheelJointAxisAngle(number)` | 車輪ジョイントの軸角度 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::WheelJointDampingRatio(number)` | 車輪ジョイントの減衰率 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::WheelJointFrequency(number)` | 車輪ジョイントのバネの硬さ ||
|| _number_ | ジョイント ID |
| `Object.Physics2::WheelJointMaxMotorTorque(number)` | 車輪ジョイントの最大モータートルク ||
|| _number_ | ジョイント ID |
| `Object.Physics2::WheelJointMotorSpeed(number)` | 車輪ジョイントのモーター速度 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::WheelJointMotorTorque(number)` | 車輪ジョイントのモータートルク ||
|| _number_ | ジョイント ID |
| `Object.Physics2::WheelJointSpeed(number)` | 車輪ジョイントの速度 ||
|| _number_ | ジョイント ID |
| `Object.Physics2::WheelJointTranslation(number)` | 車輪ジョイントの現在移動量 ||
|| _number_ | ジョイント ID |

---



## タイルマップ

Tiled エディター（https://www.mapeditor.org/ から別途ダウンロード）製のタイルベースのマップを表示します。[くわしい説明を読む](/ja/gdevelop5/objects/tilemap)

| 式 | 説明 ||
|----|-----|----|
| `Object.AnimationFps()` | アニメーション速度（フレーム数/秒）を取得する ||
| `Object.AnimationSpeedScale()` | アニメーション速度スケールを取得する ||
| `Object.LayerIndex()` | 表示中のレイヤーインデックスを取得する ||

---



## Tween（Tween 拡張機能より）

オブジェクトの位置や角度、スケール、その他のプロパティをスムーズにアニメーションさせます。[くわしい説明を読む](/ja/gdevelop5/behaviors/tween)

| 式 | 説明 ||
|----|-----|----|
| `Object.Tween::Progress(string)` | Tween の進捗度（0.0～1.0） ||
|| _string_ | Tween 識別子 |

---



## 動画

動画を表示します。[くわしい説明を読む](/ja/gdevelop5/objects/video)

| 式 | 説明 ||
|----|-----|----|
| `Object.CurrentTime()` | 動画オブジェクトの現在位置を返す（秒）||
| `Object.Duration()` | 動画オブジェクトの長さを返す（秒）||
| `Object.Opacity()` | 動画オブジェクトの不透明度を返す ||
| `Object.PlaybackSpeed()` | 動画オブジェクトの再生速度を返す ||
| `Object.Volume()` | 0（ミュート）から100（最大）のあいだで、動画の音量を取得する||