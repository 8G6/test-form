dit={}
submit = () => {
option=document.querySelectorAll('option')
option.forEach(n=>{dit[n.value]=n.innerText})
let name    = 'Your name is  '   + id('name').value+'<br>'
let email   = 'Your email is '   + id('email').value
country     =  id('Country')
country     =  country.options[country.selectedIndex].value
country     = 'Your country is  ' + dit[country]
gender      = 'Your gender is   ' + gender
let arr = [name,email,country,gender]
console.log(arr)
id('box').innerHTML='<br><br><br><br><h1>Form Submitted</h1>'
for(i=0;i<4;i++){
    id('box').innerHTML+=`<h2>${arr[i]}</h2>`
}
}

let gender='not specified'
male = ()=>{
id('female').checked ? id('female').click() : 0
id('male').checked ? 0 : id('male').click()
gender = 'male' 
console.log(gender)
}
female = ()=>{
id('male').checked ? id('male').click() : 0
id('female').checked ? 0 : id('female').click()
gender = 'female' 
console.log(gender)
}

