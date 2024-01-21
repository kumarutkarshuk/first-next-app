
  export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
          <header>Auth Header</header>
          {children}
          <footer>Auth Footer</footer>
        </div>
    )
  }
  