import { useState, useEffect } from 'react'
import { Toast } from 'antd-mobile'

type Result = {
    status: number
    data: any
    errMsg?: string
}

function useRequest(config: {
    url: string,
    method: string,
    headers?: any,
    body?: any,
    dep?: any[]
}) {
    const [result, setResult] = useState()
    const [loading, setLoading] = useState(true)
    const { url, method, headers, body = {}, dep = [] } = config

    async function Http() {
        setLoading(true)
        const defaultHeader = {
            'Content-type': 'application/json'
        }

        let params: any;
        if (method.toUpperCase() === 'GET') {
            params = undefined
        } else {
            params = {
                headers: {
                    ...defaultHeader,
                    ...headers
                },
                method,
                body: JSON.stringify(body)
            }
        }

        return new Promise((resolve, reject) => {
            fetch(`/api${url}`, params).then(res => res.json())
                .then((res: Result) => {
                    if (res.status === 200) {
                        setResult(res.data)
                        resolve(res.data)
                    } else {
                        Toast.fail(res.errMsg)
                        reject(res.errMsg)
                    }
                }).catch(err => {
                    Toast.fail(err)
                    reject(err)
                }).finally(() => {
                    setLoading(false)
                })
        })
    }

    useEffect(() => {
        Http()
    }, dep)

    return { result, loading }
}

export default useRequest