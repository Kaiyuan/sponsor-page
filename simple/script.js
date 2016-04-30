jQuery(document).ready(function() {
	var QRBox	=	$('#QRBox');
	var MainBox	=	$('#MainBox');
	// PayPal 账户建议使用 Unicode
	var ppbusiness	=	"\u0073\u0065\u0061\u006c\u006f\u0075\u0072\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d";

	if (!ppitem_name) { ppitem_name	=	"Donate"; }

	// if (!donatrNo) { donatrNo	=	1; }

	//创建 Paypal 表单

	// 捐赠方式，仅适用于国外账户!
	function ppDonate() {
		var tempForm	=	document.createElement("form");
		tempForm.id	=	"paypal";
		tempForm.method	=	"post";
		tempForm.action	=	"https://www.paypal.com/cgi-bin/webscr";
		tempForm.target	=	"paypal";

		var cmd	=	document.createElement("input");
		cmd.type	=	"hidden";
		cmd.name	=	"cmd"
		cmd.value	=	"_donations";
		tempForm.appendChild(cmd);

		var business	=	document.createElement("input");
		business.type	=	"hidden";
		business.name	=	"business"
		business.value	=	ppbusiness;
		tempForm.appendChild(business);

		var lc	=	document.createElement("input");
		lc.type	=	"hidden";
		lc.name	=	"lc"
		lc.value	=	"US";
		tempForm.appendChild(lc);

		var item_name	=	document.createElement("input");
		item_name.type	=	"hidden";
		item_name.name	=	"item_name"
		item_name.value	=	ppitem_name;
		tempForm.appendChild(item_name);

		var no_note	=	document.createElement("input");
		no_note.type	=	"hidden";
		no_note.name	=	"no_note"
		no_note.value	=	"0";
		tempForm.appendChild(no_note);

		var currency_code	=	document.createElement("input");
		currency_code.type	=	"hidden";
		currency_code.name	=	"currency_code"
		currency_code.value	=	"USD";
		tempForm.appendChild(currency_code);

		var bn	=	document.createElement("input");
		bn.type	=	"hidden";
		bn.name	=	"bn"
		bn.value	=	"PP-DonationsBF:btn_donate_SM.gif:NonHostedGuest";
		tempForm.appendChild(bn);

		document.body.appendChild(tempForm);
		tempForm.submit();
		document.body.removeChild(tempForm);
	}

	// 立即购买，适用于中国账户
	function ppBuy() {
		var tempForm	=	document.createElement("form");
		tempForm.id	=	"paypal";
		tempForm.method	=	"post";
		tempForm.action	=	"https://www.paypal.com/cgi-bin/webscr";
		tempForm.target	=	"paypal";

		var cmd	=	document.createElement("input");
		cmd.type	=	"hidden";
		cmd.name	=	"cmd"
		cmd.value	=	"_xclick";
		tempForm.appendChild(cmd);

		var business	=	document.createElement("input");
		business.type	=	"hidden";
		business.name	=	"business"
		business.value	=	ppbusiness;
		tempForm.appendChild(business);

		var lc	=	document.createElement("input");
		lc.type	=	"hidden";
		lc.name	=	"lc"
		lc.value	=	"US";
		tempForm.appendChild(lc);

		var item_name	=	document.createElement("input");
		item_name.type	=	"hidden";
		item_name.name	=	"item_name"
		item_name.value	=	ppitem_name;
		tempForm.appendChild(item_name);

		var no_note	=	document.createElement("input");
		no_note.type	=	"hidden";
		no_note.name	=	"no_note"
		no_note.value	=	"0";
		tempForm.appendChild(no_note);

		var amount	=	document.createElement("input");
		amount.type	=	"hidden";
		amount.name	=	"amount"
		amount.value	=	donatrNo;
		tempForm.appendChild(amount);

		var currency_code	=	document.createElement("input");
		currency_code.type	=	"hidden";
		currency_code.name	=	"currency_code"
		currency_code.value	=	"USD";
		tempForm.appendChild(currency_code);

		var bn	=	document.createElement("input");
		bn.type	=	"hidden";
		bn.name	=	"bn"
		bn.value	=	"PP-DonationsBF:btn_donate_SM.gif:NonHostedGuest";
		tempForm.appendChild(bn);

		document.body.appendChild(tempForm);
		tempForm.submit();
		document.body.removeChild(tempForm);
	}

	function showQR(QR) {
		if (QR) {
			MainBox.css('background-image','url('+QR+')');
		}
		$('#DonateText,#donateBox').addClass('blur');
		QRBox.fadeIn(300);
	}
	//	Buttons
	// $('body').on('click', '#PayPal', function() {
	// 	ppBuy();	// 购买按钮适用于国内的 Paypal 账户
	// 	// ppDonate();	// 捐赠按钮仅适合国外的 PayPal 账户
	// });

	$('#donateBox>li').click(function(event) {
		var thisID	=	$(this).attr('id');
		if (thisID === 'PayPal') {
			ppBuy();
		} else if (thisID === 'BTC') {
			showQR('images/BTCQR.png');
			new Clipboard('#BTCBn');
		} else if (thisID === 'AliPay') {
			showQR('images/AliPayQR.png');
		} else if (thisID === 'WeChat') {
			showQR('images/WeChanQR.png');
		}
	});

	QRBox.click(function(event) {
		$(this).fadeOut(300);
		$('#DonateText,#donateBox').removeClass('blur');
	});
});