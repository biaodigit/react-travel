import { Toast } from 'antd-mobile'

type Result = {
    status: number
    data: any
    errMsg?: string
}

export default async function Http<T>(config: {
    url: string,
    method?: string,
    headers?: any,
    body?: any,
    setLoading?: (status: boolean) => void,
    setResult?: (data: T) => void
}) {
    const { url, method = 'post', headers, body = {}, setLoading, setResult } = config
    setLoading && setLoading(true)
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
                    setResult && setResult(res.data)
                    resolve(res.data)
                } else {
                    Toast.fail(res.errMsg)
                    reject(res.errMsg)
                }
            }).catch(err => {
                Toast.fail(err)
                reject(err)
            }).finally(() => {
                setLoading && setLoading(false)
            })
    })
}
