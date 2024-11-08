import { Header } from "@/_ui"

export default function SoundboardLayout({children}: { children: React.ReactNode }) {
    return (
        <div>
            <Header text="Mo's Soundboard"/> 
            {children}
        </div>
  )
}