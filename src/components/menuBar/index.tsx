import React, { useState } from 'react'
import { useHistory } from 'umi'
import { TabBar } from 'antd-mobile'
import { BsHouseDoorFill, BsHouseDoor, BsBag, BsBagFill, BsPerson, BsPersonFill } from 'react-icons/bs'
import './index.less'

interface MenuBarProps {
    show?: boolean
    pathname?: string
}

const initialState = {
    items: [
        {
            title: '首页',
            selectedIcon: <BsHouseDoorFill style={{ fontSize: '1.5rem' }} />,
            icon: <BsHouseDoor style={{ fontSize: '1.5rem' }} />,
            link: '/'
        },
        {
            title: '订单',
            selectedIcon: <BsBagFill style={{ fontSize: '1.5rem' }} />,
            icon: <BsBag style={{ fontSize: '1.5rem' }} />,
            link: '/order'
        },
        {
            title: '我的',
            selectedIcon: <BsPersonFill style={{ fontSize: '1.5rem' }} />,
            icon: <BsPersonFill style={{ fontSize: '1.5rem' }} />,
            link: '/user'
        }
    ]
}

const MenuBar: React.FC<MenuBarProps> = (props) => {
    const [state, setState] = useState(initialState)
    const history = useHistory()
    const { show = false, pathname = '' } = props
    const { items } = state
    return <div className="menu-bar">
        <TabBar hidden={!show}>
            {items.map(item => (
                <TabBar.Item
                    key={item.link}
                    title={item.title}
                    icon={item.icon}
                    selectedIcon={item.selectedIcon}
                    selected={pathname === item.link}
                    onPress={() => history.push(item.link)}
                />
            ))}
        </TabBar>
    </div>
}

export default MenuBar