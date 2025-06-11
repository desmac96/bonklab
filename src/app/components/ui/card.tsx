export function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-lg border bg-black p-6 text-white">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="mt-4">{children}</div>;
}
