import { CloseButton } from "../../CloseButton";
import successImageUrl from '../../../assets/success.svg';

interface FeedbackSuccessStepProps{
    onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({ onFeedbackRestartRequested }: FeedbackSuccessStepProps){
    return(
        <>
            <header>
                <CloseButton />
            </header>

            <div className="flex flex-col items-center py-10 w-[384px]">
                <img className="h-14 w-14" src={successImageUrl} alt="Success image" />
            </div>

            <span className="text-xl mt-2">
                Thank you for your feedback!!!
            </span>

            <button
                onClick={onFeedbackRestartRequested}
                type="button"
                className="py-2 px-6 mt-6 mb-5 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            >
                Send another feedback here
            </button>
        </>
    )
}