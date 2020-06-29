# 高阶组件（HOC： high-order-components）

看到高阶组件很容易让人想到的类似的高阶函数：接收函数作为参数的函数，比如map
```javascript
[1,2,3].map(item=>item*2);
```
## 高阶组件
***接受React组件作为参数,输出一个新的组件的函数,在这个函数中,可以修饰组件的props与state**

### 高阶组件的作用
1. 代码复用，逻辑抽象，抽离底层准备（bootstrap）代码
2. 渲染劫持
3. state 抽象和更改
4. props 更改

## 实现高阶组件的方法
### 属性代理（Props Proxy）
> 高阶组件通过被包裹的React组件来操作props

通过属性代理，可以
1. 更改 props
2. 通过 refs 获取组件实例
3. 抽象 state
4. 把 WrappedComponent 与其它 elements 包装在一起

### 反向继承（Inheritance Inversion）
> 高阶组件继承于被包裹的React组件