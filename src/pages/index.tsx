import React from 'react';
import { Button } from 'antd-mobile'
import LazyLoad from '../components/lazyload'
import Modal from '@/components/modal'
import styles from './index.less';

export default () => {
  const info = {}
  const [visible, setVisible] = React.useState(false)

  return (
    <div>
      {/* @ts-ignore */}
      {/* {info.obj.id} */}
      <h1 className={styles.title}>Page index</h1>
      <LazyLoad />
      <Button type="primary" onClick={() => setVisible(true)}>show</Button>
      <Modal visible={visible} onClose={() => setVisible(false)}>modal</Modal>
    </div>
  );
}
