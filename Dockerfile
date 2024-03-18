# ベースイメージを指定します。ここでは、Node.jsの公式イメージを使用します。
FROM node:14-alpine

# 作業ディレクトリを設定します。
WORKDIR /app

# アプリケーションの依存関係をインストールするために、package.jsonとpackage-lock.jsonをコピーします。
COPY ./app/package*.json ./

# 依存関係をインストールします。
RUN npm install

# アプリケーションのソースコードをコピーします。
COPY ./app .

# ビルドステージを開始します。
FROM node:14-alpine as builder

# 作業ディレクトリを設定します。
WORKDIR /app

# アプリケーションの依存関係をインストールします。
COPY package*.json ./
RUN npm install

# アプリケーションのソースコードをコピーします。
COPY . .

# Next.jsアプリケーションをビルドします。
RUN npm run build

# 実行ステージを開始します。
FROM node:14-alpine

# 作業ディレクトリを設定します。
WORKDIR /app

# ビルドされたアプリケーションをコピーします。
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# 必要な環境変数を設定します。これには、SupabaseのURLやキーなどが含まれます。
# これらの値は、実際の環境に合わせて変更する必要があります。
ENV NEXT_PUBLIC_SUPABASE_URL=https://qbljjmtrwcdkmtyqwuap.supabase.co
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFibGpqbXRyd2Nka210eXF3dWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzNTcyNzUsImV4cCI6MjAyNDkzMzI3NX0.XjbJdNlYwdA--F7J-eltX5XwRLg-MwZvTrCryelk4d0
ENV FIRST_REDIRET=/bordpage

# ポートを公開します。
EXPOSE 3000

# アプリケーションを起動します。
CMD ["npm", "start"]
