import axios from 'axios'
import qs from 'qs'
export const root = 'http://localhost:3000'
axios.defaults.withCredentials = true

//JSON字符串请求头
export const oXHRHeadrs = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
};

// url序列化请求头
export const oXHRHeadrsUrlencoded = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};  

// formData表单请求头
export const oXHRHeadrsFormData = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
};

/**
 * fetch Get请求
 * @param {String} url 请求地址
 * @param {Obejct} params
 * @return {Promise}
 */
export function FetchGet(url, params = {}, headers) {
    return new Promise((resolve, reject) => {
        axios
            .get(
                url, {
                    params: params
                },
                headers
            )
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err);
            });
    });
}
/**
 * fetch Post请求
 * @param {String} url 请求地址
 * @param {Obejct} data
 * @return {Promise}
 */
export function FetchPost(url, data = {}, headers, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, data, headers, params)
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err);
            });
    });
}

/* 请求拦截器 */
axios.interceptors.request.use(
    config => {
          let token = localStorage.getItem('user_token');
          if (token) {
              config.headers.token =  `${token}`; 
              //console.log(config);
          }
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );
  
  axios.defaults.timeout = 5000
  
  // 响应拦截器
  axios.interceptors.response.use((response) => {
      return response
  }, (err) => {
    if (err.response) {
        console.log(err.response)
    }
    return Promise.reject(err)
  })
  

//登录页面
/* 
手机登录
*/
export const loginPhoneApi = params => {
    return FetchPost(root + '/login/cellphone', params, oXHRHeadrsUrlencoded).then((response) => {
        return response;
    })
}

/* 
查询歌曲
*/
export const searchSongListApi = params => {
    return FetchGet(root + '/search', params, oXHRHeadrs).then((response) => {
        return response;
    })
}
