Page({
    data: {
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
        backIcon:'true',
        backHome:'true',
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
        slider: [{
            imageUrl: 'https://b.bdstatic.com/searchbox/icms/searchbox/img/swiperA.png'
        }, {
            imageUrl: 'https://b.bdstatic.com/searchbox/icms/searchbox/img/swiperB.png'
        }, {
            imageUrl: 'https://b.bdstatic.com/searchbox/icms/searchbox/img/swiperC.png'
        }],
        swiperCurrent: 0,
        currentTab: 0,
        locationInfo:'定位',
        infoList: [
        // {
        //     chineseName: '国家',
        //     engName: 'country',
        //     value: ''
        // },
        {
            chineseName: '城市名称',
            engName: 'city',
            value: ''
        }]
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

    getLocation(e) {
        var locationInfo='';
        swan.getLocation({
            type: 'gcj02',
            success: res => {
                let infoList = this.getData('infoList');
                for (var i = 0; i < infoList.length; i++) {
                    const engName = infoList[i].engName;
                    locationInfo=locationInfo+res[engName];
                    infoList[i].value = res[engName];
                }
                console.log(locationInfo);
                this.setData({
                    locationInfo:locationInfo,
                    infoList:infoList,
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
});