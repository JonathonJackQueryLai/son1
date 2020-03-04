import axios from './axioshttp1'

// export let id  ; 

export function getNewMultidata(id) {
  return axios({
    url: 'api/services/app/HymsonNews/GetHymsonNewsForView?id=' + id,
    
    // http://47.106.71.73:5000/api/services/app/HymsonNews/GetHymsonNewsForView?id=1

  })
}
// http://47.106.71.73:5000/api/services/app/HymsonNews/GetAll
export function getNewData() {
  return axios({

    url: 'api/services/app/HymsonNews/GetAll',

  })
}