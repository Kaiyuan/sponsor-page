# Donate-Page simple

![Donate-Page](https://i.imgur.com/yNz5vJc.gif)

#### 直接 Fork 之后需要修改以下内容为你的账户

  /script.js:4-6 对应账户的二维码路径

  /script.js:8  `var ppbusiness	=	"你的 PayPal 账号";  //建议用Unicode`

  /index.html:37 `<input id="btc-key" type="text" value="比特币账号" readonly="readonly">`

#### 针对不同项目可以直接在 URL 加入项目参数和金额，不过仅仅作用于 PayPal 方式.

`https://kaiyuan.github.io/donate-page/simple/?item='donate-page&price=2'`


#### 使用 `iframe` 嵌入页面的代码，高度至少 `240px`，宽度至少 `310px`！

```
<iframe src="https://kaiyuan.github.io/donate-page/simple/?item=easy-select-style" style="overflow-x:hidden;overflow-y:hidden; border:0xp none #fff; min-height:240px; width:100%;"  frameborder="0" scrolling="no"></iframe>
```

### License

Released under the MIT license.
