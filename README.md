This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# 技術解説

## Header

- MUI の [App bar](https://mui.com/material-ui/react-app-bar/?utm_source=chatgpt.com) を元に作成した．
- ハンバーガーメニュー内のホバーの設定．（ホバー時の文字と背景色）
- Link の使用
  - rucide-react の Link と間違えないように

## Image Slider

- Swaiper[https://swiperjs.com/get-started] を元に作成した．

## Badge

- Shadcn[https://ui.shadcn.com/docs/components/badge] の Badge を元に作成した．
- Tailwindcss のプロパティが非常に優秀な設計になっている．

### Next.js の Link と passHref の使い分け

- 1. Badge の中身が `<a>` タグの場合
     passHref は不要

  ```tsx
  <Link href="/pickup">
    <a>PICKUP</a>
  </Link>
  ```

  **理由:** Next.js は `<a>` タグを特別扱いしており，自動的に `href` を渡すため

- 2. Badge の中身がカスタムコンポーネントの場合

  - 一般的なケース：passHref が必要

    Next.js では `<a>` タグを直接使うことは稀で，カスタムコンポーネントが大半．

    ```tsx
    <Link href="/pickup" passHref>
      <Badge>PICKUP</Badge>
    </Link>
    ```

    **理由:** `<a>` 以外のタグには props 経由で Link を渡す必要があるため

  - asChild パターン対応コンポーネントの場合

    コンポーネントが `asChild` パターンや ref forwarding に対応している場合は、上記の方法で問題ありません。

  - 自作コンポーネントの場合：コンポーネント内で Link を扱う

    自作コンポーネントでは、**コンポーネント内部で Link を扱う**設計が推奨．

    ```tsx
    // MyBadge.tsx
    import Link from "next/link";

    type MyBadgeProps = {
      href: string;
      children: React.ReactNode;
    };

    export default function MyBadge({ href, children }: MyBadgeProps) {
      return (
        <Link href={href} passHref>
          <span className="inline-block bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold hover:bg-red-600 transition">
            {children}
          </span>
        </Link>
      );
    }
    ```

    呼び出し側

    ```tsx
    <MyBadge href="/pickup">PICKUP</MyBadge>
    ```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
