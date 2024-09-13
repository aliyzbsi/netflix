document.querySelectorAll(".faq-container").forEach((container) => {
  container.addEventListener("click", function () {
    const icon = this.querySelector("i");
    const content = this.querySelector("p");
    content.classList.toggle("hidden");

    if (icon.classList.contains("fa-plus")) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-x");
    } else {
      icon.classList.remove("fa-x");
      icon.classList.add("fa-plus");
    }
  });
});

/*
Burada ise bütün toggle-button class ismine sahip butonları buttons adında bir değişkene atıyoruz
aynı şekilde ask-question-container class ismine sahip elemanın içindeki child elemanı olan p tagini de answer adında bir değişken 
oluşturup onun içine atıyoruz.
sonrasında oluşturduğumuz buttons değişkenindeki bütün elemanları forEach metodu ile bir döngüye sokuyoruz ve click hareketi yapılan 
button elemanların content adında bir değişken oluşturup her answer değişkenine sıralama veriyoruz 
örneğin diyelim ki ask-question-container classının child elemanı olan ilk p değişkeni ali olsun ikinci ahmet üçüncü mehmet o zaman
answer[0] ın değeri ali olur answer[1] in değeri ahmet olur answer[2] nin değeri mehmet olur aynı şekilde toggle-button elemanlarının
her biride ayrı ayrı çağrılıyor buttons[0] içindeki answer[0] değeri birbirine eşitleniyor aynı şekilde buttons[1] in karşılığı da answer[1]
daha da iyi anlaşılması açısından buttons[2] nin cevabı da answer[2] sonrası malum eğer css dosyasında hidden ise 
visible, visible ise hidden yapmasını sağlıyoruz.

*/

/* const buttons = document.querySelectorAll(".toggle-button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = button.getAttribute("data-target");
    const content = document.getElementById(targetId);

    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
      content.classList.add("visible");
    } else {
      content.classList.remove("visibe");
      content.classList.add("hidden");
    }
  });
}); 

burda yapılan işlemler şu şekilde buttons diye bir değişken tanımlayıp class ismi toggle-button olan bütün butonları bu değişkene atıyoruz

sonra forEach metodu ile buttons değilkeninde bulunan bütün elemanları button adı ile isimlendiriyoruz
sonra addEventListener ile buttons ismi verdiğimiz içindeki button değerine sahip elemanlarda click hareketi çalıştı mı kontrol ediyoruz
ve eğer çalıştıysa bir fonksiyon başlatmasını istiyoruz
sonra bu fonksiyon içerisinde targetId diye bir değişken oluşturup data-target yani örneğin <button class='ornek' data-target='ornek1'> ve 
butonda click etkileşimi olduğunda çağırmasını istediğimiz diğer eleman örneğin <p class='deneme' id='ornek1'> şeklinde data-target ile 
hedeflediğimiz id ye sahip elemanı çağırmasını sağlıyoruz.
sonrasında content adı verdiğimiz bir değişkende data-target ile targetId si eşleşen değerleri tutuyoruz.
sonra eğer content değişkeninde classList.contains kontrol ediyoruz contains : Bir sınıfın var olup olmadığını kontrol eder.
sonrasında eğer content içinde bu sınıf varsa ve hidden ise yani gizliyse css ten hidden sil visible yap visible ise hidden yap diyoruz.
çoklu elemanlar için tercih edilemeyeceği için kullanmıyorum.

*/
