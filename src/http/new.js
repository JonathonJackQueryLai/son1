import axios from './axios'

export const BANNER = 'banner'
export const RECOMMEND = 'recommend'

export default function getNewMultidata() {
  return axios({
    url: 'api/services/app/HymsonNews/GetAll'
    
  })
}

export default function getNewData(id) {
  return axios({
    url: 'api/services/app/HymsonNews/GetHymsonNewsForView',
    params: {
      id
    }
  })
}