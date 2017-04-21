function lazyload(options) {
    /*{
        id: "lazy",大盒子的id
        lazyTime: 200,//仿照网络请求效果
        lazyRange: 100//距离屏幕100px时就加载图片
    }*/
    var doc = options.id ? document.getElementById(options.id) : document;
    if (doc === null) return; //传入id名不正确为null
    var tmp = doc.getElementsByTagName('img'), //id盒子中获取图片
        tmplen = tmp.length, //图片数量
        imgobj = [];

    for (var i = 0; i < tmplen; i++) {
        var _tmpobj = tmp[i]; //当前dom元素图片
        if (_tmpobj.getAttribute('data-src') !== null) {
            if (isLoad(_tmpobj)) { //为true加载图片
                setimg(_tmpobj);
            } else {
                imgobj.push(_tmpobj); //未加载图片放入imgobj数组
            }
        }
    }
    var len = imgobj.length; //未加载图片数量

    function handler() {
        for (var i = 0,
                end = len; i < end; i++) {
            var obj = imgobj[i];
            if (isLoad(obj)) {
                _setimg(obj);
                imgobj.splice(i, 1);
                len--;
                if (len === 0) {
                    loadstop()
                }
            }
        }
    }

    function isLoad(ele) { //dom图片元素
        // window.pageYOffset 设置或返回当前页面相对于窗口显示区左上角的 Y 位置 ， IE 8 及 更早 IE 版本不支持该属性
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; //页面滚动距离
        if (typeof ele === 'undefined') return false; //函数未传参返回
        var edit = ~~ele.getAttribute("data-range") || options.lazyRange;
        //~~把字符串变成number类型,如果有字母转换为number 0；
        var clientHeight = scrollTop + document.documentElement.clientHeight + edit;
        var offsetTop = 0;
        while (ele.tagName.toUpperCase() !== 'BODY') {
            offsetTop += ele.offsetTop; //offsetTop图片距离页面最上方的高
            ele = ele.offsetParent;
            /* offsetParent属性返回一个对象的引用， 这个对象是距离调用offsetParent的元素最近的（ 在包含层次中最靠近的）， 并且是已进行过CSS定位的容器元素。 如果这个容器元素未进行CSS定位, 则offsetParent属性的取值为根元素(在标准兼容模式下为html元素； 在怪异呈现模式下为body元素) 的引用。 当容器元素的style.display 被设置为 "none" 时（IE和Opera除外）， offsetParent属性 返回 null。*/
        }
        return (clientHeight > offsetTop);
    }

    function _setimg(ele) {
        if (options.lazyTime) {
            setTimeout(function () {
                    setimg(ele);
                },
                options.lazyTime + ~~ele.getAttribute('data-time'))
        } else {
            setimg(ele);
        }
    }

    function setimg(ele) {

        ele.src = ele.getAttribute('data-src');

    }

    function loadstop() {
        //ie和火狐的兼容删除监听事件
        window.removeEventListener ? window.removeEventListener("scroll", handler, false) : window.detachEvent("onscroll", handler);
    }
    loadstop();
    window.addEventListener ? window.addEventListener("scroll", handler, false) : window.attachEvent("onscroll", handler); //滚动条滚动时触发handler事件
}