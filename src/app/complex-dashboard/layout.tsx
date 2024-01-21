//parallel routes are passed as props to layout.tsx


export default function RootLayout({
    children,
    analytics,
    notifications
  }: {
    children: React.ReactNode,
    analytics: React.ReactNode,
    notifications: React.ReactNode
  }) {
    
    return (
      <>
        {children}
        <div className="flex flex-col gap-2">
            {analytics}
            {notifications}
        </div>
      </>
    )
  }