import { Http } from "@/utils"
import { CommonEnum } from "@/enums"

export default {
    state: {
        detail: {},
        comments: [],
        page: CommonEnum.PAGE,
        showLoading: true,
        reloadCommentsNum: 0
    },
    methods: {
        getDetail(state: any, payload: any) {
            return {
                ...state,
                detail: payload
            }
        },
        getComments(state: any, payload: any) {
            return {
                ...state,
                comments: payload
            }
        },
        setShowLoading(state: any, payload: any) {
            return {
                ...state,
                showLoading: payload
            }
        },
        reloadComments(state: any, payload: any) {
            return {
                ...state,
                reloadCommentsNum: state.reloadCommentsNum + 1,
                page: {
                    ...CommonEnum.PAGE,
                    pageNum: state.page.pageNum + 1
                }
            }
        }
    },
    effects: {
        async getDetailAsync(dispatch: (arg0: { type: string; payload: unknown }) => void, rootState: any, payload: any) {
            const detail = await Http({
                url: '/house/detail',
                method: 'post',
                body: payload
            })
            dispatch({
                type: 'getDetail',
                payload: detail
            })
        },
        async getCommentsAsync(dispatch: (arg0: { type: string; payload: unknown }) => void, rootState: any, payload: any) {
            const { comments, page } = rootState.house
            const lists = await Http({
                url: '/comments/lists',
                method: 'post',
                body: {
                    ...payload,
                    pageSize: page.pageSize,
                    pageNum: page.pageNum
                }
            })
            dispatch({
                type: 'getComments',
                payload: [...comments, ...(lists as any[])]
            })
            dispatch({
                type: 'setShowLoading',
                payload: !!(lists as any[]).length
            })
        }
    }
}