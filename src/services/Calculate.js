let PlatesObj = {
    plate55: 0,
    plate45: 0,
    plate35: 0,
    plate25: 0,
    plate10: 0,
    plate5: 0,
    plate2p5: 0,
    plate1: 0,
};

function Calculate(weight) {
    let w = Number(weight-45);
  
    while (w > 0){
      if (w >=110){
        PlatesObj.plate55 +=1;
        w -=110;
      }else if (w>=90){
        PlatesObj.plate45 += 1;
        w -= 90;
      } else if (w>=70){
        PlatesObj.plate35 += 1;
        w -= 70;
      } else if (w>=50){
        PlatesObj.plate25 += 1;
        w -= 50;
      } else if (w>=20){
        PlatesObj.plate10 += 1;
        w -= 20;
      } else if (w>=10){
        PlatesObj.plate5 += 1;
        w -= 10;
      } else if (w>=5){
        PlatesObj.plate2p5 += 1;
        w -= 5;
      } else break;
    }
}
  
export default Calculate;