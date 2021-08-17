import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/header'
import Search, { CitysItem } from './components/search'
import Hot, { HousesItem } from './components/hot'
import { useRequest } from '@/hooks'
import './index.less'

const Home = () => {


    const cityRes = useRequest<CitysItem[]>({
        url: '/commons/citys',
        method: 'post'
    })

    const citys = cityRes.result
    const citysLoading = cityRes.loading

    const houseRes = useRequest({
        url: '/house/hot',
        method: 'post'
    })

    return <div className="home">
        <Header />
        <Search citys={citys} citysLoading={citysLoading!} />
        <Hot houses={houseRes.result} />
    </div>
}

export default Home