module.exports = {
    title: '鹤叔医疗科普合集',
    // plugins: ['fulltext-search'],
    themeConfig: {
        sidebar: 'auto',
        smoothScroll: true,
        nav: [
            { text: '最新版', link: '/' },
            { text: '20200322版', link: '/20200322/' },
        ]
    },

    head: [
        // 添加百度统计
        [
            "script",
            {},
            `
            var _hmt = _hmt || [];
            (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?0431ff8e640f1ee6d6943f1672d0d6c2";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
            })();

            host = window.location.host; 
            if (host!="hs.tdouguo.com") 
            { 
                window.location.href='http://hs.tdouguo.com'; 
            }
            `
        ]
    ]
}