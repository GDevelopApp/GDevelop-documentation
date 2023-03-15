---
title: ゲームをAndroidおよびiOSに公開する
---
# ゲームをAndroidおよびiOSに公開する

GDevelopを使用すると、AndroidやiOSを含むさまざまな形式でゲームを公開できます。ゲームをエクスポートするには、GDevelopインターフェースの上部にあるメニューから\[ファイル\]をクリックし選択します。任意のエクスポートオプションを選択します。この場合、 表示されるオプションのパネルから**AndroidとiOS**を選択します。

![](/gdevelop5/publishing/filemenuexport.png)

## ゲームをパッケージ化する準備ができていることを確認してください！

ゲームがAndroidおよびiOS用にエクスポートできる状態であることを確認することが重要です。

- [プロジェクトマネージャー](/gdevelop5/interface))から、アクセス可能なゲームプロパティで、有効なパッケージ名を入力してください。パッケージ名は、次のような識別子ですcom.yourname.gamename。ウェブサイトのアドレスのようなものですが、逆になっています。次の条件があれば、任意のパッケージ名を選択できます。

&nbsp;

        * iOSまたはAndroidの別のゲームまたはアプリケーションでは同じ名前は使用できません。
        * 文字・数字・ドットのみで書かれています。単語の間にドットを1つだけ入れます（たとえば、com..mygameまたは..mygameは無効です）。この識別子は最大2〜5ワードにしてください。
    * 必要なアイコンが含まれていることを確認してください。

## エクスポートの開始

\[ファイル\]メニューで、\[エクスポート\]を選択します。次に、**Android（およびiOSが近日公開予定）**を選択します。 ![](/gdevelop5/publishing/android-ios-export-option.png)

### アカウントをお持ちでない場合は作成してください

Androidのパッケージを使用するには、[GDevelopのアカウント](/gdevelop5/interface/profile)が必要です。アカウントを持っていない場合は、「アカウントを作成」をクリックし、メールアドレスを入力してパスワードを選択します。

準備ができたら、**Android向けパッケージ**をクリックします。

![](/gdevelop5/publishing/package-android.png) 次に、ゲームがビルドされるのを待ちます。いくつかのステップがあり、その間にゲームがエクスポート、圧縮、オンラインビルドサービスにアップロードされ、ビルドされます。

最後に、Androidにインストールできる.apkファイルを取得するための**ダウンロード**ボタンがあります

## Androidスマートフォンにゲームをインストールします

Androidスマートフォン/タブレットをコンピューターに接続し、APKファイルをデバイスのフォルダーのどこかに配置します。または、クラウドストレージ（[Dropbox](https://www.dropbox.com/), [Google Drive](http://drive.google.com/), [OneDrive](https://onedrive.live.com/about/en-in/)...）にAPKを保存し、デバイスにダウンロードすることもできます。

APKをインストールする前に、\[設定\]\> \[セキュリティ\]に移動し、\[ 不明なソース \]を有効にします。これにより、Google Playストアにまだ登録されていない場合でも\[.apkファイルをインストール\]([https://gameolith.uservoice.com/knowledgebase/articles/76902-android-4-0-tablets-allowing-app-installs-from)できます](https://gameolith.uservoice.com/knowledgebase/articles/76902-android-4-0-tablets-allowing-app-installs-from)できます)。

最後に、ファイルマネージャーを開き、APKを含むフォルダーに移動し、タッチしてインストールを開始します。

![](/gdevelop5/publishing/launch-apk.png)

アプリがインストールされました。

![](/gdevelop5/publishing/installation-apk.png)

### ゲームをプレイ

はい、ゲームがスマートホンにうまくインストールされました！他のアプリやゲームと同じように起動します。

GDevelopから直接Android用のゲームを 作成しました！簡単に更新できます。ゲームを再度エクスポートしてパッケージ化し、APKを携帯電話またはタブレットに送信してインストールするだけです。

## より多くのパッケージングが毎日できるよう登録しましょう

登録ユーザーとして、Android向けに毎日2回ゲームをパッケージ化できます。

ゲームでさらに作業している場合は、アカウントをアップグレードして、毎日より多くのパッケージをアンロックすることができます！Indieサブスクリプションでは1日に10回、Proサブスクリプションでは最大70回エクスポートできます。

サブスクリプションを取得すると、GDevelopの作成者は引き続き作業を進めることができ（GDevelopはオープンソースソフトウェアです）、ゲームをWindows / macOS / Linux用にパッケージ化することもできます。

## ゲームをストアで公開する

Android用のゲームを構築してテストしたら、Google Playストアで公開できます。 [Google Play Storeでの公開方法](/gdevelop5/publishing/android_and_ios/play-store)も御覧ください。

また、[Amazonアプリストアでの公開](/gdevelop5/publishing/publishing-to-amazon-app-store)も参考にして下さい。
