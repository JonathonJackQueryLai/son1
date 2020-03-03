import axios from './axios'

export const BANNER = 'banner'
export const RECOMMEND = 'recommend'

export function getHomeMultidata() {
  return axios({
    url: 'api/services/app/HymsonNews/GetAll'
    
  })
}

export function getHomeData(id) {
  return axios({
    url: 'api/services/app/HymsonNews/GetHymsonNewsForView',
    params: {
      id
    }
  })
}