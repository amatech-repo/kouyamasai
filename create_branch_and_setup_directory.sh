#!/bin/bash

# ヘルプメッセージ関数
print_help() {
  echo "使用法: $0 <new-branch-name> <new-dir-name> <new-path> <new-name>"
  echo "または: $0 -h または $0 -help"
  echo ""
  echo "引数:"
  echo "  new-branch-name    新しく作成するブランチの名前。-> ブランチ名：pc-{pc番号}/{体験者番号}"
  echo "  new-dir-name       ファイルをコピーして名前を変更する新しいディレクトリの名前。(英語, 先頭は大文字)"
  echo "  new-path           リンク名。(英語, 先頭は大文字)"
  echo "  new-name           サイトに表示される体験者の名前。(自由 -> あだ名 or 名前)"
  echo ""
  echo "例:"
  echo "  $0 pc-{pc番号}/{体験者番号} NewFeature NewPath '体験者の名前'"
}

# 新しいブランチ名、ディレクトリ名、パス、名前を引数から取得
NEW_BRANCH_NAME=$1
NEW_DIR_NAME=$2
NEW_PATH=$3
NEW_NAME=$4

# 引数が-helpまたは-hの場合はヘルプメッセージを表示
if [ "$1" == "-help" ] || [ "$1" == "-h" ]; then
  print_help
  exit 0
fi

# 引数が指定されているか確認
if [ -z "$NEW_BRANCH_NAME" ] || [ -z "$NEW_DIR_NAME" ] || [ -z "$NEW_PATH" ] || [ -z "$NEW_NAME" ]; then
  print_help
  exit 1
fi

# dirNameの先頭が大文字であることを確認
if [[ ! $NEW_DIR_NAME =~ ^[A-Z] ]]; then
  echo "エラー: 'new-dir-name' は先頭大文字でなければなりません。"
  exit 1
fi

# NEW_PATHの先頭が大文字であることを確認
if [[ ! $NEW_PATH =~ ^[A-Z] ]]; then
  echo "エラー: 'new-path' は先頭大文字でなければなりません。"
  exit 1
fi

# 引数が-helpまたは-hの場合はヘルプメッセージを表示
if [ "$1" == "-help" ] || [ "$1" == "-h" ]; then
  print_help
  exit 0
fi

# 引数が指定されているか確認
if [ -z "$NEW_BRANCH_NAME" ]; then
  echo "エラー: 新しいブランチ名が指定されていません。"
  print_help
  exit 1
fi

if [ -z "$NEW_DIR_NAME" ]; then
  echo "エラー: 新しいディレクトリ名が指定されていません。"
  print_help
  exit 1
fi

# dirNameの先頭が大文字であることを確認
if [[ ! $NEW_DIR_NAME =~ ^[A-Z] ]]; then
  echo "エラー: 'new-dir-name' は先頭大文字でなければなりません。"
  exit 1
fi

# 関数: エラー発生時にメッセージを表示してスクリプトを終了する
exit_with_error() {
  echo "エラー: $1" >&2
  exit 1
}

# 既存のブランチがあるかチェック
if git show-ref --verify --quiet "refs/heads/$NEW_BRANCH_NAME"; then
  exit_with_error "ブランチ '$NEW_BRANCH_NAME' はすでに存在しています。"
fi

# 1. リモートのmainから最新の変更を取り込んだ状態でブランチを作成
git switch main || exit_with_error "mainブランチにチェックアウトできません。"
git fetch || exit_with_error "mainブランチをフェッチできません。"
git pull origin main || exit_with_error "mainブランチをプルできません。"
git checkout -b $NEW_BRANCH_NAME || exit_with_error "'$NEW_BRANCH_NAME' ブランチを作成してチェックアウトできません。"

# 2. src/ListCards/SampleCards/*を任意のディレクトリ名で作成
mkdir -p "src/ListCards/$NEW_DIR_NAME" || exit_with_error "'src/ListCards/$NEW_DIR_NAME' ディレクトリを作成できません。"
cp -r src/ListCards/SampleCards/* "src/ListCards/$NEW_DIR_NAME/" || exit_with_error "'src/ListCards/$NEW_DIR_NAME' にファイルをコピーできません。"

# 3. 指定したディレクトリ名にSampleCard.tsxをディレクトリ名.tsxに変更
mv "src/ListCards/SampleCards/SampleCard.tsx" "src/ListCards/$NEW_DIR_NAME/$NEW_DIR_NAME.tsx" || exit_with_error "SampleCard.tsx を $NEW_DIR_NAME.tsx に名前変更できません。"
rm -rf "src/ListCards/$NEW_DIR_NAME/SampleCard.tsx" || exit_with_error "src/ListCards/$NEW_DIR_NAME/SampleCard.tsx を削除できません。"
rm -rf "src/ListCards/$NEW_DIR_NAME/SampleCard.css" || exit_with_error "src/ListCards/$NEW_DIR_NAME/SampleCard.css を削除できません。"

# 4. 同様にSampleCard.cssも変更
mv "src/ListCards/SampleCards/SampleCard.css" "src/ListCards/$NEW_DIR_NAME/$NEW_DIR_NAME.css" || exit_with_error "SampleCard.css を $NEW_DIR_NAME.css に名前変更できません。"

# 5. 指定したディレクトリ名にSampleCard.tsx内のSampleCardという単語を全変換
sed -i '' "s/SampleCard/$NEW_DIR_NAME/g" "src/ListCards/$NEW_DIR_NAME/$NEW_DIR_NAME.tsx" || exit_with_error "'$NEW_DIR_NAME.tsx' 内の 'SampleCard' を '$NEW_DIR_NAME' に置換できません。"

# 6. Home.tsx ファイル内のnames配列の最後に新しいエントリを追加
HOME_TSX_PATH="src/Pages/Home.tsx"
sed -i '' "/];/i \    { path: '${NEW_PATH}', name: '${NEW_NAME}' }," $HOME_TSX_PATH || exit_with_error "./src/Pages/Home.tsx に新しいエントリを追加できませんでした。手動で追加してください。"

echo "処理が正常に完了しました。\n"
echo "src/CardDetail.tsxに作成した${NEW_DIR_NAME}を追加(import)してください。"