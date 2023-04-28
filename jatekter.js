import Elem from "/Elem.js";
class Jatekter{
    constructor(){
    let lepes = 0;
  const SZULOELEM = $("article");

  for (let index = 0; index < 9; index++) {
    const ELEM1 = new Elem(index, SZULOELEM);
  }
  $(window).on("elemkattintas", (event) => {
    console.log(event.detail);
    if (lepes%2==0){
        event.detail.setElem('<img src="x.png" alt="tictac">');
    }
    else{
        event.detail.setElem('<img src="o.png" alt="tictac">');
    }
   lepes++
  });
}
}
export default Jatekter;