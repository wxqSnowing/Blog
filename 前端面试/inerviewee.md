# 面试

## es5

### 原型链

- 原型（prototype）是指向构造函数的对象
- 每个被实例化后的对象，都会有一个与之关联的原型对象
- 每个对象都有一个属性__proto__，指向对象的原型

``` javascript
function Grandapa() {
    this.grandpaname = 'grandpa';
}

function Father() {
    this.fathername = 'father'
}
Father.prototype = new Grandapa();

function Son() {
    this.sonname = 'son';
}
Son.prototype = new Father();
var son = new Son();

console.log(son.__proto__);
```

#### 注意

1. 原型链的顶端是Object.prototype

### 继承

使用prototype实现的继承需要注意到使用一个中间变量Buffer来进行隔离

``` javascript
 function F() {
     this.name = '1';
 }

 function test(Target, Orgin) {
     function Buffer() {}
     Buffer.prototype = new Orgin();

     Target.protoptype = new Buffer();
     return Target;
 }

 function C() {
     this.age = 12;
 }
 var E = test(C, F);
 var e = new E();
 e.name = 'wxq';

 console.log(e.name);
```

### this指向

1. 在全局情况下，this指向window；
2. 在函数中：this可以指向window，this也会指向调用方法的对象
3. 在类中，this指向实例化的对象; 
4. 在事件监听中，this指向触发事件的元素；
5. 在严格模式下，this输出undefined；
6. apply, call, bind 都能改变this的指向；

### call, apply, bind

> 这三个方法都是继承自Function.prototype中的

``` javascript
console.log(Function.prototype.hasOwnProperty('call')); //true
console.log(Function.prototype.hasOwnProperty('apply')); //true
console.log(Function.prototype.hasOwnProperty('bind')); //true
``` 

#### call

> 接收多个参数，functionName.call(object, args1, args2, args3); 

```javascript
console.log(Object.prototype.toString.call('wxq')); //[object String]
console.log(Object.prototype.toString.call(123)); //[object Number]
console.log(Object.prototype.toString.call(true)); //[object Boolean]
console.log(Object.prototype.toString.call(null)); //[object Null]
console.log(Object.prototype.toString.call(undefined)); //[object Undefined]
console.log(Object.prototype.toString.call(function() {})); //[object Function]
console.log(Object.prototype.toString.call([1, 2, 3])); //[object Array]
console.log(Object.prototype.toString.call({
    name: '123'
})); //[object Object]

var a = [1, 2, 3, 4];
console.log(Array.prototype.slice.call(a, 0, 2)); // [ 1, 2 ]
console.log(a); //[ 1, 2, 3, 4 ]
var b = [1, 2, 3, 4];
console.log(Array.prototype.splice.call(b, 0, 2)); //[ 1, 2 ]
console.log(b); //[ 3, 4 ]
```

#### apply

> 接收参数数组或者伪类数组，functionName.apply(object, [args1, args2, args3]); 

``` javascript
console.log(Object.prototype.toString.apply('wxq')); //[object String]
console.log(Object.prototype.toString.apply(123)); //[object Number]
console.log(Object.prototype.toString.apply(true)); //[object Boolean]
console.log(Object.prototype.toString.apply(null)); //[object Null]
console.log(Object.prototype.toString.apply(undefined)); //[object Undefined]
console.log(Object.prototype.toString.apply(function() {})); //[object Function]
console.log(Object.prototype.toString.apply([1, 2, 3])); //[object Array]
console.log(Object.prototype.toString.apply({
    name: '123'
})); //[object Object]

var a = [1, 2, 3, 4];
console.log(Array.prototype.slice.apply(a, [0, 2])); // [ 1, 2 ]
console.log(a); //[ 1, 2, 3, 4 ]
var b = [1, 2, 3, 4];
console.log(Array.prototype.splice.apply(b, [0, 2])); //[ 1, 2 ]
console.log(b); //[ 3, 4 ]
```

#### bind

> 用来把函数绑定到指定对象上, functionName.bind(object, [args1, args2, args3])
> apply, call区别在于 bind 会创建一个新的函数实例，每次调用该实例时，都会在被绑定的环境中运行

