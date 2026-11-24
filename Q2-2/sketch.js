// チェッカー
function setup() {
  createCanvas(200, 200);
  const size = width / 8; // マスの一辺の長さ
 stroke(128,128,128)
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
    if((i+j)%2==1){
    fill(128,128,128
    )
    rect(size*i,size*j,size,size)
    }if(j<3&&(i+j)%2==1){
     fill(255,0,0) 
    ellipse(size/2+i*size,size/2+j*size,size,size)
    }// BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
   }
  }
}