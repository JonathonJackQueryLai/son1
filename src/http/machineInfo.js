import axios from './axioshttp1'
import store from '../store'


export function getMachineState() {
  return axios({
    url: 'api/services/app/HymSonDeviceRuntimeRecord/GetList',

  })
}

export function getStatisticalProcessing() {
  return axios({
    url: 'api/services/app/Statistic/GetProcessStatistic',

  })
}

export function getOrderData() {
  return axios({
    url: '/turn/api/services/app/Statistic/GetMaterialStatistic',

  })
}

export function getStatisticPersonEfficiencyRate() {
  return axios({
    url: '/api/services/app/Statistic/GetStatisticPersonEfficiencyRate',

  })
}

export function getMachineToolOee() {
  return axios({
    url: '/api/services/app/Statistic/GetHymSonDeviceStatuseReport',

  })
}

export function getMaintenance() {
  return axios({
    url: '/api/services/app/HymSonDevice/GetHymSonDeviceForView',

  })
}


export function getTeamData() {
  return axios({
    url: '/api/services/app/HymsonProductionRunData/GetHymsonPersonEffitive',

  })
}

export function getNewData() {
  return axios({
    url: 'api/services/app/HymsonProductionRunData/GetHymsonPersonEffitive',

  })
}


// export function () {
//   return axios({
//     url: 'turn/api/services/app/HymsonNews/GetHymsonNewsForView?id=',

//   })
// }

