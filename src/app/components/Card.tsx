export default function Card({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <div className="bg-yellow-200">
        {children}
    </div> )
  }

  