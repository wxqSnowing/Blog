# BFC
> Block Formatting Context 即块级格式上下文
***BFC是页面上的一个隔离的独立容器，不受外界干扰或干扰外界***

## 触发BFC
1. float不为 none
2. overflow的值不为 visible
3. position 为 absolute 或 fixed
4. display的值为 inline-block 或 table-cell 或 table-caption 或 grid

## BFC的渲染规则
1. BFC是页面上的一个隔离的独立容器，不受外界干扰或干扰外界
2. 计算BFC的高度时，浮动子元素也参与计算（即内部有浮动元素时也不会发生高度塌陷）
3. BFC的区域不会与float的元素区域重叠
4. BFC内部的元素会在垂直方向上放置
5. BFC内部两个相邻元素的margin会发生重叠

## BFC的应用场景
1. 清除浮动：BFC内部的浮动元素会参与高度计算，因此可用于清除浮动，防止高度塌陷
2. 避免某元素被浮动元素覆盖：BFC的区域不会与浮动元素的区域重叠
3. 阻止外边距重叠：属于同一个BFC的两个相邻Box的margin会发生折叠，不同BFC不会发生折叠