``` javascript
 var oBtn = document.getElementsByTagName('button')[0];

 function test() {
     console.log('点击了' + this);
 }
 oBtn.onclick = test.bind(oBtn);
```

##### bind的柯里化

``` javascript
function f1(y, z) {
    return this.x + y + z;
}
var m = f1.bind({
    x: 1
}, 2);
console.log(m(3)); //6

//这里bind方法会把它的第一个实参绑定给f函数体内的this，所以这里的this即指向{x : 1}对象，
//从第二个参数起，会依次传递给原始函数，这里的第二个参数2，即是f函数的y参数，
//最后调用m(3)的时候，这里的3便是最后一个参数z了，
//所以执行结果为1 + 2 + 3 = 6分步处理参数的过程其实是一个典型的函数柯里化的过程（Curry）。

function f2(y, z, w) {
    return this.x + y + z + w;
}
var m = f2.bind({
    x: 1
}, 2);
console.log(m(3, 4)); //10

function f3(y, z) {
    return this.x + y + z;
}
var m = f3.bind({
    x: 1
});
console.log(m(2, 3));
```

### new操作符

> new是创建开辟一个空间执行构造函数，并把this返回给实例化出来的对象

### 隐式转换

### 事件循环机制macro(宏任务) micro（微任务）

> 为了协调事件、用户交互、脚本、UI 渲染和网络处理等行为，用户引擎必须使用 event loops。Event Loop 包含两类：一类是基于 Browsing Context ，一种是基于 Worker ，二者是独立运行的。

1. 由于任务分为同步任务和异步任务，在执行的时候分别进入不同的执行环境；

    - 同步任务进入主线程，
    - 异步任务进入事件队列

2. 当主线程中的任务执行完毕后，就去调用事件队列的任务推入主线程中进行执行，在事件队列中又会把任务分成宏任务和微任务，先执行微任务再执行宏任务。

    - 宏任务：script( 整体代码)、setTimeout、setInterval、I/O、UI 交互事件、setImmediate(Node.js 环境)
    - 微任务：Promise、MutaionObserver、process.nextTick(Node.js 环境)

### 数据类型

1. string
2. number
3. boolean
4. null
5. undefined
6. object
7. symbol

### 数据去重/交集/并集

1. push->pop 会改变原始数组
2. unshift->shift 会改变原始数组
3. concat 拼接ab数组:a.concat(b) 并返回一个新的数组，不会改变原始数组
4. splice(index, length)从索引为index开始删除长度为length个数，会改变原始数组
5. slice(index, length)从索引为index开始选择长度为length个数出来，不改变原来的数组
6. join('连接符号') 连接数组，使用连接符号来连接数组变成字符串


### 判断是否为数组

1. Object.prototype.toString.call([1, 2, 3]) //返回[object Array]
2. Array.isArray([1, 2, 3]) //返回true

### 变量声明提升

### 函数作用域

### 节流/防抖

#### 节流原理

> 触发任务后，多次触发，在一定时间间隔内执行一次；

``` javascript
//节流函数

```

#### 防抖原理

> 触发任务，在触发任务后的一定时间后执行一次；

``` javascript
//防抖函数

```

## es6 

### let/const

### 箭头函数

### promise、async/await等等 

#### Promise

> Promise 对象代表了未来将要发生的事件，用来传递异步操作的消息。

``` javascript
//1. 使用new来调用Promise的构造器来进行实例化
//2. Promise构造函数包含一个参数和一个带有resolve(解析)和reject(拒绝)两个参数的回调。在回调中执行一些操作（例如异步），如果一切都正常，则调用resolve，否则调用reject
var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("成功");
    }, 250);
})
promise.then(function(successmessgae) {
    ocument.write("Yay" + successmessgae);
}).catch(function(errormessgae) {
    ocument.write("Sorry" + errormessgae);
});
```

### async/await
async/await

## 跨域

> 跨域是指一个域下的文档或脚本试图去请求另一个域下的资源

### 同源策略（SOP：Same origin polic）

> 协议+域名+端口， 三者都相同则是同源策略

### 解决跨域的方法

1. jsonp，缺点：只能实现get一种请求
2. 跨域资源共享（CORS）。服务端设置Access-Control-Allow-Origin即可，前端无须设置，若要带cookie请求：前后端都需要设置。
3. nginx代理跨域
4. document.domain + iframe跨域
5. location.hash + iframe
6. window.name + iframe跨域
7. postMessage跨域

