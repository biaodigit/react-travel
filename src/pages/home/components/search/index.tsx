import React, { useState, useEffect } from 'react'
import { Picker, List, Calendar, Button, Toast } from 'antd-mobile'
import dayjs from 'dayjs'
import { history } from 'umi'
import { useObserver } from '@/hooks'

interface SearchProps {
    citys: any
    citysLoading: boolean
}

export type CitysItem = {
    label: string
    value: string
}
const Search: React.FC<SearchProps> = (props) => {
    const { citys, citysLoading } = props
    const [selectedCity, setSelectedCity] = useState(['001'])
    const [times, setTimes] = useState('可选时间')
    const [dateShow, setDateShow] = useState(false)

    const handleCityChange = (value: any) => {
        setSelectedCity(value)
    }

    const handleDate = () => {
        setDateShow(!dateShow)
    }

    const handleDateConfirm = (startTime?: Date, endTime?: Date) => {
        setTimes(`${dayjs(startTime).format('YYYY-MM-DD')} ~ ${dayjs(endTime).format('YYYY-MM-DD')}`)
        setDateShow(!dateShow)
    }

    const handleClick = () => {
        if (times.includes('~')) {
            history.push({
                pathname: '/search',
                query: {
                    code: selectedCity,
                    startTime: times.split('~')[0],
                    endTime: times.split('~')[1]
                }
            })
        } else {
            Toast.fail('请选择时间')
        }
    }

    return <div className="search">
        <div className='search_addr'>
            {citysLoading ? null :
                <Picker
                    title='城市'
                    data={citys}
                    value={selectedCity}
                    cascade={false}
                    cols={1}
                    onChange={handleCityChange}
                >
                    <List.Item>可选城市</List.Item>
                </Picker>
            }
        </div>
        <div className='search-time' onClick={handleDate}>
            <p className='search-time_left'>出租时间</p>
            <p className='search-time_right'>{times}</p>
        </div>
        <Button type='warning' size='large' onClick={handleClick}>搜索民宿</Button>
        <Calendar
            visible={dateShow}
            onCancel={handleDate}
            onConfirm={handleDateConfirm}
        />
    </div>
}

export default Search