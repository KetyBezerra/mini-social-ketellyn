//=== BANCO DE DADOS (JSON Simulado ) === 

let post = {
  likeCount: 0,
  dislikeCount: 0,
  curtido: false,
  descurtido: false
}

//=== SERVICE (regras de negócio) === 

function curtir() {
  if (post.curtido == false){
    post.likeCountCount++;
    post.curtido = true;

    if(post.descurtido == true){
      post.dislikeCount--;
      postdescurtido = false;
    }

  }else{
    post.likeCount--;
    post.curtido = false;
  }

}

function descurtir() {
  if(post.descurtido == false){
    post.dislikeCount++;
    post.descurtido = true;

    if(post.curtido == true){
      post.likeCount--;
      post.curtido = false;
    }

  }
  else{
    post.dislikeCount--;
    post.descurtido = false;
  }
}

//=== API SIMULADA === 

function getPost(){
  return post;
}

functionlikePost(){
  curtir();
  returnpost;
}

function deslike(){
  descurtir();
  return post;
}

// === VIEW (interface/renderização)===
function atualizarTela(){
  document.getElementById("likeCount").innerText = likeCount;
  document.getElementById("dislikeCount").innerText = dislikeCount;
}

//=== CONTROLLER (intermediação)===

function clicarCurtir(){
  curtir();
  atualizarTela();
}
function clicarDescurtir(){
  descurtir();
  atualizarTela();
}

// === EVENTOS ===

document.getElementById("likeBtn").addEventListener("click", clicarCurtir);
document.getElementById("dislikeBtn").addEventListener("click", clicarDescurtir);

// === INICIALIZAÇÃO ===  

atualizarTela();
