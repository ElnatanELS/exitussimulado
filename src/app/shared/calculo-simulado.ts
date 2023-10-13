export function calculo(respostas:any){
  let gabarito: any ={"1":"A","2":"B","3":"C","4":"C","5":"D"}

  let res:number = 0

  Object.values(gabarito).forEach((e:any, i:any) => {


    if(Object.values(respostas)[i] === e) {
      res= res + 1
    }


  });

  return res





}
