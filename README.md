## DevToysWeb

ブラウザで開く DevToys。
Vercel にも置くかもだが、clone して静的ファイルとして使えたら嬉しい。

入れたい機能：

- Generator
  - csv ダミーデータ出力 wip
    - csv データテンプレート出力
- DEncoder
  - Base64 EnDecoder
  - JWT EnDecoder
- Convertor
  - 基数変換
- Formatter
  - json format
    - JSON.stringify(JSON.parse(it), null, \t)ってするだけ

## Default から移植

- Documentation
  - Find in-depth information about Next.js features and API.
  - https://nextjs.org/docs
- Learn
  - Learn about Next.js in an interactive course with quizzes!
  - https://nextjs.org/learn
- Examples
  - Discover and deploy boilerplate example Next.js projects.
  - https://github.com/vercel/next.js/tree/canary/examples
- Deploy
  - Instantly deploy your Next.js site to a public URL with Vercel.
  - https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app

## Get static html(WIP)

```bash
npm run export && find ./out -type f -print0 | xargs -0 sed -i -e 's/\/_next\//.\/_next\//g' -e 's/\/favicon.ico/.\/favicon.ico/g'
```

See /out/index.html

## Getting Started

Run the development server:

```bash
npm run dev
```

See [http://localhost:3000](http://localhost:3000).

## Contribute

```
npm run lint:fix
npm run format
```

WIP: test

## Deploy on Vercel

WIP
