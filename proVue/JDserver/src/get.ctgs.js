const mock = require('mockjs')

module.exports = (req, res) => {
    res.json(mock.mock({
        errcode: 0,
        msg: 'ok',
        
        'data|17': [
            {
                'guid': '@guid',               
                'text': ['单品优惠','新品上市','小规模零食','新鲜水果','时令蔬菜','早餐专区','奶制品/烘焙','进口商品','冷饮冰品','肉禽水产','冷冻冰藏','酒水饮料','休闲食品','粮油调味','个洗清洁','日用百货','特色美食'],
                'children|0-5': [
                    {
                        'guid': '@guid',
                        'text|2-4': '@cword',
                    }
                ]
            }
        ]
    }))
}