[TOC]


与xblog后台对应的vue前端

## 本地运行

在根目录运行

```
npm install
npm run dev
```

## 服务器上运行

前置条件

- 安装dokcer

构建xblog-vue镜像

```
docker build . -t xblog-vue
```

运行xblog-vue镜像

```
docker run -d -p 80:80 my-app
```

检测是否运行

```
curl localhost:80
```

输出

```
# <!DOCTYPE html><html lang=en>...</html>
```

正确

