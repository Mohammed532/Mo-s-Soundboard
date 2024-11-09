/*
Sounds are stored in the public folder, for relative pathing. Current solution for beta.
*/ 

let dir_path = '/sounds';

export const sounds = [
    {
        name: 'Boo',
        path: `${dir_path}/boo_sound_effect.mp3`
    },
    {
        name: 'Good Answer',
        path: `${dir_path}/good_answer.mp3`
    },
    {
        name: 'Jeopardy',
        path: `${dir_path}/jeopardy_theme_song.mp3`
    },
    {
        name: 'Wait A Min...',
        path: `${dir_path}/who_are_you.mp3`
    },
    {
        name: 'Brother Eww',
        path: `${dir_path}/brother_eww.mp3`
    }
]