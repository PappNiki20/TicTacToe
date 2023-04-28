
class Elem{
    #allapot;
constructor(id, SZULOELEM){
    
    this.id = id;
    this.#allapot=true;
    SZULOELEM.append(`
    <div class="elem"> <p></p> </div>
    `);
    this.tarolo = $("article div:last-child");
    this.pElem = this.tarolo.children("p")
    this.tarolo.on("click",  () => {
     //  this.setElem('<img src="x.png" alt="tictac">')
    if(this.#allapot){this.esemenyTrigger()} 
     this.#allapot=false;
    });
}
setElem(ertek){
    this.pElem.html(ertek)
}
esemenyTrigger(){
    console.log("trigger", this.id)
    const esemeny = new CustomEvent("elemkattintas", {detail: this});
      window.dispatchEvent(esemeny);
}
}

export default Elem;
