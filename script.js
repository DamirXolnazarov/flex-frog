let levels = [
  {
    level: 1,
    liss: true,
    frog_wrapper: `justify-content: flex-start;`,
    lotus_wrapper: `justify-content: flex-end;`,
    inp: 1,
    info: `
        Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно помочь лягушонку Фроги и его друзьям, напиконтейнер CSS код! Направь этого лягушонка на лилию справа, используя свойство <mark>justify-content</mark>, которое выравнивает элементы горизонтально и принимает следующие значения:
        `,
    list: `
        <ul>
        <li><mark>flex-start:</mark> элементы выравниваются по левой стороне контейнера.</li>
        <li><mark>flex-end:</mark> элементы выравниваются по правой стороне контейнера.</li>
        <li><mark>center:</mark> элементы выравниваются по центру контейнера.</li>
        <li><mark>space-between:</mark> элементы отображаются с одинаковыми отступами между ними.</li>
        <li><mark>space-around:</mark> элементы отображаются с одинаковыми отступами вокруг них.</li>
        </ul>
        `,
    answer: `justify-content: flex-end;`,
    question: `  
        #pond { <br>
          <span>display: flex;</span>
          <textarea cols='1' rows='1' class="" id=""></textarea>
            <br>
            }`,
    given: null,
    example: `Например, <mark>justify-content: flex-end;</mark> сдвинет лягушонка вправо.`,
    lotos_num: 1,
    frog_num: 1,
  },
  {
    level: 2,
    inp: 1,
    lotus_wrapper: `justify-content: center;`,
    liss: true,
    frog_wrapper: `justify-content: flex-start;`,
    info: `
    Используй <mark>justify-content</mark> ещё раз, чтобы помочь этим лягушатам попасть на их лилии. Помни, что это свойство CSS выравнивает элементы горизонтально и принимает следующие значения:
        `,
    list: `
        <ul>
        <li><mark>flex-start:</mark> элементы выравниваются по левой стороне контейнера.</li>
        <li><mark>flex-end:</mark> элементы выравниваются по правой стороне контейнера.</li>
        <li><mark>center:</mark> элементы выравниваются по центру контейнера.</li>
        <li><mark>space-between:</mark> элементы отображаются с одинаковыми отступами между ними.</li>
        <li><mark>space-around:</mark> элементы отображаются с одинаковыми отступами вокруг них.</li>
        </ul>
        `,
    answer: `justify-content: center;`,
    question: `
        #pond { <br>
            <span>display: flex;</span>
            <textarea type="text" name="" cols='1' rows='1' resize='no' class='answer_place' id=""></textarea>
            <br>
            }`,
    given: null,
    example: null,
    lotos_num: 2,
    frog_num: 2,
  },
  {
    level: 3,
    lotus_wrapper: `justify-content: space-around;`,
    frog_wrapper: `justify-content: flex-start;`,
    inp: 1,
    liss: false,
    info: `
    Помоги всем трём лягушатам найти их лилии, просто используя <mark>justify-content</mark>. В этот раз у лилий много пространства вокруг.
        `,
    list: `
        <span style='margin: 0;color: #ffffffbd; font-family: Arial, Helvetica, sans-serif; font-size: 15px;'>
        Если ты чувствуешь, что забыл возможные значения свойства, ты можешь навести курсор на название свойства, чтобы посмотреть их. Попробуй навести курсор на <mark>justify-content</mark>.
        </span>
        `,
    answer: `justify-content: space-around;`,
    question: `
    #pond { <br>
        <span>display: flex;</span>
        <textarea type="text" name="" cols='1' rows='1' resize='no' class='answer_place' id=""></textarea>
        <br>
        }`,
    given: null,
    example: null,
    lotos_num: 3,
    frog_num: 3,
  },
  {
    level: 4,
    lotus_wrapper: `justify-content: space-between;`,
    inp: 1,
    frog_wrapper: `justify-content: flex-start;`,
    info: `
    Теперь лилии по краям уплыли к берегам, увеличив пространство между ними. Используй <mark>justify-content</mark>. В этот раз у лилий одинаковое расстояние между ними.
        `,
    list: null,
    answer: `justify-content: space-between;`,
    question: `
    #pond { <br>
        <span>display: flex;</span>
        <textarea type="text" name="" cols='1' rows='1' resize='no' class='answer_place' id=""></textarea>
        <br>
        }`,
    given: null,
    example: null,
    lotos_num: 3,
    frog_num: 3,
  },
  {
    level: 5,
    liss: true,
    lotus_wrapper: `justify-content: flex-start; align-items: flex-end;`,
    inp: 1,
    frog_wrapper: `align-items: flex-start;`,
    info: `
    Теперь используй <mark>align-items</mark>, чтобы помочь лягушатам добраться до нижней части пруда. Это свойство CSS выравнивает элементы вертикально и принимает следующие значения:
        `,
    list: `
        <ul>
        <li><mark>flex-start:</mark> элементы выравниваются по левой стороне контейнера.</li>
        <li><mark>flex-end:</mark> элементы выравниваются по правой стороне контейнера.</li>
        <li><mark>center:</mark> элементы выравниваются по центру контейнера.</li>
        <li><mark>baseline:</mark> элементы отображаются на базовой линии контейнера.</li>
        <li><mark>stretch:</mark> элементы растягиваются, чтобы заполнить контейнер.</li>
        </ul>
        `,
    answer: `align-items: flex-end;`,
    question: `
    #pond { <br>
        <span>display: flex;</span>
        <textarea type="text" name="" cols='1' rows='1' resize='no' class='answer_place' id=""></textarea>
        <br>
        }`,
    given: null,
    example: null,
    lotos_num: 3,
    frog_num: 3,
  },
  {
    level: 6,
    lotus_wrapper: `justify-content: center; align-items: center;`,
    frog_wrapper: `justify-content: flex-start;`,
    inp: 2,
    info: `
    Направь лягушонка в центр пруда, используя <mark>justify-content</mark> и <mark>align-items</mark> вместе.
        `,
    list: null,
    answer: `justify-content: center;
align-items: center;
    `,
    question: `
    #pond { <br>
        <span>display: flex;</span>
        <textarea type="text" name="" cols='1' rows='2' resize='no' class='answer_place' id=""></textarea>
        <br>
        }`,
    given: null,
    example: null,
    lotos_num: 1,
    frog_num: 1,
  },
  {
    level: 7,
    lotus_wrapper: `justify-content: space-around; align-items: flex-end;`,
     frog_wrapper: `justify-content: flex-start;`,
    inp: 2,
    info: `
    Лягушатам снова нужно пересечь пруд. В этот раз к лилиям, с достаточно большим пространством вокруг них. Используй комбинацию <mark>justify-content</mark> и <mark>align-items</mark>.`,
    list: null,
    answer: `align-items: flex-end;
justify-content: space-around;`,
    question: `
        #pond { <br>
            <span>display: flex;</span>
            <textarea type="text" name="" cols='1' rows='2' resize='no' class='answer_place' id=""></textarea>
            <br>
            }`,
    given: null,
    example: null,
    lotos_num: 3,
    frog_num: 3,
  },
  {
    level: 8,
    inp: 1,
    lotus_wrapper: `justify-content: flex-end;`,
    frog_wrapper: `justify-content: flex-start;`,
    liss: true,
    info: `
    Лягушатам нужно выстроиться в том же порядке, что и лилии, используя <mark> flex-direction</mark>. Это свойство CSS задает направление, в котором будут расположены элементы в контейнере, и принимает следующие значения:
        `,
    list: `
        <ul>
        <li><mark>row:</mark> элементы размещаются по направлению текста.</li>
        <li><mark>row-reverse:</mark> элементы отображаются в обратном порядке к направлению текста.</li>
        <li><mark>column:</mark>элементы располагаются сверху вниз.</li>
        <li><mark>column-reverse:</mark>  элементы располагаются снизу вверх.</li>
        </ul>
        `,
    answer: `justify-content: flex-end;`,
    question: `
        #pond { <br>
            <span>display: flex;</span>
            <textarea type="text" name="" cols='1' rows='1' resize='no' class='answer_place' id=""></textarea>
            <br>
            }`,
    given:null,
    example: null,
    lotos_num: 3,
    frog_num: 3,
  },
  {
    level: 9,
    inp: 1,
    lotus_wrapper: `flex-direction: column; justify-content: flex-start;`,
    frog_wrapper: `justify-content: flex-start;`,
    liss: true,
    info: `

    Помоги лягушатам расположиться на своих лилиях, используя <mark>flex-direction</mark>. Это свойство CSS задает направление, в котором располагаются элементы в контейнере, и принимает следующие значения:
        `,
    list: `
    <ul>
    <li><mark>row:</mark> элементы размещаются по направлению текста.</li>
    <li><mark>row-reverse:</mark> элементы отображаются в обратном порядке к направлению текста.</li>
    <li><mark>column:</mark>элементы располагаются сверху вниз.</li>
    <li><mark>column-reverse:</mark>  элементы располагаются снизу вверх.</li>
    </ul>
        `,
    answer: `flex-direction: column;`,
    question: `
        #pond { <br>
          <span>display: flex;</span>
          <textarea type="text" name="" cols='1' rows='1' resize='no' class='answer_place' id=""></textarea>
            <br>
            }`,
    given:null,
    example: null,
    lotos_num: 3,
    frog_num: 3,
  },
  {
    level: 10,
    inp: 2,
    lotus_wrapper: `justify-content: flex-start;`,
    liss: false,
    frog_wrapper: `justify-content: flex-start;`,
    info: `
    Помоги лягушатам попасть на свои лилии. Хоть и кажется, что они почти на своих местах, всё же придётся применить и <mark>flex-direction</mark>, и <mark>justify-content</mark>, чтобы поместить их на свои лилии.
        `,
    list: `
    <span style='margin: 0;color: #ffffffbd; font-family: Arial, Helvetica, sans-serif; font-size: 15px;'>
    Заметь, что когда ты устанавливаешь направление в обратном порядке для ряда или колонки, начало (start) и конец (end) тоже меняются местами.
    </span>`,
    answer: `justify-content: flex-end;`,
    question: `
        #pond { <br>
          <span>display: flex;</span>
          <textarea type="text" name="" cols='1' rows='2' resize='no' class='answer_place' id=""></textarea>
            <br>
            }`,
    given:null,
    example: null,
    lotos_num: 3,
    frog_num: 3,
  },
  {
    level: 11,
    inp: 2,
    lotus_wrapper: `justify-content: flex-end; flex-direction: column;`,
    liss: false,
    frog_wrapper: `justify-content: flex-start;`,
    info: `
    Помоги лягушатам найти их лилии с помощью <mark>flex-direction</mark> и <mark>justify-content</mark>.
        `,
    list: `
        <span style='margin: 0;color: #ffffffbd; font-family: Arial, Helvetica, sans-serif; font-size: 15px;'>Заметь, когда в качестве направления выбрана колонка, то <mark>justify-content</mark> влияет на вертикальное выравнивание,а <mark>align-items</mark> — на горизонтальное.</span>
        `,
    answer: `flex-direction: column;
justify-content: flex-end;`,
    question: `
        #pond { <br>
            <span>display: flex;</span>
            <textarea type="text" name="" col='1' row='2' resize='no' class='answer_place' id=""></textarea>
            <br>
            }`,
    given: null,
    example: null,
    lotos_num: 3,
    frog_num: 3,
  },
  {
    level: 12,
    inp: 2,
    frog_wrapper: `justify-content: flex-start;`,
    lotus_wrapper: `justify-content: space-between; flex-direction: column;`,
    info: `
    Помоги лягушатам найти их лилии с помощью <mark>flex-direction</mark> и <mark>justify-content</mark>.
        `,
    list:null,
    answer: `flex-direction: column;
justify-content: space-between;`,
    question: `
        #pond { <br>
            <span>display: flex;</span>
            <textarea type="text" name="" col='1' row='2' resize='no' class='answer_place' id=""></textarea>
            <br>  
            }`,
    given: null,
    example: null,
    lotos_num: 3,
    frog_num: 3,
  },
  {
    level: 13,
    inp: 3,
    frog_wrapper: `justify-content: flex-start;`,
    lotus_wrapper: `justify-content: center; align-items: flex-end;`,
    info: `
    Помоги лягушатам найти их лилии с помощью <mark>flex-direction</mark>, <mark>justify-content</mark> и <mark>align-items</mark>.
        `,
    list:null,
    answer: `flex-direction: row;
justify-content: center;
align-items: flex-end;`,
    question: `
        #pond { <br>
          <span>display: flex;</span>  
          <textarea type="text" name="" cols='1' rows='3' resize='no' class='answer_place' id=""></textarea>
            <br>
            }`,
    given: null,
    example: null,
    lotos_num: 3,
    frog_num: 3,
  },
  {
    level: 14,
    inp: 1,
    frog_wrapper: `justify-content: flex-start;`,
    lotus_wrapper: `justify-content: flex-start;`,
    info: `
    Иногда изменения порядка отображения элементов в контейнере недостаточно. В таких случаях мы можем применить свойство <mark>order</mark> для конкретных элементов. По умолчанию, значение этого свойства у элементов равно 0, но мы можем задать положительное или отрицательное целое число этому свойству.
        `,
      liss: false,
    list: `
    <span style='margin: 0;color: #ffffffbd; font-family: Arial, Helvetica, sans-serif; font-size: 15px;'>Используй свойство <mark>order</mark>, чтобы разместить лягушат на своих лилиях.</span>
        `,
    answer: `justify-content: flex-end;`,
    question: `
        .yellow { <br>
          <textarea type="text" name="" cols='1' rows='1' resize='no' class='answer_place' id=""></textarea>
            <br>
            }`,
    given: `
    #pond{ <br>
        <span>display: flex;</span>
        <br>
        }` ,
    example: null,
    lotos_num: 3,
    frog_num: 3,
  },
  {
    level: 15,
    inp: 1,
    frog_wrapper: `justify-content: flex-start;`,
    lotus_wrapper: `justify-content: flex-start; `,
    info: `
    Используй свойство <mark>order</mark>, чтобы отправить красного лягушонка на его лилию.
    `,
    list: null,
    answer: `justify-content: flex-end;`,
    question: `
        .red { <br>
          <textarea type="text" name="" cols='1' rows='1' resize='no' class='answer_place' id=""></textarea>
            <br>
            }`,
    given:  `
    #pond { <br>
        <span>display: flex;</span>
        <br>
        }`,
    example: null,
    lotos_num: 5,
    frog_num: 5,
  },
  {
    level: 16,
    inp: 1,
    frog_wrapper: `justify-content: flex-start;`,
    info: `
    Ещё одно свойство, которое ты можешь применить к определенному элементу — это <mark>align-self</mark>. Это свойство принимает те же значения, что и <mark>align-items</mark>.
        `,
    list: null,
    answer: `justify-content: flex-end;`,
    question: `
        .yellow { <br>
          <textarea type="text" name="" cols='1' rows='1' resize='no' class='answer_place' id=""></textarea>
            <br>
            }`,
    given:  `
    #pond { <br>
        <span>display: flex;</span>
        <span>align-items: flex-start</span>
        <br>
        }`,
    example: null,
    lotos_num: 5,
    frog_num: 5,
  },
  {
    level: 17,
    inp: 2,
    frog_wrapper: `justify-content: flex-start;`,
    info: `
    Используй <mark>order</mark> и <mark>align-self</mark> вместе, чтобы помочь лягушатам добраться к своим целям.
        `,
    list: null,
    answer: `justify-content: flex-end;`,
    question: `
          .yellow { <br>
            <textarea type="text" name="" cols='1' rows='2' resize='no' class='answer_place' id=""></textarea>
            <br>
            }`,
    given: `
    #pond {<br>
      <span>display: flex;</span>
      <span>align-items: flex-start;</span>
      <br>
    }
    `,
    example: null,
    lotos_num: 5,
    frog_num: 5,
  },
  {
    level: 18,
    inp: 1,
    lotus_wrapper: `flex-wrap: wrap; justify-content: flex-start;`,
    frog_wrapper: `flex-wrap: nowrap;`,
    liss: true,
    info: `
    О нет! Лягушат сплющило на одном ряду лилий. Раздвинь их с помощью свойства <mark>flex-wrap</mark>, которое принимает следующие значения:
        `,
    list: `
        <ul>
        <li><mark>nowrap:</mark> размеры элементов устанавливаются автоматически, чтобы они поместились в один ряд.</li>
        <li><mark>wrap:</mark> элементы автоматически переносятся на новую строку.</li>
        <li><mark>wrap-reverse:</mark> элементы автоматически переносятся на новую строку, но строки расположены в обратном порядке.</li>
        </ul>
        `,
    answer: `justify-content: flex-end;`,
    question: `
        #pond { <br>
          <span>display: flex;</span>
          <textarea type="text" name="" cols='1' rows='1' resize='no' class='answer_place' id=""></textarea>
            <br>
            }`,
    given:null,
    example: null,
    lotos_num: 7,
    frog_num: 7,
  },
  {
    level: 19,
    inp: 2,
    lotus_wrapper: `flex-direction: column; flex-wrap: wrap; justify-content: flex-start;`,
    info: `
    Помоги этой армии лягушат выстроиться в три колонки с помощью комбинации <mark>flex-direction</mark> и <mark>flex-wrap</mark>.
        `,
    list: null,
    answer: `justify-content: flex-end;`,
    question: `
        #pond { <br>
          <span>display: flex;</span>
          <textarea type="text" name="" cols='1' rows='2' resize='no' class='answer_place' id=""></textarea>
            <br>
            }`,
    given: null,
    example: null,
    lotos_num: 15,
    frog_num: 15,
  },
  {
    level: 20,
    inp: 1,
    lotus_wrapper: `flex-direction: column; flex-wrap: wrap; justify-content: flex-start;`,
    info: `
    Два свойства <mark>flex-direction</mark> и <mark>flex-wrap</mark> используются так часто вместе, что было создано свойство <mark>flex-flow</mark> для их комбинирования. Это свойство принимает их значения, разделённые пробелом.
        `,
    liss: false,
    list: `
       <span style='margin: 0;color: #ffffffbd; font-family: Arial, Helvetica, sans-serif; font-size: 15px;'>Например, ты можешь использовать <mark>flex-flow: row wrap</mark>, чтобы элементы располагались в ряд и автоматически переносились на новую строку.</span>
        `,
    answer: `justify-content: flex-end;`,
    question: `
        #pond { <br>
          <span>display: flex;</span>
          <textarea type="text" name="" cols='1' rows='1' resize='no' class='answer_place' id=""></textarea>
            <br>
            }`,
    given:null,
    example: `Попробуй использовать <mark>flex-flow</mark>, чтобы повторить предыдущий уровень.`,
    lotos_num: 15,
    frog_num: 15,
  },
  {
    level: 21,
    inp: 1,
    liss: true,
    lotus_wrapper: `flex-wrap: wrap; justify-content: flex-start;`,
    info: `
    Лягушат раскидало по всему пруду, но лилии сгруппированы в верхней части. Ты можешь использовать <mark>align-content</mark>, чтобы указать, как несколько рядов должны отделяться друг от друга. Данное свойство принимает следующие значения:
        `,
    list: `
        <ul>
        <li><mark>flex-start:</mark> ряды группируются в верхней части контейнера.</li>
        <li><mark>flex-end:</mark> ряды группируются в нижней части контейнера.</li>
        <li><mark>center:</mark> ряды группируются вертикально по центру контейнера.</li>
        <li><mark>space-between:</mark> ряды отображаются с одинаковыми расстояниями между ними.</li>
        <li><mark>space-around:</mark> ряды отображаются с одинаковыми расстояниями вокруг них.</li>
        <li><mark>stretch:</mark> ряды растягиваются, чтобы заполнить контейнер равномерно.</li>
        </ul>
        `,
    answer: `justify-content: flex-end;`,
    question: `
        #pond { <br>
          <span>display: flex;</span>
          <span>flex-wrap: wrap;</span>
          <textarea type="text" name="" cols='1' rows='1' resize='no' class='answer_place' id=""></textarea>
            <br>
            }`,
    given: null,
    example: `Это может запутать, но <mark>align-content</mark> отвечает за расстояние между рядами, в то время как <mark>align-items</mark> отвечает за то, как элементы в целом будут выровнены в контейнере. Когда только один ряд, <mark>align-content</mark> ни на что не влияет.`,
    lotos_num: 15,
    frog_num: 15,
  },
  {
    level: 22,
    inp: 1,
    lotus_wrapper: `flex-wrap: wrap; justify-content: flex-start; align-items: flex-end;` ,
    info: `
    Теперь течение сгруппировало лилии в нижней части. Используй <mark>align-content</mark>, чтобы направить лягушат туда.
        `,
    list:null,
    answer: `justify-content: flex-end;`,
    question: `
       #pond { <br>
        <span>display: flex;</span>
        <span>flex-wrap: wrap;</span>
        <textarea type="text" name="" cols='1' rows='1' resize='no' class='answer_place' id=""></textarea>
            <br>
            }`,
    given:null,
    example:null,
    lotos_num: 15,
    frog_num: 15,
  },
  {
    level: 23,
    inp: 2,
    info: `
    Лягушата были на вечеринке, но уже пора возвращаться домой. Используй комбинацию <mark>flex-direction</mark> и <mark>align-content</mark>, чтобы отправить их к своим лилиям.
        `,
    list: null,
    answer: `justify-content: flex-end;`,
    question: `
        #pond { <br>
          <span>display: flex;</span>
          <span>flex-wrap: wrap;</span>
          <textarea type="text" name="" cols='1' rows='2' resize='no' class='answer_place' id=""></textarea>
            <br>
            }`,
    given: null,
    example: null,
  },
  {
    level: 24,
    liss: true,
    inp: 4,
    info: `
    Доставь лягушат домой в последний раз, используя свойства CSS, которые ты выучил:
        `,
    list: `
        <ul>
        <li><mark>justify-content</mark></li>
        <li><mark>align-items</mark></li>
        <li><mark>flex-direction</mark></li>
        <li><mark>order</mark> </li>
        <li><mark>align-self</mark> </li>
        <li><mark>flex-wrap</mark> </li>
        <li><mark>flex-flow</mark> </li>
        <li><mark>align-content</mark> </li>
        </ul>
        `,
    answer: `justify-content: flex-end;`,
    question: `
        #pond { <br>
          <span>display: flex;</span>
          <textarea type="text" name="" cols='1' rows='4' resize='no' class='answer_place' id=""></textarea>
            <br>
            }`,
    given:null,
    example: null,
  },
];
  document.querySelector("section").innerHTML = `
  <div class="first_side">
<div class="levels">
  <div class="prv"></div>
  <div class="number">
    <span>Уровень <span id="this">${levels[0].level}</span> из 24 </span>
    <div class="dropdown"></div>
  </div>
  <div class="next"></div>
</div>
<div class="info">
  <div class="title"><h1>Flexbox Froggy</h1></div>
  <span class="infos">${levels[0].info}</span>
  <div class="list">${levels[0].list}</div>
  <div class="example">
  ${levels[0].example}
  </div>
</div>
<div class="code_space">
  <div class="inp_1">
  <ul>
  <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
  <div class="inp_2">
  <div class="textarea">
  <span class="given">${levels[0].given} </span>
    <br class="brg" />
    <span class="answer">${levels[0].question} </span>
    <textarea class='ada'></textarea>
    </div>
    <button class="submit">Следующый</button>
    </div>
    </div>
    </div>
    <div class="second_side">
    <div class="lotoses">
    <div class="lotos"></div>
    </div>
    <div class="frogs">
    <div class="forg">
    </div>
    </div>
    </div>
    `;
    console.log(document.querySelector('.ada'));
  document.querySelector('.ada').oninput =() =>{
    console.log(document.querySelector('.ada').value.split('').join(''));
document.querySelector('.frogs').style = event.target.value
for(let i of levels){
  if(document.querySelector('#this').innerHTML == i.level){
if (document.querySelector(".ada").value !== i.answer) {
  document.querySelector(".submit").style.opacity = "0.5";
} else {
  document.querySelector(".submit").style.opacity = "100%";

}
}
}
}

  
  if (document.querySelector("#this").innerHTML == "1") {
    document.querySelector(".prv").style.opacity = "40%";
  document.querySelector(".prv").style.cursor = "auto";
} else if (document.querySelector("#this").innerHTML == "24") {
  document.querySelector(".next").style.opacity = "40%";
  document.querySelector(".next").style.cursor = "auto";
}
    document.querySelector(".submit").onclick = () => {
      if (document.querySelector(".ada").value !== levels[0].answer) {
    document.querySelector(".code_space").classList.add("anim1");
  } else {
    document.querySelector(".code_space").classList.remove("anim1");
  }
}
if (document.querySelector(".ada").value !== levels[0].answer) {
  
  document.querySelector(".submit").style.opacity = "0.5";
} else {
  document.querySelector(".submit").style.opacity = "100%";
}

