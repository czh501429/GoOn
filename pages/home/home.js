Page({
    data: {
        scrollLeft: 0,
        suggestTitle:'推荐城市',
        suggestCities:[
            {
                name:'苏州',
            },
            {
                name:'无锡',
            },
            {
                name:'上海',
            },
            {
                name:'杭州',
            },
            {
                name:'北京',
            },
            {
                name:'北京',
            },
            {
                name:'北京',
            },
            {
                name:'北京',
            },
            {
                name:'北京',
            },
        ],
        color:'yellow',
        inputValue:'',
        swiperList: [
            {
                className: 'color-a',
                value: 'A'
            }, {
                className: 'color-b',
                value: 'B'
            }, {
                className: 'color-c',
                value: 'C'
            }
        ],
        current: 0,
        itemId: 0,
        switchDuration: 500,
        autoPlayInterval: 2000,
        // slider: [{
        //     imageUrl: 'https://b.bdstatic.com/searchbox/icms/searchbox/img/swiperA.png'
        // }, {
        //     imageUrl: 'https://b.bdstatic.com/searchbox/icms/searchbox/img/swiperB.png'
        // }, {
        //     imageUrl: 'https://b.bdstatic.com/searchbox/icms/searchbox/img/swiperC.png'
        // }],
        swiperCurrent: 0,
        currentTab: 0,
        locationInfo:'',
        infoList: [
        {
            chineseName: '城市名称',
            engName: 'city',
            value: ''
        }]
    },
    onShow(e){
        var locationInfo=''
        swan.getLocation({
            type: 'gcj02',
            success: res => {
                let infoList = this.getData('infoList');
                locationInfo=res['city']
                this.setData({
                    locationInfo:locationInfo,
                });
            },
            fail: err => {
                swan.showToast({
                    title: '获取失败,请检查位置授权是否开启',
                    icon: 'none'
                });
            }
        });
    },
    swiperChange(e) {
        console.log('swiperChange:', e.detail);
        this.setData({
            itemId: e.detail.current
        });
    },
    bindinput(e){
        this.setData({
            inputValue:e.detail.value

        });
        console.log(this.getData('inputValue'))
    },
    toLeft() {
        swan.showToast({
            title: '到最左边了',
            icon: 'none'
        });
    },
    toRight() {
        swan.showToast({
            title: '到最右边了',
            icon: 'none'
        });
    },
});