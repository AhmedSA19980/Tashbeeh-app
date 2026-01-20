
function startTasbeeh (){
  
 
  const Status = document.getElementById("status");
  const btn_start = document.getElementById("startBtn");
  btn_start.disabled = true ;
  let count = 0;
  let phase = 1;

  function updateMessage() {
    count++;

     if (phase === 1) {
            Status.textContent = `${count}-سبحان الله  `;
            Status.style.color = "white";

       if (count === 33) {
            count = 0;
            phase = 2;
       }
     } else if (phase === 2) {
            Status.textContent = `${count}-الحمد لله `;
            Status.style.color = "red";
            if (count === 33) {
                count = 0;
                phase = 3;
            }
     } else if (phase === 3) {
            Status.textContent = `${count}-الله أكبر`;
            Status.style.color = "gold";

       if (count === 33) {
            count = 0;
            phase = 4;
            Status.textContent = `لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير`;
            Status.style.color = "green";
       }
     } else if (phase === 4) {
            Status.textContent = "ابدا تسبيح";
            Status.style.color = "gold";
            clearInterval(IntervalID);
             setTimeout(()=>  alert("في ميزان حسناتكم"),1000)
            btn_start.disabled = false;
     } 
  }
   let IntervalID = setInterval (updateMessage, 1000);
 
}

