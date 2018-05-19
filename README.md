# 聪明的响应式（rem）

### 1.适合移动端响应

### 2.配合sass使用更佳 

### 3.默认设计稿宽度750 

### 4.主要使用宽度去适配，设备尺寸和比例太多，宽高都去适配会导致页面变形 

```javascript
import {Rem} from 'clever-rem';
Rem(750);

// import Rem from 'clever-rem';
// Rem(750);

// 两种方式都可以使用，建议在根组件中使用 750是设计稿宽度
```

SASS文件

```scss
$REM: 1000;
@function rem($px) {
  @return $px / $REM + rem;
}
.example {
    width: rem(750); // 相当于宽度占满，注意样式要初始化，去掉默认margin padding
}
```