## Vue

### vue的生命周期
beforCreate->Create->beforeMount->Mount->beforUpdate->Update->befroeDestroy->Destroy
1. 它可以总共分为8个阶段：创建前/后, 载入前/后, 更新前/后, 销毁前/销毁后。

### vue的双向绑定原理

> vue数据双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现的。利用了 Object.defineProperty() 这个方法重新定义了对象获取属性值(get)和设置属性值(set)。 

### 组件通信方式

1. 父组件与子组件传值

    - 父组件传给子组件：子组件通过props方法接受数据;
    - 子组件传给父组件：$emit方法传递参数

2. 非父子组件间的数据传递，兄弟组件传值

    - eventBus，就是创建一个事件中心，相当于中转站，可以用它来传递事件和接收事件。项目比较小时，用这个比较合适。

## 算法相关：冒泡、快排、二叉树遍历、大数相乘（适当刷下剑指offer） 

## 网络相关

### tcp与udp区别

1. TCP是面向连接的，udp是无连接的即发送数据前不需要先建立链接。 
2. TCP提供可靠的服务。也就是说，通过TCP连接传送的数据，无差错，不丢失，不重复，且按序到达; UDP尽最大努力交付，即不保证可靠交付。 并且因为tcp可靠，面向连接，不会丢失数据因此适合大数据量的交换。
3. TCP是面向字节流，UDP面向报文，并且网络出现拥塞不会使得发送速率降低（因此会出现丢包，对实时的应用比如IP电话和视频会议等）。 
4. TCP只能是1对1的，UDP支持1对1, 1对多。 
5. TCP的首部较大为20字节，而UDP只有8字节。
6. TCP是面向连接的可靠性传输，而UDP是不可靠的。

### http

#### http 和 https的区别
1. https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用。
2. http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。
3. http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。
4. http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

#### http1.0和http1.1之间的区别

1. 持久连接
2. 请求管道化
3. 增加缓存处理（新的字段如cache-control）
4. 增加Host字段、支持断点传输等

#### http1.1、http2.0之间的区别

1. 【二进制分帧】http2.0采用二进制格式而非文本格式。在应用层和传输层中加了一个“二进制分帧层”，可以将信息分割为更小的消息和帧，并对它们采用二进制格式进行编码。
2. 【多路复用】http2.0是完全多路复用的，而非有序并阻塞的——只需一个连接即可实现并行。多路复用允许同时通过单一的http2.0连接发起多重的请求-响应消息，可以承载任意数量的双向数据流。
3. 【header压缩】使用报头压缩，http2.0降低了开销。http1.1的头部带有大量信息，而且每次都要重复发送，http2.0采用头部压缩算法可以降低这部分的开销。
4. 【服务端推送】http2.0让服务器可以将响应主动“推送”到客户端缓存中。也就是当用户的浏览器和服务端建立连接后，服务端主动将一些资源推送给浏览器并进行缓存，有了缓存，当浏览器需要访问已缓存的资源的时候就可以直接从缓存中读取了。

### 缓存

![avatar](./images/hc.jpg)

#### 强缓存

> 强缓存主要是采用响应头中的Cache-Control和Expires两个字段进行控制的。其中Expires是HTTP 1.0中定义的，它指定了一个绝对的过期时期。而Cache-Control是HTTP 1.1时出现的缓存控制字段。Cache-Control:max-age定义了一个最大使用期，就是从第一次生成文档到缓存不再生效的合法生存日期。由于Expires是HTTP1.0时代的产物，因此设计之初就存在着一些缺陷，如果本地时间和服务器时间相差太大，就会导致缓存错乱。这两个字段同时使用的时候Cache-Control的优先级给更高一点。这两个字段的效果是类似的，客户端都会通过对比本地时间和服务器生存时间来检测缓存是否可用。如果缓存没有超出它的生存时间内，客户端就会直接采用本地的缓存。如果生存日期已经过了，这个缓存也就宣告失效。接着客户端将再次与服务器进行通信来验证这个缓存是否需要更新。

1. Cache-Control（优先级高于 expires） && Expires（一个未来时间，代表请求有效期，没有过期之前都使用当前请求。）

