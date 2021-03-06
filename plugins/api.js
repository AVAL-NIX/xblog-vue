import axios from 'axios'
import Vue from 'vue'
import {
  Message
} from 'element-ui';
//请求参数整理
Vue.prototype.$params = (params) => {
  console.log(params)
  let str = ''
  for (let key in params) {
    console.log("params", key)
    str += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
  }
  return '?' + str
}

if (process.server) {
    axios.defaults.baseURL = `http://127.0.0.1:8099`
}else{
    axios.defaults.baseURL = `/api`
}

// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

/**
 * 请求拦截
 */
axios.interceptors.request.use(config => {
  console.log('request c ', config)
  return config;
}, err => {
  console.log('request e ', err)
  Message.error({
    message: '请求超时'

  })
  // 对请求错误做些什么
  return Promise.reject(err);
})

/**
 * 回调拦截
 */
axios.interceptors.response.use(data => {
  console.log('response d ', data)
  if (data.status && data.status == 200) {
    return data;
  }
  if (data.status && data.status != 200 && data.data.msg) {
    Message.error({
      message: data.data.msg
    })
    return data;
  }
  return data;
}, err => {
  console.log('response e ', err)
  if (err.response && (err.response.status == 504 || err.response.status == 404)) {
    Message.error({
      message: '服务器被吃了'
    });
  } else if (err.response && err.response.status == 403) {
    Message.error({
      message: '权限不足,请联系管理员!'
    });
  } else if (err.response && err.response.status == 401) {
    Message.error({
      message: err.response.data.msg
    });
  } else if (err == 'Error: timeout of 5000ms exceeded'){
    Message.error({
        message:'请求超时'
      });
  } else {
    if (err.response && err.response.data.msg) {
      Message.error({
        message: err.response.data.msg
      });
    } else {
      Message.error({
        message: '未知错误!'
      });
    }
  }

  // 对请求错误做些什么
  return Promise.reject(err);
})

let base = ''

base+= ''



/**
 * POST 请求
 * @param {string} url
 * @param {json} params
 */
export const post = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
  })
}


/**
 * 上传文件 请求
 * @param {string} url
 * @param {json} params
 */
export const upload = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params
  });
}

/**
 * PUT 请求
 * @param {string} url
 * @param {json} params
 */
export const put = (url, params) => {
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
  });
}

/**
 * DELETE 请求
 * @param {string} url
 * @param {json} params
 */
export const del = (url) => {
  return axios({
    method: 'delete',
    url: `${base}${url}`
  });
}

/**
 * GET 请求
 * @param {string} url
 * @param {json} params
 */
export const get = (url, params) => {
  return axios({
    method: 'get',
    url: `${base}${url}`,
    params:params
  });
}


/**
 * 下载 请求
 * @param {string} url
 * @param {json} params
 */
export const down = (url,params) =>{
     // 下载文件
     function download(response){
        let url = window.URL.createObjectURL(new Blob([response.data]))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', response.headers['filename'])
        document.body.appendChild(link)
        link.click()
    }
    return axios({
        method: 'post',
        url: `${url}` ,
        responseType: 'blob',
        data:params
    }).then(response => {
        download(response)
    })
}

/**
 * 检查服务器返回结果
 *
 * @param {*} res
 * @param {*} isTrue
 * @param {*} isError
 */
export const check = (res , isError = true ,  isTrue = false ) =>{
    return  new Promise((resolve, reject) =>{
        if(res.code < 0){
            if(isError){
                Message.error({
                    message:res.msg
                  });
            }
            resolve(res)
        }else{
            if(isTrue){
                Message.success({
                    message:res.msg
                  });
            }
            resolve(res)
        }
    })
}

Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$delete = del
Vue.prototype.$put = put
Vue.prototype.$upload = upload
Vue.prototype.$down = down
Vue.prototype.$check = check