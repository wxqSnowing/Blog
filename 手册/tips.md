# 小手册
## http和https的区别
|区别点|http|https|备注
|:----------|:----------|:----------|:----------
|传输方式|明文传输|加密传输|http是超文本传输协议，https使用具有安全性的ssl加密
|端口号|80|443|默认情况下的端口
|连接方式|无状态的连接|ssl（Secure Sockets Layer 安全套接字协议）+http的协议|所以https更安全一些
|费用|不要钱|高昂的费用|

## http1.1和http2.0的区别
|区别|http1.1|http2.0|备注
|:----------|:----------|:----------|:----------
|二进制分帧|文本格式|使用二进制进行编码|
|多路复用|持久连接，但是有连接数的限制|完全的多路复用，一旦建立连接就可以多次发送|
|头部压缩|头部携带大量的信息，每次都要重复发送|采用头部压缩算法降低开销|
|服务端推送||服务端和浏览器一旦建立连接，服务端可以主动的向浏览器推送资源并进行缓存，当浏览器需要访问已缓存的资源时候就可以直接读取缓存的数据|

## tcp和udp的区别
|区别|tcp|udp|备注
|:----------|:----------|:----------|:----------
|连接性|需要建立连接|不需要建立连接|tcp的三次握手
|可靠性|传输数据可靠，不丢失，不重复，安全到达|只保证发送，不保证接收|
|传输对象|一对一传输|支持一对多传输|
|首部大小|20字节|8字节|tcp首部较大
|数据|字节流|报文传输|udp网络出现拥塞不会使得发送速率降低（因此会出现丢包，对实时的应用比如IP电话和视频会议等）

## cookie ,session, localStorage
|区别|cookie|session|localStorage
|:----------|:----------|:----------|:----------
|生命周期|可以设置cokkie生效时间|本次会话，关闭浏览器会话结束|可持久性的存储
|大小|比较小, 4k|5M|5M
|保存位置|浏览器上|服务端|浏览器本地

## seesion机制
1. 每次请求，服务器判断本次请求是否有sessionID
2. 有->找自己与之对应的session对象
3. 没有->自己创建一个session对象，并把sessionId传出去，浏览器的cookie把session传过来，下一次请求使用


## 状态码
|状态码|含义||
|:----------|:----------|:----------|:----------
|100|contine||
|200|ok||
|301|永久重定向||
|302|临时重定向||
|304|资源未发生改变||
|400|bad request|客户端请求错误|
|401|用户认证信息不正确||
|403|forbidden|服务器理解请求的含义，但没有权限执行|
|404|not found||
|500|服务器内部发生错误||
|502|网关有问题||
|503|Service Unavailable|服务器资源尚未准备好处理当前请求|

## 缓存

### 强缓存
expiress和cache control
- Expires 基于服务器端的绝对时间
- Cache-Control 使用相对时间

### 协商缓存
etag&&last modified->if_none_mach&&If-Modified-Since


## 跨域
### 同源策略
协议+域名+端口一致

### 跨域解决方案
1. jsonp跨域；
2. Cors跨资源共享跨域;
3. document.domain + ifram跨域，设置子ifram的document.domain与父亲相等
4. location.hash + iframe
5. window.name + iframe
4. ngin代理

## web安全
1. xss(Cross-Site Scripting, 跨站脚本攻击)
2. csrf(Cross-Site Request Forgeries, 跨站请求伪造)（被动攻击）
3. sql注入

## 输入url
DNS解析 ——TCP连接 ——发送HTTP请求 ——服务器处理请求并返回HTTP报文 ——浏览器解析渲染页面 ——连接结束

## web性能
合并请求-预处理-缓存手段-压缩-减少dom操作(使用片段)-图片预加载-缓存dom查找的结果
1. 降低请求量：合并资源，减少HTTP请求数，minify / gzip 压缩，webP，lazyLoad。
2. 加快请求速度：预解析DNS，减少域名数，并行加载，CDN 分发。
3. 缓存：HTTP 协议缓存请求，离线缓存 manifest，离线数据缓存localStorage。 
4. 渲染：JS/CSS优化，加载顺序，服务端渲染，pipeline。 
5. JS，CSS源码压缩
6. 缓存DOM节点查找的结果
7. 避免使用CSS Expression
8. 图片预载
9. 避免在页面的主体布局中使用table，table要等其中的内容完全下载之后才会显示出来，显示比div+css布局慢
10. 用setTimeout来避免页面失去响应
11. 用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能

## 浏览器和内核
| 浏览器   |     内核     |           公司 | 前缀 |
|---------|:------------|:---------------|:-----|
| IE      |    trident   |                | -ms- |
| Chrome  |    webkit    |           谷歌 |-webkit-|
| Safari  | webkit/blink |           苹果 |-webkit-|
| Firefox |     gecko    |                |-moz-|
| Opera   |    presto    | 360、昆仑万维收购 |-o-|

## html语义化
1. html结构更清晰: 在没有CSS样式的情况下，页面整体也会呈现很好的结构效果
2. 代码结构更清晰，代码的可读性好
3. 便于维护，方便团队开发与维护
4. 便于SEO
5. 方便其他设备解析，例如：移动设备，盲人设备

## DOCTYPE
1. `<!DOCTYPE html>`->document.compatMode->CSS1Compat
2. -> document.compatMode->BackCompat

## meta
1. `<meta charset="UTF-8" >` 定义HTML文档的字符集
2. `<meta http-equiv="expires" content="Jan, 20 Jun 2020 22:33:00 GMT">` 可用于模拟http请求头，可设置过期时间、缓存、刷新
3. `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">` 视口，用于控制页面宽高及缩放比例

## html5新特性（需要学习）

1. 语义化标签
2. 音视频处理, video, audio
3. Canvas / WebGL
4. history API
5. requestAnimationFrame
6. 地理位置
7. WebSocket
8. Webworks

## DOM常用操作
|方法|描述|备注
|:----------|:----------|:----------
|document.createElement('div')|新增一个元素|
|appendChild(el)|向节点的子节点列表的末尾添加新的子节点|
|insertBefore(el)|
