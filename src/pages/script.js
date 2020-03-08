function craw(){
    let brands = {
        'zara' : 'price-amount', 
        'uniqlo' : "order-value", 
        'thehouseofdrew' : "total-recap__final-price"}
    
    var currentURL = document.URL
    
    for(var brandName in brands){
        if(currentURL.toLocaleLowerCase.indexOf(brandName) !== -1){
            var company = brandName
            var test = document.getElementsByClassName(brands[brandName])
            var result = ""
            for (var i=0, len=test.length|0; i<len; i=i+1|0) {
                result += "\n  " + test[i].textContent;
            }
            if(brandName === 'zara'){
                // zara 的正则，改result 到这里
                var re = /\s*(.*) USD/;     // Zara
            }
            else{
                // 除了zara 的 
                var re = /$(.*)</;    //Uni
            }
        }
    }
    return result, company
}

function returnObj(priceAmount, companyName) {
    var data = {}
    data.purchase = []
    var date = Date.now();
    var obj = {
        price: priceAmount,
        date: date.toDateString(),
        Company: companyName
       }
       data.purchase.push(obj)
       return data;
}

let Data = []
function resultData(){
    var price, company = craw()
    var obj = returnObj(price,company)
    Data.push(obj)
}

resultData()

export default Data;