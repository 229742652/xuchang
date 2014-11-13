!function () {
     
    var data = {
        port: $("#port"),
        aLi: $("#port ul li"),
        index: $("#index"),
        iWidth: document.documentElement.clientWidth,
        iHeight: document.documentElement.clientHeight,
        page: $("#page"),
        title: $("#page div").eq(1),
        navLi: $("#nav ul li"),
        first: 5,
        second: 12,
        nav_container: $("#nav_container"),
        role: '登陆火星"玉兔"要有弟弟了'
    }
    
    var len = data.aLi.size();
     
    setSize(data.iWidth, data.iHeight);
    setTransition();
    var iNow = 0;
    var isShow = false;
    $("#home").tap(function () {
        $("#nav").css("left", !isShow ? 0 : "-100%");
        isShow = !isShow;
    });

    //data.navLi.each(function () {
    //    $(this).tap(function (e,_this) {
    //        var index = $(_this).index();
    //        switch (index) {
    //            case 0:
    //                iNow = 0;
    //                data.index.css({ left: 0 });
    //                data.nav_container.hide();
    //                break;
    //            case 1:
    //                iNow = 0;
    //                break;
    //            case 2:
    //                iNow = data.first;
    //                break;
    //            case 3:
    //                iNow = data.second;
    //                break;
    //            case 4:
    //                iNow = len - 1;
    //                data.title.html(data.role);
    //                break;
    //        }
    //        setHtml(iNow);
    //        $("#nav").css({ left: "-100%" });
    //        isShow = !isShow;
    //        data.port.find("ul").css("-webkit-transform", "translateX(" + (-iNow * data.iWidth) + "px)");
    //    });
    //});
     
   
    data.port.find("ul").swipe("left", function (e, _this) {
        iNow++;
        setHtml(iNow);
        iNow === len - 1 && data.title.html(data.role)
        tap(iNow);
        if (iNow>=len) {
            iNow = len - 1;
        }
        $(_this).css("-webkit-transform", "translateX(" + (-iNow * data.iWidth) + "px)");
    }, {disX:100}).swipe("right", function (e,_this) {
        iNow--; 
        setHtml(iNow);
        iNow === len - 1 && data.title.html(data.role);
        if (iNow<=0) {
            iNow = 0;
        }
        $(_this).css("-webkit-transform", "translateX(" + (-iNow * data.iWidth) + "px)");
    }, { disX: 100 });

    data.index.swipe("left", function (e, _this) {
        $(_this).css("-webkit-transform", "translateX(-100%)");
    
        setTimeout(function () {
            data.port.find("ul").css("-webkit-transform", "translateX(0)").off("webkitTransitionEnd").on("webkitTransitionEnd", function () {
                tap(0);
                data.page.show().css({ opacity: 1 });
            });
        }, 100);
        
    });

    $("#port .second section").height(data.iHeight);
    $("#port .third section").height(data.iHeight);
    $("#port .team section").height(data.iHeight);
    data.page.find("div").each(function (i) {
        if (i===1) {
            return;
        }
        $(this).tap(function (e,_this) {
            var index = $(_this).index();
           
            if (index === 2) {
                iNow++;
                setHtml(iNow);
                
                tap(iNow);
                if (iNow >= len) {
                    iNow = len - 1;
                }
                iNow === len - 1 && data.title.html(data.role)
            }
            else if (index===0) {
                iNow--;
                setHtml(iNow);
                iNow === len - 1 && data.title.html(data.role);
                if (iNow <= 0) {
                    iNow = 0;
                }
            }
            data.port.find("ul").css("-webkit-transform", "translateX(" + (-iNow * data.iWidth) + "px)");
        });
    });
     
    function setHtml(i) {
        if (i >= data.first) {
            data.title.html('登陆火星"玉兔"要有弟弟了')
        }
        if (i >= data.second) {
            data.title.html('登陆火星"玉兔"要有弟弟了')
        }
        if (i < data.first) {
            data.title.html('登陆火星"玉兔"要有弟弟了')
        }
    }

    function tap(i) {
        data.aLi.eq(i).find("section").addClass("active");
        data.aLi.eq(i).find("section p").removeClass("lightSpeedIn").each(function (i, n) {
            $(this).addClass("lightSpeedIn").css("-webkit-animation-delay", i * 200 + "ms");    
        });

    }
    
    function setSize(iW,iH) {
        data.port.height(iH);
        data.aLi.width(iW).height(iH);
        data.index.height(iH);
        $("#port ul").width(iW * len);
    }
    
    function setTransition() {
        data.port.find("section").css("-webkit-transition", isSupportBezier() ? "1s -webkit-transform cubic-bezier(0.000, 1.650, 1.000, 0.660)" : ".8s -webkit-transform ease-out");
    }
    
    loadImgByCanvas("images/hand.png", data.index.find("canvas")[0], 0, 0, 1, 1, 78, 78);//加载手势图片。
    setTimeout(function () {
        data.index.find("canvas").remove();
    }, 5000);

    var oImg = new Image();
    oImg.onload = function () {
        data.index.find("canvas").css("-webkit-animation", "info ease-in 1s infinite");
    }
    oImg.src = "images/hand.png";

    var img = new Image();
    img.onload = function () {
        $("#port .first").show();
    }
    img.src = "images/index.jpg";
    data.aLi.eq(0).swipe("right", function () {
        data.index.css("-webkit-transform","translateX(0)");
    });
    data.index.find("span").each(function (i) {
        $(this).tap(function (e,_this) {
            data.index.css("-webkit-transform","translateX(-100%)");
            data.page.show().css({ opacity: 1 });
            data.nav_container.show();
            var index = $(_this).index();
         
            switch (index) {
                case 1:
                    iNow = 0;
                    break;
                case 2:
                    iNow = data.first;
                    break;
                case 3:
                    iNow = data.second;
                    break;
                
            }
            data.port.find("ul").css("-webkit-transform", "translateX(" + (-iNow * data.iWidth) + "px)");
            
        });
    });


    function loadImgByCanvas(aImgSrc, canvas, x, y, scaleX, scaleY, canvasW, canvasH) {//通过canvas加载图片。通过硬件加速来渲染图，比传统的浏览器渲染效果要高。
        var img = new Image();
        var context = canvas.getContext && canvas.getContext("2d");
       // context.fillText("图片加载中,请稍等...", context.measureText("图片加载中,请稍等...").width / 2, canvas.height / 2);
        img.onload = function () {
            scaleX = scaleX || 1;
            scaleY = scaleY || 1;
            canvas.width = canvasW || this.width * scaleX;
            canvas.height = canvasH || this.height * scaleY;
            if (canvas.getContext) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(this, x, y, canvas.width, canvas.height);
            }
            else {
                var newImg = document.createElement("img");
                newImg.src = aImgSrc;
                newImg.id = canvas.id;
                newImg.width = this.width * scaleX;
                newImg.height = this.height * scaleY;
                document.body.appendChild(newImg);
                canvas.parentNode.replaceChild(newImg, canvas);
            }

            return aImgSrc;

        };
        img.onerror = function (e) {

        }
        img.src = aImgSrc;

    }

}();


 