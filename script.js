let hr = document.querySelector(".hour") 
let Min = document.querySelector(".min")
let Sec = document.querySelector(".sec")

setInterval(()=>{
    let date = new Date()
    let hrs = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    rotate(hrs,min,sec)
},1000)

let rotate = (hrs,min,sec)=>{
    hr.style.transform = `rotate(${30*hrs+0.5*min}deg)`
    Min.style.transform = `rotate(${6*min}deg)`
    Sec.style.transform = `rotate(${6*sec}deg)`
}