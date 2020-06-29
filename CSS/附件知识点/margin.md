# margin

## margin的大小问题
1. 当两元素水平方向时，margin为左边右margin+右边左margin相加；
2. 当竖直方向时，margin为上面元素下margin和下面元素上margin中的最大值；
3. 当内容为空且设置有上下margin时，元素高度为上下margin中的最大值;

## 父子元素中的margin(margin塌陷)
- 当给在父元素中，给子元素简单的添加一个margin-top时，是达不到预期效果的，（它会使父子元素整个向下偏移，而父子元素的相对位置却没有变），
- 除了一些常规方法，可以为父元素添加overflow: hidden属性；margin-top的%值是相对于父元素的宽度而非高度