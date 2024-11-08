'use client'

// types

interface SoundbitProps {
    title: string
}

export default function Soundboard(){
    let test = Array.from({length: 20} , (_, i) => i);
    
    return(
        <div className="grid grid-cols-3 gap-3 justify-center justify-items-center">
            {test.map(i => (
                <Soundbit key={i} title={`${i}`} />
            ))}
        </div>
    )
}


function Soundbit({ title }: SoundbitProps){
    return(
        <div>
            <div className="w-24 h-24 bg-base-300 rounded-lg"></div>
            <p className="text-center text-sm pt-3">Test Bit {title}</p>
        </div>
    )
}