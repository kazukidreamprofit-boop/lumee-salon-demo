# Cloudflare Pages で「サーバー代0円 + 独自ドメイン」で公開する手順

## 構成
- サイト保管: GitHub
- 公開: Cloudflare Pages Free
- 独自ドメイン: 自分で取得したドメイン
- 更新: GitHub上のファイルを編集 → Cloudflare Pagesが自動再公開

## 1. GitHubにリポジトリを作る
新しい公開リポジトリを作り、このフォルダの中身をアップロードします。
`index.html` がリポジトリ直下に来るようにします。

## 2. Cloudflare Pagesに接続
Cloudflareの Workers & Pages から新しいPagesプロジェクトを作成し、GitHubリポジトリを接続します。
このサイトはビルド不要の静的HTMLなので、ビルド出力先はルートのままで公開できます。

## 3. まず無料URLで確認
Cloudflare Pages側で `xxxxx.pages.dev` のようなURLが発行されます。
PC/スマホで確認します。

## 4. 独自ドメインを取得
好きなレジストラでドメインを取得します。
独自ドメイン自体の登録・更新費用は別途必要です。

## 5. Custom domains に追加
Pagesプロジェクトの Custom domains から取得済みドメインを追加します。
DNSをCloudflareで管理している場合は案内に沿ってDNSを設定します。

## 6. 以後の修正
GitHubの `site-config.js` をブラウザから編集 → Commit changes。
Cloudflare Pagesが自動デプロイするので、FTPアップロードは不要です。

## 7. 本番直前
- site-config.js の架空情報をすべて実情報に変更
- 実写真へ差替
- 予約URLを設定
- Google Mapsを設定
- privacy.html を店舗実態に合わせる
- sitemap.xml の YOUR-DOMAIN を実ドメインへ変更

## 費用感
この静的サイトのホスティング自体はCloudflare Pages Freeで運用可能です。
独自ドメインは登録・更新費用が発生します。
予約システムやメールサービスは、利用する外部サービスのプラン次第です。
