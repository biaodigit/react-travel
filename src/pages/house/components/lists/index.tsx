// @flow 
import React from 'react';
import { ShowLoading } from '@/components';
import { timer } from '@/utils'

type Props = {
  lists: Array<{ id: string, avatar: string, username: string, createTime: number, info: string }>
  showLoading: boolean
};
const Lists: React.FC<Props> = (props) => {
  return (
    <div className='comment'>
      <h1 className='comment-title'>评论</h1>
      <div className='comment-lists'>
        {props?.lists?.map(item => (
          <div className='comment-lists_item' key={item?.id}>
            <img alt='user' className='avatar' src={item?.avatar} />
            <div className='right'>
              <div className='right-top'>
                <p>{item?.username}</p>
                <p>{timer(item?.createTime)}</p>
              </div>
              <div className='right-bottom'>
                {item?.info}
              </div>
            </div>
          </div>
        ))}
        <ShowLoading showLoading={props?.showLoading} />
      </div>
    </div>
  );
};

export default Lists