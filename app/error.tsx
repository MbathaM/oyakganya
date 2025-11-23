"use client"
import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-primary text-white flex items-center justify-center px-4">
      <div className="bg-primary/30 border border-white/10 rounded-sm p-8 max-w-md w-full text-center shadow-xl">
        <AlertTriangle className="mx-auto mb-4 text-accent" size={40} />
        <h2 className="font-serif text-2xl font-bold mb-2">Something went wrong</h2>
        <p className="text-white/80 mb-6">Please try again or return home.</p>
        <div className="flex justify-center gap-4">
          <button onClick={() => reset()} className="bg-accent text-primary font-bold px-6 py-3 rounded-sm transition-colors hover:bg-white">Try Again</button>
          <Link href="/" className="border border-white/30 text-white px-6 py-3 rounded-sm hover:bg-white/10">Home</Link>
        </div>
      </div>
    </div>
  )
}
