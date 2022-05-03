import { CloseButton } from "./CloseButton";

import bugImageUrl from '../assets/bug.svg';
import ideaImageUrl from '../assets/idea.svg';
import thoughtImageUrl from '../assets/thought.svg';

const feedbackTypes = {
    BUG:{
        title: 'Problem',
        image: {
            source: bugImageUrl,
            alt: 'Problem image'
        }
    },
    IDEA:{
        title: 'Idea',
        image: {
            source: ideaImageUrl,
            alt: 'Idea image'
        }
    },
    OTHER:{
        title: 'Other',
        image: {
            source: thoughtImageUrl,
            alt: 'Cloud image'
        }
    }
}

export function WidgetForm(){
    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Give your feedback</span>
                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                { Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            type="button"
                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                }) }
            </div>

            <footer className="text-xs text-neutral-400">
                Created by <a className="underline underline-offset-2" href="#">Test</a>
            </footer>
        </div>
    )
}