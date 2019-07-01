import axios from 'axios';
const HOST_BASE = 'https://www.mxnzp.com/api'

// 搜索书籍
export const searchMusic = (params) => axios.get(`${HOST_BASE}/music/song/search?keyWord=${params.name}&page=${params.page}`).then(res=>res.data)
// 书籍章节
export const getMusicDetails = (params) => axios.get(`${HOST_BASE}/music/song/detail?songId=${params}`)