import { Providers } from './providers'

export const metadata = {
  title: "SafeAck - API Security Platform",
  description: "Platform to Safely Explore and Hack APIs"
}

export default function RootLayout({
    children,
}: {
  readonly children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}