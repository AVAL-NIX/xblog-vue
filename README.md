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

```
pm2 stop all
pm2 restart xblog-vue



pm2 list
pm2 show 0                           #查看进程详细信息，0为PM2进程id
pm2 stop all                         #停止PM2列表中所有的进程
pm2 stop 0                           #停止PM2列表中进程为0的进程
pm2 reload all                       #重载PM2列表中所有的进程
pm2 reload 0                         #重载PM2列表中进程为0的进程
pm2 delete 0                         #删除PM2列表中进程为0的进程
pm2 delete all                       #删除PM2列表中所有的进程
```