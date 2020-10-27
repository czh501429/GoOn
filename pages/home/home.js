Page({
    data: {
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
        currentTab: 0
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
});