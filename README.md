# postcss-px2rem-exclude

基于 [postcss-px2rem-exclude](https://github.com/saionjisekai/px2rem-postcss),在基础上继承了排除某些文件夹的功能,添加了根据关键字进行替换的能力

## Useage
```
npm i postcss-any2rem -D
```
### .postcssrc.js
```javascript
module.exports = {
  'plugins': {
    'postcss-any2rem': {
      remUnit: 75,
      any: 'rpx', // rpx -> rem
      exclude: /node_modules|folder_name/i
    }
  }
}
```
