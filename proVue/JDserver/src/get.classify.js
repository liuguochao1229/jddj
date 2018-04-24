const mock = require("mockjs")

module.exports = (req,res) => {
    res.set("Access-Control-Allow-Origin","*")
    var text = req.query.clstext
    var result = mock.mock({
        errcode:0,
        msg:"ok",
        "data|4-6":[
            {
                "guid":"@guid",
                "text":"@cword(2,5)",
                "title":"@cword(2,5)",
                "children|5-10":[
                    {
                        "guid":"@guid",
                        "text":"@cword(2,5)",
                        "img|1":["/static/pictrue1/img48.jpg","/static/pictrue1/img49.jpg","/static/pictrue1/img51.jpg","/static/pictrue1/img50.jpg","/static/pictrue1/img52.jpg","/static/pictrue1/img53.jpg","/static/pictrue1/img54.jpg","/static/pictrue1/img55.jpg","/static/pictrue1/img56.jpg","/static/pictrue1/img57.jpg","/static/pictrue1/img58.jpg","/static/pictrue1/img59.jpg","/static/pictrue1/img60.jpg","/static/pictrue1/img61.jpg","/static/pictrue1/img62.jpg","/static/pictrue1/img63.jpg","/static/pictrue1/img64.jpg","/static/pictrue1/img65.jpg","/static/pictrue1/img66.jpg","/static/pictrue1/img67.jpg","/static/pictrue1/img68.jpg","/static/pictrue1/img69.jpg","/static/pictrue1/img70.jpg","/static/pictrue1/img71.jpg","/static/pictrue1/img72.jpg","/static/pictrue1/img73.jpg","/static/pictrue1/img74.jpg","/static/pictrue1/img75.jpg","/static/pictrue1/img76.jpg","/static/pictrue1/img77.jpg","/static/pictrue1/img78.jpg","/static/pictrue1/img79.jpg","/static/pictrue1/img80.jpg","/static/pictrue1/img81.jpg","/static/pictrue1/img82.jpg","/static/pictrue1/img83.jpg","/static/pictrue1/img48.jpg"],
                    }
                ]
            }
        ]
    })
    res.send(result)
}