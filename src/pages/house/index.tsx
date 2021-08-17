import React, { useEffect } from 'react'
import Banner from './components/banner';
import Info from './components/info';
import Lists from './components/lists';
import Footer from './components/footer';
import { useStoreHook } from 'think-react-store';
import { useObserver } from '@/hooks';
import { CommonEnum } from '@/enums';
import './index.less'

const House: React.FC = () => {
    const { house: { detail, getDetailAsync, getCommentsAsync, comments, showLoading, reloadComments, reloadCommentsNum } } = useStoreHook()

    useObserver(`#${CommonEnum.LOADING_ID}`, (entries: IntersectionObserverEntry[]) => {
        if (comments && comments.length && showLoading && entries[0].isIntersecting) {
            reloadComments()
        }
    }, [comments, showLoading])
    useEffect(() => {
        getDetailAsync({})
    }, [])
    useEffect(() => {
        getCommentsAsync({})
    }, [reloadCommentsNum])

    return <div className='house-page'>
        <Banner banner={detail?.banner} />
        <Info detail={detail?.info} />
        <Lists lists={comments} showLoading={showLoading} />
        <Footer />
    </div>
}

export default House