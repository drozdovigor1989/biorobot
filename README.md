

<ul>
  <li>Webpak никогда не пользовался. Раз нужен NPM, верстал с помощью Gulp</li>
  <li>Пользовался SCSS</li>
  <li> Заливал на GitHub через Git. Сейчас там завершенная версия, все минимизировано и конкатенировано, но в предыдущем коммите есть все тоже самое, только не сжатые версии ( если нужно оценить читаемость кода). На крайний случай могу загрузить их сюда, или отправить почтой. Сжимал, потому, что хотелось, чтоб lighthouse показывал побольше баллов))</li>
  <li> К сожалению в JavaScript не силён, поэтому его в коде практически нет. Соответственно ничего кроме открытия модального окна не работает.
    Фреймворки не знаю, по этой же причине. Но готов учить.</li>
  <li> Вывод роботов и запчастей сделал через спрайты.</li>
  <li> При выборе робота блоку с изображением будет добавляться класс и соответственно выводиться нужный.</li>
</ul>
<p>  Классы для вывода роботов:</p>
 
   <p>
    created-male1 - Робот мужчина первого типа произведен. <br>
    created-male2 - Робот второго типа произведен. <br>
    created-female1 - Робот женщина первого типа произведена. <br>
    created-female2 - Робот женщина второго типа произведена. <br></p> 
   <p>
    granted-male1 - Робот мужчина которого можно произвести первого типа.<br>
    granted-male2 - Робот мужчина которого можно произвести второго типа.<br>
    granted-female1 - Робот женщина которую можно произвести первого типа.<br>
    granted-female2 - Робот женщина которую можно произвести второго типа.<br>
   </p>
   
   <p>
    impossibly-male1 - Робот мужчина которого не возможно произвести первого типа. <br>
    impossibly-male2 - Робот мужчина которого не возможно произвести первого типа. <br>
    impossibly-female1 - Робот женщина которую не возможно произвести первого типа. <br>
    impossibly-female2 - Робот женщина которую не возможно произвести первого типа. <br>
   </p>
   <p> 
<div>    Тоже самое с запчастями:</div>
    biomech - запчасть есть <br>
    biomech--active - готовая запчасть <br>
    biomech--disable - запчасти нет <br></p>
    
   <p> processor - процессор есть <br>
    processor--active - процессор готов <br>
    processor--disable -процессора нет <br>
    soul - душа <br></p>
    
    <p> Текст в модальном окне тоже будет меняться посредством добавления/удаления класса содержимому окна. </p>
   <p> Шкала с монетами будет меняться при нажатии на кнопку "Нацыганить", в массив с монетами будет добавляться 1 новая монета, (смещаться вправо от всего массива на 7пкс, и у каждой новой будет отниматься z-index на 1.</p>
    
   <p> К сожалению мне меняли график на работе, поэтому верстка заняла на некоторое время больше времени, чем я планировал.</p>
    
   <p> Если укажите на ошибки, я буду очень признателен. В любом случае, это хороший опыт.</p>
