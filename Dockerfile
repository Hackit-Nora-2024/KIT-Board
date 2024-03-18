# Next.jsの公式イメージをベースにする
FROM node:alpine

# アプリケーションのディレクトリを作成し、そこに移動する
WORKDIR /app

# アプリケーションの依存関係をインストールする
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile

# アプリケーションのソースコードをコピーする
COPY . .

# Next.jsアプリケーションをビルドする
RUN yarn build

# アプリケーションを実行するためのコマンドを指定する
CMD ["yarn", "start"]
