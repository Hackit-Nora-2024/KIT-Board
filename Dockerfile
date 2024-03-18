# ベースイメージを指定します。ここでは、Node.jsの公式イメージを使用します。
FROM node:14-alpine

# 作業ディレクトリを設定します。
WORKDIR /app

# 依存関係をインストールするために、プロジェクトのpackage.jsonとpackage-lock.jsonをコピーします。
COPY package*.json ./

# 依存関係をインストールします。
RUN npm install

# プロジェクトのソースコードをコピーします。
COPY . .

# ビルドステージでNext.jsプロジェクトをビルドします。
RUN npm run build

# 実行時に使用するポートを指定します。
EXPOSE 3000

# コンテナが起動したときに実行するコマンドを指定します。
CMD ["npm", "start"]
