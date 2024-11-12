'use client'

import { useState } from "react";
import useSound from "use-sound";
import { sounds } from "@/res/sounds/sound_data";

// types

interface SoundbitProps {
    title: string
    sound_path: string
}

export default function Soundboard(){
    return(
        <div className="flex flex-wrap gap-4 justify-center justify-items-center px-3">
            {sounds.map((sound, idx) => (
                <Soundbit key={idx} title={sound.name} sound_path={sound.path} />
            ))}
        </div>
    )
}


function Soundbit({ title, sound_path }: SoundbitProps){
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, {stop}] = useSound(sound_path, {
        onend: () => setIsPlaying(false),
    });

    let handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if (isPlaying){
            stop();
            setIsPlaying(false);
        } else {
            play();
            setIsPlaying(true);
        }
    }

    return(
        <div className="w-28 flex flex-col justify-items-center items-center">
            <button className={`w-24 h-24 ${isPlaying ? 'bg-primary' : 'bg-base-300'} rounded-lg my-auto`} onClick={handleClick}></button>
            <p className="text-center text-sm text-balance break-all whitespace-normal pt-1">{title}</p>
        </div>
    )
}