let div = document.createElement("div");
div.classList = "div";
for (let i of levels) {
  let leveles = document.createElement("span");
  leveles.id = "leveel";
  leveles.innerHTML = i.level;
  div.append(leveles);
}
document.querySelector(".levels").append(div);
document.querySelector(".number").onclick = () => {
  div.classList.toggle("drop_div");
};

for (let i of document.querySelectorAll("#leveel")) {
  i.onclick = () => {
    div.classList.remove("drop_div");
    for (let o of levels) {
      if (i.innerHTML == o.level) {
        for(let i of levels){
          if(document.querySelector('#this').innerHTML == i.level){
        if (document.querySelector(".ada").value !== i.answer) {
          document.querySelector(".submit").style.opacity = "0.5";
        } else {
          document.querySelector(".submit").style.opacity = "100%";
          document.querySelector(".submit").classList.toggle("anim2");
        
        }
      }}
      document.querySelector(".submit").onclick = () => {
        if (document.querySelector(".ada").value !== levels[0].answer) {
          document.querySelector(".code_space").classList.add("anim1");
        } else {
          document.querySelector(".code_space").classList.remove("anim1");
        }}
        document.querySelector(".ada").value = ''
    document.querySelector('.ada').setAttribute("rows", o.inp); 
          
        window.localStorage.data = JSON.stringify(o)
        
        if (o.given == null) {
          document.querySelector(".brg").style.display = "none";
            }else{
              document.querySelector(".brg").style.display = "inline";
            }
          if(o.liss == false){
            document.querySelector('.list').style.paddingLeft = '0px'
          }
          
            document.querySelector('.lotoses').style = o.lotus_wrapper
            document.querySelector('.frogs').innerHTML= ''
          for(let r=0 ; r < o.frog_num ; r++){
            let frogs = document.createElement('div')
            frogs.id = 'forg'
            frogs.innerHTML += `
            <svg width="60px" height="60px" viewBox="0 0 210 210" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage" transform="translate(0, 26)">
        <g id="frog-green" sketch:type="MSLayerGroup" transform="translate(-13.000000, 0.000000)">
            <circle id="Oval-29" fill="#69DA6B" sketch:type="MSShapeGroup" cx="73" cy="24" r="24"/>
            <circle id="Oval-29" fill="#69DA6B" sketch:type="MSShapeGroup" cx="163" cy="24" r="24"/>
            <g id="frog-green-+-Rectangle-30" transform="translate(0.000000, 54.000000)" sketch:type="MSShapeGroup" fill="#4CC24F">
                <ellipse id="frog-green" transform="translate(46.538193, 57.026578) rotate(-27.000000) translate(-46.538193, -57.026578) " cx="46.5381931" cy="57.0265777" rx="26.5" ry="50.5"/>
                <rect id="Rectangle-30" x="13" y="89" width="56" height="15" rx="9"/>
            </g>
            <g id="frog-green-+-Rectangle-30" transform="translate(189.000000, 111.500000) scale(-1, 1) translate(-189.000000, -111.500000) translate(142.000000, 54.000000)" sketch:type="MSShapeGroup" fill="#4CC24F">
                <ellipse id="frog-green" transform="translate(46.538193, 57.026578) rotate(-27.000000) translate(-46.538193, -57.026578) " cx="46.5381931" cy="57.0265777" rx="26.5" ry="50.5"/>
                <rect id="Rectangle-30" x="13" y="89" width="56" height="15" rx="9"/>
                </g>
                <rect id="Rectangle-30" fill="#69DA6B" sketch:type="MSShapeGroup" x="49" y="20" width="138" height="138" rx="9"/>
            <circle id="Oval-37" stroke="#FFFFFF" stroke-width="5" fill="#000000" sketch:type="MSShapeGroup" cx="73" cy="24" r="12"/>
            <circle id="Oval-37" stroke="#FFFFFF" stroke-width="5" fill="#000000" sketch:type="MSShapeGroup" cx="163" cy="24" r="12"/>
            <rect id="Rectangle-33" fill="#77F87A" sketch:type="MSShapeGroup" x="62" y="72" width="110" height="70" rx="9"/>
        </g>
    </g>
    </svg>
    `
    document.querySelector('.frogs').append(frogs)
  };
    document.querySelector('.lotoses').innerHTML= ''
          for(let r=0 ; r < o.lotos_num ; r++){
            let lotos = document.createElement('div')
           lotos.id = 'lotos'
            lotos.innerHTML += `
            <img src='lotus_green.png'>
            `
            document.querySelector('.lotoses').append(lotos)
          }
          document.querySelector('#this').innerHTML = o.level
          document.querySelector(".example").innerHTML = o.example;
          document.querySelector(".infos").innerHTML = o.info;
          document.querySelector(".list").innerHTML = o.list;
          document.querySelector(".given").innerHTML = o.given;
          document.querySelector(".answer").innerHTML = o.question;
      }
    }
  };
}
window.onload = () =>{
  document.querySelector('textarea').oninput =() =>{
    console.log(document.querySelector('textarea').value);
    }
    
  let obj = JSON.parse(window.localStorage.data)
  document.querySelector('.ada').setAttribute("rows", obj.inp); 
  if (obj.given == null) {
    document.querySelector(".brg").style.display = "none";
  } 
  if(obj.liss == false){
    document.querySelector('.list').style.paddingLeft = '0px'
  }else{
    document.querySelector('.list').style.paddingLeft = '40px'
  }
  document.querySelector('#this').innerHTML = obj.level
  document.querySelector(".example").innerHTML = obj.example;
  document.querySelector(".infos").innerHTML = obj.info;
  document.querySelector(".list").innerHTML = obj.list;
  document.querySelector(".given").innerHTML = obj.given;
  document.querySelector(".answer").innerHTML = obj.question;
  document.querySelector('.frogs').innerHTML= ''
         for(let r=0 ; r < obj.frog_num ; r++){
           let frogs = document.createElement('div')
           frogs.id = 'forg'
           frogs.innerHTML += `
           <svg width="60px" height="60px" viewBox="0 0 210 210" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
   <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage" transform="translate(0, 26)">
       <g id="frog-green" sketch:type="MSLayerGroup" transform="translate(-13.000000, 0.000000)">
       <circle id="Oval-29" fill="#69DA6B" sketch:type="MSShapeGroup" cx="73" cy="24" r="24"/>
       <circle id="Oval-29" fill="#69DA6B" sketch:type="MSShapeGroup" cx="163" cy="24" r="24"/>
           <g id="frog-green-+-Rectangle-30" transform="translate(0.000000, 54.000000)" sketch:type="MSShapeGroup" fill="#4CC24F">
           <ellipse id="frog-green" transform="translate(46.538193, 57.026578) rotate(-27.000000) translate(-46.538193, -57.026578) " cx="46.5381931" cy="57.0265777" rx="26.5" ry="50.5"/>
           <rect id="Rectangle-30" x="13" y="89" width="56" height="15" rx="9"/>
           </g>
           <g id="frog-green-+-Rectangle-30" transform="translate(189.000000, 111.500000) scale(-1, 1) translate(-189.000000, -111.500000) translate(142.000000, 54.000000)" sketch:type="MSShapeGroup" fill="#4CC24F">
           <ellipse id="frog-green" transform="translate(46.538193, 57.026578) rotate(-27.000000) translate(-46.538193, -57.026578) " cx="46.5381931" cy="57.0265777" rx="26.5" ry="50.5"/>
               <rect id="Rectangle-30" x="13" y="89" width="56" height="15" rx="9"/>
           </g>
           <rect id="Rectangle-30" fill="#69DA6B" sketch:type="MSShapeGroup" x="49" y="20" width="138" height="138" rx="9"/>
           <circle id="Oval-37" stroke="#FFFFFF" stroke-width="5" fill="#000000" sketch:type="MSShapeGroup" cx="73" cy="24" r="12"/>
           <circle id="Oval-37" stroke="#FFFFFF" stroke-width="5" fill="#000000" sketch:type="MSShapeGroup" cx="163" cy="24" r="12"/>
           <rect id="Rectangle-33" fill="#77F87A" sketch:type="MSShapeGroup" x="62" y="72" width="110" height="70" rx="9"/>
           </g>
           </g>
  </svg>
           `
           document.querySelector('.frogs').append(frogs)
           document.querySelector('.lotoses').innerHTML= ''
           for(let r=0 ; r < obj.lotos_num ; r++){ 
             let lotos = document.createElement('div')
             lotos.id = 'lotos'
             lotos.innerHTML += `
             <img src='lotus_green.png'>
             `
             document.querySelector('.lotoses').append(lotos)
            }
            document.querySelector('#this').innerHTML = obj.level
            document.querySelector('.lotoses').style = obj.lotus_wrapper
          document.querySelector(".example").innerHTML = obj.example;
          document.querySelector(".infos").innerHTML = obj.info;
          document.querySelector(".list").innerHTML = obj.list;
          document.querySelector(".given").innerHTML = obj.given;
          document.querySelector(".answer").innerHTML = obj.question;
      }
      document.querySelector('.frogs').style = obj.frog_wrapper
    }
  