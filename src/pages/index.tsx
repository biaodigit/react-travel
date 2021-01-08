import React, { useState } from 'react';
import { Button } from 'antd-mobile'
import LazyLoad from '../components/lazyload'
import Modal from '@/components/modal'
import useRequest from '@/hooks/useRequest'
import { useStates, useSetValue } from '@/state'
// import { useRequest } from 'react-web-hooks'
// import useRequest from 'react-web-hooks/lib/useRequest'
// import useBoolean from 'ahooks/es/useBoolean'
import { usePrevious } from 'react-web-hooks'
import styles from './index.less';

export default () => {

  const info = {}
  const [visible, setVisible] = useState(false)
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  const { user: { id, name } } = useStates()
  const setValue = useSetValue()
  useRequest({ url: '/getListsAsync', method: 'get', dep: [count] })
  // console.log(user)
  return (
    <div>
      {/* @ts-ignore */}
      {/* {info.obj.id} */}
      <h1 className={styles.title}>Page index</h1>
      <div>counter current value: {count}</div>
      <div style={{ marginBottom: 8 }}>counter previous value: {previous}</div>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        increase
      </button>
      <button type="button" style={{ marginLeft: 8 }} onClick={() => setCount((c) => c - 1)}>
        decrease
      </button>
      <p>{id} - {name}</p>
      <button onClick={() => setValue({ user: { id: 10, name: 'hahah' } })}>set user</button>
      <LazyLoad />
      <Button type="primary" onClick={() => setVisible(true)}>show</Button>
      <Modal visible={visible} onClose={() => setVisible(false)}>modal</Modal>
    </div>
  );
}
