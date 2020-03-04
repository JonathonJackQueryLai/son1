import axios from './axioshttp1'

export const BANNER = 'banner'
export const RECOMMEND = 'recommend'

export function getNewMultidata() {
  return axios({
    url: 'api/services/app/HymsonNews/GetHymsonNewsForView'

  })
}
// http://47.106.71.73:5000/api/services/app/HymsonNews/GetAll
export function getNewData() {
  return axios({
    url: '',
    url: 'api/services/app/HymsonNews/GetAll',
    // params: {
    //   id
    // }
  })
}