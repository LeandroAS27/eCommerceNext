import clsx from 'clsx';

export default function SkeletonCard({isLoading}: {isLoading?: boolean}){
    return(
        <div className={clsx(
            'flex flex-col shadow-lg h-96 bg-[#DEE5D4] p-5 rounded-lg',
            {
                'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite]before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent' :
                isLoading,
            }
        )}>
            <div className="relative max-h-72 flex-1 bg-zinc-700"></div>
            <div className="flex justify-between font-bold my-3 bg-zinc-700"></div>
            <div className="h-3 w-8/12 rounded-lg bg-zinc-700"></div>
        </div>
    )
}