'use strict';

{
//   スキルの部分の経過した勉強日数
  let n = Date.parse('2020/09/04');
  let m = new Date();
  let x = (m - n)/1000/60/60/24;
  x = Math.floor(x);

  const date1 = document.getElementById('date1');
  date1.textContent = '学習期間: '+ x + '日';

  let a = Date.parse('2020/09/22');
  let b = new Date();
  let c = (b - a)/1000/60/60/24;
  c = Math.floor(c);
  
  const date2 = document.getElementById('date2');
  date2.textContent = '学習期間: ' + c + '日';
}
