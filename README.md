# Donate-Page

这是一系列整理好的捐赠按钮样式。

直接 Fork 之后需要修改以下内容为你的账户



  /simple/script.js:5  `var ppbusiness	=	"你的 PayPal 账号";  //建议用Unicode`

  /simple/script.js:149,152,154 `showQR('images/BTCQR.png');  //对应账户的二维码路径`

  /simple/index.html:37 `<input id="btc-key" type="text" value="比特币账号" readonly="readonly">`



针对不同项目可以直接在 URL 加入项目参数和金额，不过仅仅作用于 PayPal 方式.

`https://kaiyuan.github.io/donate-page/simple/?item='donate-page&price=2'`

### License

Released under the MIT license.