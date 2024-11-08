'use client'

export default function Header({text}: {text: string} ){
    return(
        <header className="bg-white w-full text-center py-5">
            <h1 className="">{text}</h1>
        </header>
    )
}