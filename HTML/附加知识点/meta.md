# meta

meta标签用于描述网页的元信息，如网站作者、描述、关键词，meta通过name=xxx和content=xxx的形式来定义信息

## charset：定义HTML文档的字符集
```html
<meta charset="UTF-8" >
```

## http-equiv：可用于模拟http请求头，可设置过期时间、缓存、刷新
```html
<meta http-equiv="expires" content="Jan, 20 Jun 2020 22:33:00 GMT">
```

## viewport：视口，用于控制页面宽高及缩放比例
```html
<meta 
    name="viewport" 
    content="width=device-width, initial-scale=1, maximum-scale=1"
>
```
1. width/height，宽高，默认宽度980px
2. initial-scale，初始缩放比例，1~10
3. maximum-scale/minimum-scale，允许用户缩放的最大/小比例
4. user-scalable，用户是否可以缩放 (yes/no)
