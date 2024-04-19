'use client';

export default function Error({
    error,
    reset
}: {error: Error, reset: () => void}) {
    return <>
        <div>
            don't work
        </div>
        <div>{JSON.stringify(error)}</div>
        <div onClick={() => reset()}>Try it</div>
    </>;
}