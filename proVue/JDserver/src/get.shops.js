const mock=require('mockjs')
module.exports=function(req,res){
    // res.set('Access-Control-Allow-Origin','*')
    var result=mock.mock({
        errcode:0,
        msg:'ok',
        'data|10':[
            {
                'id|+1':1,
                'num1|10-50':10,
                'num2|1000-5000':1000,
                
                'sale|0-6':[{
                    'tit|1':['满减','满赠','折扣'],
                    'txt|1':[
                        '伊利满25减5',
                        '飞科满100减20',
                        '妙洁满50减6',
                    ],
                }],
                'range|1':['678m','365m','989m','1.18km','1.89km','2.34km'],
                'src|1':['static/pictrue/shop1.png','static/pictrue/shop2.png','static/pictrue/shop3.png','static/pictrue/shop4.png','static/pictrue/shop5.png','static/pictrue/shop6.png',],
                'guid':'@guid',
                'text':'@ctitle',
                'title':'@ctitle',
                'star|3-6':'★',
            }
        ]
    })
    res.send(result)

}