#### 协商缓存

> 强缓存机制如果检测到缓存失效，就需要进行服务器再验证。这种缓存机制也称作协商缓存。浏览器在第一次获取请求的时候，就会在响应头中携带上资源的上次服务器修改日期(Last-Modified)或者资源的标签（Etag)。后续的请求服务器会根据请求头上的If-Modified-Since（对应Last-Modified）和（If-None-Match)字段来判断资源是否失效，一旦资源过期，则服务器会重新发送新的资源到客户端上，从而保证资源的有效性。

1. Last-Modified & If-Modified-Since
2. ETag & If-None-Match

### cookie、sessionStroage和localStorage

1. 生命周期： 

    - Cookie：可设置失效时间，否则默认为关闭浏览器后失效 
    - Localstorage:除非被手动清除，否则永久保存 
    - Sessionstorage：仅在当前网页会话下有效，关闭页面或浏览器后就会被清除 

2. 存放数据： 

    - Cookie：4k左右 
    - Localstorage和sessionstorage：可以保存5M的信息 

3. http请求

    - Cookie：每次都会携带在http头中，如果使用cookie保存过多数据会带来性能问题 
    - 其他两个：仅在客户端即浏览器中保存，不参与和服务器的通信 

4. 易用性

    - Cookie：需要程序员自己封装，原生的cookie接口不友好 
    - 其他两个：即可采用原生接口，亦可再次封装 

5. 应用场景 

    -从安全性来说，因为每次http请求都回携带cookie信息，这样子浪费了带宽，所以cookie应该尽可能的少用，此外cookie还需要指定作用域，不可以跨域调用，限制很多，但是用户识别用户登陆来说，cookie还是比storage好用，其他情况下可以用storage，localstorage可以用来在页面传递参数，sessionstorage可以用来保存一些临时的数据，防止用户刷新页面后丢失了一些参数

### 状态码

> 200 OK
> 301 Moved Permanently 永久移动，请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替 
> 302 临时移动
> 304 NotModefied
> 400 Bad Request 客户端请求的语法错误，服务器无法理解 
> 404 Notfound 服务器无法根据客户端的请求找到资源（网页）
> 405 请求方法不存在或不支持
> 500 Internal Server Error  服务器内部错误，无法完成请求 
> 502  Bad Gateway

## web性能优化

1. 降低请求量：合并资源，减少HTTP 请求数，minify / gzip 压缩，webP，lazyLoad。
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

## web安全

对Web应用的攻击模式有以下两种：主动攻击和被动攻击

1. XSS（Cross-Site Scripting, 跨站脚本攻击 ）（被动攻击）

* 是最常见和基本的攻击 WEB 网站方法，攻击者通过注入非法的 html 标签或者 javascript 代码，从而当用户浏览该网页时，控制用户浏览器。
* 影响：利用虚假输入表单骗取用户个人信息；利用脚本窃取用户的Cookie值
* 防御：1. httpOnly: 在 cookie 中设置 HttpOnly 属性，使js脚本无法读取到 cookie 信息；2. 前端负责输入检查，后端也要做相同的过滤检查；3. 某些情况下，不能对用户数据进行严格过滤时，需要对标签进行转换

2. CSRF (Cross-Site Request Forgeries, 跨站请求伪造)（被动攻击）

* 冒充用户发起请求（在用户不知情的情况下）， 完成一些违背用户意愿的事情
* 本质：重要操作的所有参数都是可以被攻击者猜测到的。攻击者预测出URL的所有参数与参数值，就能成功地构造一个伪造的请求
* 影响：利用已通过认证的用户权限更新设定信息、购买商品、在留言板上发表言论等
* 防御：1. 验证码；强制用户必须与应用进行交互，才能完成最终请求；2. 尽量使用 post ，限制 get 使用；get 太容易被拿来做 csrf 攻击；3. token 验证 CSRF 防御机制是公认最合适的方案

4. HTTP首部注入攻击（被动攻击）

* 指攻击者通过在响应首部字段内插入换行，添加任意响应首部或主体的一种攻击
* 影响：设置任何Cookie信息；重定向至任意URL

3. SQL注入攻击（主动攻击）

* 会执行非法SQL的SQL注入攻击
