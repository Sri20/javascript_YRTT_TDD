const romanConvertor = require('./TDD')

//AAA
test ('convert 1',() => {
    const num= 1               //arrange the data
    expect(romanConvertor(num)).toEqual('I')   //act & assert
    })
test ('convert 2',() => {
    const num= 2            
    expect(romanConvertor(num)).toEqual('II')   
    })
test ('convert 3',() => {
    const num= 3           
    expect(romanConvertor(num)).toEqual('III')   
    })
test ('convert 4',() => {
    const num= 4           
    expect(romanConvertor(num)).toEqual('IV')   
    })
test ('convert 5',() => {
    const num= 5           
    expect(romanConvertor(num)).toEqual('V')   
    })
test ('convert number greater than 5 ',() => {
    const num=  7      
    expect(romanConvertor(num)).toEqual('VII')   
    })
test ('convert 9 ',() => {
    const num=  9     
    expect(romanConvertor(num)).toEqual('IX')   
    })
test ('convert 10 ',() => {
    const num=  10    
    expect(romanConvertor(num)).toEqual('X')   
    })
test ('convert 11 ',() => {
    const num=  11     
    expect(romanConvertor(num)).toEqual('XI')   
    })
test ('convert 19 ',() => {
    const num=  19     
    expect(romanConvertor(num)).toEqual('XIX')   
    })
test ('convert 25 ',() => {
    const num=  25    
    expect(romanConvertor(num)).toEqual('XXV')   
    })
test ('convert 40 ',() => {
    const num=  40   
    expect(romanConvertor(num)).toEqual('XL')   
    })
test ('convert 50 ',() => {
    const num=  50   
    expect(romanConvertor(num)).toEqual('L')   
    })
test ('convert 100 ',() => {
    const num=  100   
    expect(romanConvertor(num)).toEqual('C')   
    })
test ('convert 99 ',() => {
    const num=  99   
    expect(romanConvertor(num)).toEqual('XCIX')   
    })