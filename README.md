# 概要
- [litlink](https://lit.link/amatech)

- [アプリURL](https://koyamasai.netlify.app/)

- [スライドURL](https://www.canva.com/design/DAFyuEDf21A/9ItS-TxZ9OZN7QkdomaRxA/view?utm_content=DAFyuEDf21A&utm_campaign=designshare&utm_medium=link&utm_source=editor)

# ブランチ作成とディレクトリセットアップガイド（手動）

<img width="834" alt="スクリーンショット 2023-11-06 10 08 40" src="https://github.com/amatech-repo/kouyamasai/assets/132275270/868ea13e-d015-47be-b8a6-74f3e26ebb94">
<img width="736" alt="スクリーンショット 2023-11-06 10 08 50" src="https://github.com/amatech-repo/kouyamasai/assets/132275270/5544c227-7029-4a0a-8d29-314f4ced59f4">
<img width="680" alt="スクリーンショット 2023-11-06 10 09 07" src="https://github.com/amatech-repo/kouyamasai/assets/132275270/2bece3db-48c2-4000-8a21-f612450aa698">
<img width="716" alt="スクリーンショット 2023-11-06 10 09 29" src="https://github.com/amatech-repo/kouyamasai/assets/132275270/b6a11884-a481-4f26-9cb7-ec43e3fc6ea1">
<img width="805" alt="スクリーンショット 2023-11-06 10 09 22" src="https://github.com/amatech-repo/kouyamasai/assets/132275270/271c972b-7260-4236-b15f-09efd545520b">
<img width="790" alt="スクリーンショット 2023-11-06 10 08 59" src="https://github.com/amatech-repo/kouyamasai/assets/132275270/6da7e21e-67af-4540-a69f-cd153ffd5511">
<img width="728" alt="スクリーンショット 2023-11-06 10 09 15" src="https://github.com/amatech-repo/kouyamasai/assets/132275270/420379cb-205c-45ff-8c6a-39648616ec91">

# ブランチ作成とディレクトリセットアップガイド（自動）
このガイドでは、`./create_branch_and_setup_directory.sh` スクリプトを使用してプロジェクトに新しい機能や体験者をセットアップする方法を説明します。

## 前提条件

- Gitがインストールされており、適切に設定されていることを確認してください。
- プロジェクトのリポジトリにアクセスできることを確認してください。

## スクリプトの使用方法

1. ターミナルを開きます。
2. スクリプトが存在するディレクトリに移動します。
3. スクリプトに実行権限を付与します（これは初回実行時にのみ必要です）:
   ```bash
   chmod +x create_branch_and_setup_directory.sh
4. スクリプトを以下の形式で実行します:
```bash
./create_branch_and_setup_directory.sh <new-branch-name> <new-dir-name> <new-path> <new-name>
```
- <new-branch-name>: 新しく作成するブランチの名前。形式: pc-{pc番号}/{体験者番号}
- <new-dir-name>: ファイルをコピーして名前を変更する新しいディレクトリの名前。英語で、先頭は大文字です。
- <new-path>: リンク名。英語で、先頭は大文字です。
- <new-name>: サイトに表示される体験者の名前。あだ名や実名など自由に設定できます。
例:

```bash
./create_branch_and_setup_directory.sh pc-123/456 NewFeature NewPath '体験者の名前'
```
## スクリプトの動作内容
スクリプトは以下の手順を自動的に実行します:

1. main ブランチから新しいブランチを作成します。

2. src/ListCards/SampleCards の内容を新しいディレクトリにコピーします。

3. SampleCard.tsx と SampleCard.css を新しいディレクトリ名に応じて名前を変更し、コード内の参照も更新します。

4. src/Pages/Home.tsx に新しいパスと名前のエントリを追加します。
## 注意事項
- スクリプトの実行中にエラーが発生した場合は、表示されるエラーメッセージに従ってください。場合によっては手動での修正が必要になることがあります。

- セットアップ完了後は、src/CardDetail.tsx に新しいディレクトリをインポートするのを忘れないでください。

# 技術スタック
- フロントエンド
  - React
  - TypeScript
  - Vite
