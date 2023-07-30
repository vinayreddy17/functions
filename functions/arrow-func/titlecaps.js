const titlecaps = (a)=>
{ const b=a.map((element)=>{
  return (element[0].toUpperCase()+element.slice(1).toLowerCase())
}
)
console.log(b);

}



const a = ['john', 'alice', 'peter'];
    titlecaps(a);