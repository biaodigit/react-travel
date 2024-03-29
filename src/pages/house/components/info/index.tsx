// @flow 
import React from 'react';
import { Button } from 'antd-mobile';
import { timer } from '@/utils'
type Props = {
    detail: {
        title: string
        msg: string
        price: string
        publishTime: number
        startTime: number
        endTime: number
    }
};
const Info: React.FC<Props> = (props) => {
    return (
        <div className='info'>
            <div className='info-title'>{props?.detail?.title}</div>
            <div className='info-msg'>简介：{props?.detail?.msg}</div>
            <div className='info-price'>价格：{props?.detail?.price}</div>
            <div className='info-time'>发布时间：{timer(props?.detail?.publishTime)}</div>
            <div className='info-time'>开始出租：{timer(props?.detail?.startTime, '')}</div>
            <div className='info-time'>结束出租：{timer(props?.detail?.endTime, '')}</div>
            <Button className='info-btn' type='warning'>预定</Button>
        </div>
    );
};

export default Info