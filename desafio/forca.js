class Forca {
 
  constructor(palavraSecreta){
    this.palavraSecreta = palavraSecreta;
    this.palavra = Array(palavraSecreta.length).fill("_");
    this.vidas = 6;
    this.letrasChutadas = []
  }

  chutar(letra) {
    const palavraSecreta = this.palavraSecreta.split("");
    const tamanhoPalavra = this.palavraSecreta.length;

    if (letra.length > 1 || this.letrasChutadas.includes(letra)){
      return
    } else {
      
      for(let posicao =0; posicao < tamanhoPalavra; posicao++){
        if(this.palavraSecreta.includes(letra)) {
          if(letra == palavraSecreta[posicao]){
            this.palavra[posicao] = letra;
          } 
        }
      }

      if(!this.palavraSecreta.includes(letra)){
        this.vidas--;
      }
    }  
    
    this.letrasChutadas.push(letra)     
  }

  buscarEstado() {
    let converterPalavraString = this.palavra.toLocaleString();
      if(this.vidas == 0){
        return "perdeu"
      } else if(this.palavra.join("") == this.palavraSecreta){
        return "ganhou";
      } else{
        return "aguardando chute"; 
      }
    } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
  
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas      
        
    }
  }
}

module.exports = Forca;
