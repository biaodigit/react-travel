import { useEffect } from 'react'
import { isEmpty } from 'project-libs'

let observer: IntersectionObserver;
function useImg(ele: string, callback: (entries: IntersectionObserverEntry[]) => void, dep: any = []) {
    useEffect(() => {
        const nodes = document.querySelectorAll(ele)
        if (!isEmpty(nodes)) {
            observer = new IntersectionObserver((entries) => {
                callback && callback(entries)
                entries.forEach((entry: IntersectionObserverEntry) => {
                    if (entry.isIntersecting) {
                        const dataSrc = entry.target.getAttribute('data-src')
                        entry.target.setAttribute('src', dataSrc!)
                        observer.unobserve(entry.target)
                    }
                })
            })
            nodes.forEach((item) => {
                observer.observe(item)
            })
        }

        return () => {
            if (!isEmpty(nodes) && observer) {
                observer.disconnect()
            }
        }
    }, dep)
}

export default useImg