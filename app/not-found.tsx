import Link from 'next/link'
import { Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary text-white flex items-center justify-center px-4">
      <div className="bg-primary/30 border border-white/10 rounded-sm p-8 max-w-md w-full text-center shadow-xl">
        <Search className="mx-auto mb-4 text-accent" size={40} />
        <h2 className="font-serif text-2xl font-bold mb-2">Page Not Found</h2>
        <p className="text-white/80 mb-6">Could not find the requested resource.</p>
        <Link href="/" className="bg-accent text-primary font-bold px-6 py-3 rounded-sm transition-colors hover:bg-white">Return Home</Link>
      </div>
    </div>
  )
}
