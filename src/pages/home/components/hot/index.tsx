import React, { useState } from 'react'

interface HotProps {
    houses: any
}

export type HousesItem = {
    id: string,
    img: string,
    title: string
    info: string
    price: string
}
const Hot: React.FC<HotProps> = (props) => {
    const { houses } = props

    return <div className="hot">
        <h1>最热民宿</h1>
        <div className='hot-lists'>
            {houses ? houses.map((item: HousesItem) => (
                <div className='hot-lists-item' key={item.id}>
                    <img className='img' alt='img' src={item.img} />
                    <div className='title'>{item.title}</div>
                    <div className='info'>{item.info}</div>
                    <div className='price'>¥{item.price}</div>
                </div>
            )) : null}
        </div>
    </div>
}

export default Hot