# hexoWebsite的版本控制器

#### 介绍
hexoWebsite的版本控制器

#### 软件架构
软件架构说明


#### 安装教程

1.  安装Git
2.  安装Node.js
3.  安装hexo
  * $ npm install -g hexo-cli
  * 安装成功输入hexo -v会出现版本信息

#### 使用说明
初次使用
* 1，初始化命令
  * hexo init

  * hexo s可以直接运行项目了
  * 默认地址http://localhost:4000/
  * 如果端口被占用，下面换个端口试试
  * hexo s -p 5000

2，网站标题、keywords等在根目录的_config.yml配置文件中修改

3，创建文章，文章是用Markdown语言写的文档
  * 1.在根目录source\_posts\下直接创建
  * 2.或者命令创建hexo new "My New Post"  
  * 3.Markdown有如下优点：
  * 纯文本，所以兼容性极强，可以用所有文本编辑器打开。
  * 让你专注于文字而不是排版。
  * 格式转换方便，Markdown 的文本你可以轻松转换为 html、电子书等。
  * Markdown 的标记语法有极好的可读性。

4，生成静态文件
    * hexo g
	* hexo s 浏览一下

#### 部署到网站，在连接git的情况下,密钥
  1，一键部署 hexo d
  
  2，到网站上更新，服务->gite pages -> 更新




