import axios from './axioshttp1'



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
    url: '/api/services/app/Statistic/GetMaterialStatistic',

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

export function getMaintenance1() {
  return axios({
    url: 'api/services/app/HymSonDevice/GetHymSonDeviceForView?deviceSn=Y456123789111',

  })
}


export function getMaintenance() {
  return axios({
    url: 'api/services/app/HymsonMaintenanceRecord/GetAll',

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

