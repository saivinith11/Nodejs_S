
setTimeout(() =>{
    console.log('2 second timer')
},2000)

setTimeout(() =>{
    console.log('0 second timer')
},0)

const names=['sai','vinith','jess']
const shortNames=names.filter((name)=>{
    return name.length<=4
})

const geoCode=(address,callback)=>{
    const data={
        latitude:0,

        longitude:0
    }
    return data
}

const data=geoCode('philadelphia')
console.log(data)


const add=(a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b)
    },2000)
}

add(1,4,(sum) =>{
    console.log(sum)//should print 5
})