[TOC]


与xblog后台对应的vue前端

## 本地运行

在根目录运行

```
npm install
npm run dev
```

## 服务器上运行


- 安装node

略

- 安装npm

略

- 安装依赖

```
npm install
```

- 安装pm2

```
npm install -g pm2
pm2 start npm --watch --name xblog-vue -- run start
```

> pm2其他命令自己百度
