import axios from 'axios';
const HOST_BASE = 'https://dahuotu.bdery.com/api'

// 搜索书籍
export const searchBook = (params) => axios.get(`${HOST_BASE}/api.aspx?act=xiaoshuo&val=${params}`).then(res=>res.data)
// 书籍章节
export const getBooKChapter = (params) => axios.get(`${HOST_BASE}/api.aspx?act=xiaoshuo_list&val=${params}`)