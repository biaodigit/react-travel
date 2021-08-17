import React, { useState, useEffect } from 'react'
import { CommonEnum } from '@/enums'

interface ShowLoadingProps {
    showLoading: boolean
}

const ShowLoading: React.FC<ShowLoadingProps> = (props) => {
    const { showLoading } = props
    const [state, setState] = useState()

    return (
        <div>
            {
                showLoading ? <div id={CommonEnum.LOADING_ID} className="loading-info">loading</div> : <div className="loading-info">没有数据～</div>
            }
        </div>
    )

}

ShowLoading.defaultProps = {
    showLoading: true
}

export default ShowLoading