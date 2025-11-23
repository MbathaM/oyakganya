import { Lato, Playfair_Display } from 'next/font/google'
import { cn } from "@/lib/utils"
 
// const geist = Geist({
//   subsets: ['latin'],
// })
// const geist_mono = Geist_Mono({
//   subsets: ['latin'],
// })

const lato = Lato({
  // subsets: ['latin'],
  weight: '400',
  display: 'swap',
  style: 'normal',
  variable: '--font-lato',
  preload: true,
})
const playfair_display = Playfair_Display({
  // subsets: ['latin'],
  weight: '400',
  display: 'swap',
  style: 'normal',
  variable: '--font-lato',
  preload: true,
})

export const fontVariables = cn(
  // geist.className,
  // lato.variable,
  playfair_display.variable,
  // geist_mono.className,
)

