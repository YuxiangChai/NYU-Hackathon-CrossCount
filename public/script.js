function craw(){
    let brands = {
        'zara' : 'price-amount', 
        'uniqlo' : "order-value", 
        'thehouseofdrew' : "total-recap__final-price"}
    
    var currentURL = document.URL
    var URL = currentURL.toLocaleLowerCase();
    console.log("URL : ", URL)
    for(var brandName in brands){
        if(URL.indexOf(brandName) !== -1){
            console.log(brandName)
            var company = brandName
            var test = document.getElementsByClassName(brands[brandName])
            console.log(test)
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

    console.log("result : ", result)
    console.log("company : ", company)
    return result, company
}

function returnObj(priceAmount, companyName) {
    var obj = {
        price: priceAmount,
        date: 'Mar 8 2020',
        Company: companyName
       }
    return obj
}

let Data = []
function resultData(){
    var price, company = craw()
    var obj = returnObj(price,company)
    Data.push(obj)
}

resultData()

// export default Data;