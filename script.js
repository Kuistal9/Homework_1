const student = "Людсуий Артемий Витальевич"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество
document.getElementById("student").innerHTML = student;      
let n1 = prompt('в Введите предполагаемый результат первой команды')//ввод данных счёта 
let n2 = prompt('в Введите предполагаемый результат второй команды')//ввод данных счёта 
let n3 = prompt('в Введите реальный результат первой команды')//ввод данных счёта 
let n4 = prompt('в Введите реальный результат второй команды')   //ввод данных счёта 
let score_real = [n3,n4];
let score_expected = [n1,n2];
if  
(n1>n2) {score_real=0} // сравнение результата 
else if 
(n1==n2) {score_real=1}
else
 score_real=2
if  
(n3>n4) {score_expected=0} // сравнение результата 
else if
 (n3==n4) {score_expected=1}
else 
score_expected=2 
if (n2==n4,n1==n3) 
 {
    alert( 'Счёт и результат были угаданы верно !!' );
   }  
else if (score_real==score_expected)
{
  alert( 'Счёт не угадали,!' )
    alert( 'результат был угадан верно!!' );
}
else
{ 
  alert( 'Счёт не угадали, результат не был угадан!' )
  
}
  