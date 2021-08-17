import React, { useState, useEffect } from 'react'
import { SearchBar, ActivityIndicator } from 'antd-mobile'
import { useObserver, useRequest, useImg } from '@/hooks'
import { useLocation } from 'react-router-dom'
import { ShowLoading } from '@/components'
import { CommonEnum } from '@/enums'

import './index.less'

type HouseItem = {
    id: string
    img: string
    title: string
    info: string
    price: string
}

const Search: React.FC = () => {
    const { query } = useLocation()
    const [houseName, setHouseName] = useState('')
    const [page, setPage] = useState(CommonEnum.PAGE)
    const [houseLists, setHouseLists] = useState<HouseItem[]>([])
    const [showLoading, setShowLoading] = useState(true)
    const [houseSumitName, setHouseSumitName] = useState('')
    console.log(query)
    const { result, loading } = useRequest<HouseItem[]>({
        url: '/house/search',
        method: 'post',
        body: {
            ...page,
            houseName,
            code: query?.code,
            startTime: query?.startTime + ' 00:00:00',
            endTime: query?.endTime + ' 23:59:59'
        },
        dep: [page.pageNum, houseSumitName]
    })

    useObserver(`#${CommonEnum.LOADING_ID}`, (entries: IntersectionObserverEntry[]) => {
        console.log(entries)
        if (!loading && entries[0].isIntersecting) {
            setPage({
                ...page,
                pageNum: page.pageNum + 1
            })
        }
    }, null)

    useImg('.item-img', (entries) => {

    }, null)

    useEffect(() => {
        if (!loading && result) {
            if (result.length) {
                setHouseLists([...houseLists, ...result])
                if (result.length < page.pageSize) {
                    setShowLoading(false)
                }
            } else {
                setShowLoading(false)
            }
        }
    }, [loading])

    const handleChange = (value: string) => {
        setHouseName(value);
    }

    const _handleSubmit = (value: string) => {
        setHouseSumitName(value)
        setHouseName(value)
        setPage(CommonEnum.PAGE)
        setHouseLists([])
    };

    const handleCancle = () => {
        _handleSubmit('')
    };

    const handleSubmit = (value: string) => {
        _handleSubmit(value)
    };

    return (
        <div className='search-page'>
            <SearchBar
                placeholder="搜索民宿"
                value={houseName}
                onChange={handleChange}
                onCancel={handleCancle}
                onSubmit={handleSubmit}
            />

            {!houseLists.length ? <ActivityIndicator toast /> :
                <div className='result'>
                    {houseLists.map((item: HouseItem) => (
                        <div className='item' key={item.id}>
                            <img className='item-img' alt='img' data-src={item.img} src={require('../../assets/blank.png')} />
                            <div className='item-right'>
                                <div className='title'>{item.title}</div>
                                <div className='price'>{item.price}</div>
                            </div>
                        </div>
                    ))}
                    <ShowLoading showLoading={showLoading} />
                </div>
            }
        </div>
    )
}

export default Search