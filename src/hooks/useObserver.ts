import { useEffect } from 'react'

let observer: IntersectionObserver;
function useObserver(ele: string, callback: (entries: IntersectionObserverEntry[]) => void, dep: any = []) {
    useEffect(() => {
        const node = document.querySelector(ele)
        if (node) {
            observer = new IntersectionObserver(entries => {
                callback && callback(entries)
            })
            observer.observe(node)
        }

        return () => {
            if (observer && node) {
                observer.unobserve(node)
                observer.disconnect()
            }
        }
    }, dep)
}

export default useObserver