'use client'

export default function Header({text}: {text: string} ){
    return(
        <header className="sticky top-0 bg-base-300 w-full shadow-md text-center mb-5 py-3">
            <h1 className="">{text}</h1>
        </header>
    )
}