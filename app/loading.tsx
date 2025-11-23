export default function Loading() {
  return (
    <div className="min-h-screen bg-primary text-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-white/20 border-t-accent animate-spin"></div>
        <p className="font-serif text-2xl font-bold">OYAKGANYA</p>
        <p className="text-xs tracking-widest uppercase text-white/70">Loading</p>
      </div>
    </div>
  )
}
