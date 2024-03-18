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

ENV FIRST_REDIRET=/bordpage
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFibGpqbXRyd2Nka210eXF3dWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzNTcyNzUsImV4cCI6MjAyNDkzMzI3NX0.XjbJdNlYwdA--F7J-eltX5XwRLg-MwZvTrCryelk4d0
ENV NEXT_PUBLIC_SUPABASE_URL=https://qbljjmtrwcdkmtyqwuap.supabase.co

# Next.jsアプリケーションをビルドする
RUN yarn build

# アプリケーションを実行するためのコマンドを指定する
CMD ["yarn", "start"]
