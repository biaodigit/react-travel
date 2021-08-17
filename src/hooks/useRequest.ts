import { useState, useEffect } from 'react'
import { Http } from '@/utils'

function useRequest<T>(config: {
    url: string,
    method: string,
    headers?: any,
    body?: any,
    dep?: any[]
}) {
    const [result, setResult] = useState<T>()
    const [loading, setLoading] = useState(true)
    const { url, method, headers, body, dep = [] } = config

    useEffect(() => {
        Http({
            url,
            method,
            headers,
            body,
            setLoading,
            setResult
        })
    }, dep)

    return { result, loading }
}

export default useRequest