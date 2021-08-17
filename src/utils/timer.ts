import dayjs from 'dayjs'

export default function (time: number, type = 'all') {
    return dayjs(time).format(type === 'all' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD')
}