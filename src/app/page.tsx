import Link from 'next/link'

export default function Landing() {
    return (
        <main className="landing">
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold m-5">Mo's Soundboard</h1>
                        <Link href='/soundboard' className='btn btn-accent'>Let's Go!</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
