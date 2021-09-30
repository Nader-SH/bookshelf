let books = [
    {
      title: 'Book 1',
      author: 'Mark Zuckerberg',
      work:'Co-founder and CEO of Facebook,Co-founder and co-CEO of Chan Zuckerberg Initiative',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Mark_Zuckerberg_F8_2019_Keynote_%2847721886632%29_%28cropped%29.jpg/220px-Mark_Zuckerberg_F8_2019_Keynote_%2847721886632%29_%28cropped%29.jpg'
    },
    {
      title: 'Book 2',
      author: 'Stev Jobs',
      work:'Co-founder, chairman and CEO of Apple Inc.Primary investor and chairman of Pixar Founder.',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/220px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg'
    },
    {
      title: 'Book 3',
      author: 'Jack Ma',
      work:'Co-founder of Yunfeng Capital',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Enabling_eCommerce-_Small_Enterprises%2C_Global_Players_%2839008130265%29_%28cropped%29.jpg/220px-Enabling_eCommerce-_Small_Enterprises%2C_Global_Players_%2839008130265%29_%28cropped%29.jpg'
    },
    {
      title: 'Book 4',
      author: 'Jeff Bezos',
      work:'Founder and Executive Chairman of Amazon, Founder of Blue Origin, Founder of Bezos Expeditions.',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/220px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg'
    },  
    {
      title: 'Book 5',
      author: 'Bill Gates',
      work:'	Co-chairperson of the Bill & Melinda Gates Foundation,Chairman and founder of Branded Entertainment Network.',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/220px-Bill_Gates_2017_%28cropped%29.jpg'
    },
    {
      title: 'Book 6',
      author: 'Larry Ellison',
      work:'	Co-founder, executive chairman and CTO of Oracle Corporation.',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Larry_Ellison_picture.png/220px-Larry_Ellison_picture.png'
    },
    {
      title: 'Book 7',
      author: 'Larry Page',
      work:'	Co-founding Google,Co-founding Alphabet Inc,Co-creator PageRank.',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/220px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg'
    },
    {
      title: 'Book 8',
      author: 'Warren Buffett',
      work:'Leadership of Berkshire Hathaway with Charlie Munger.	',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Warren_Buffett_with_Fisher_College_of_Business_Student_-_4395161160_%28cropped%29.jpg/220px-Warren_Buffett_with_Fisher_College_of_Business_Student_-_4395161160_%28cropped%29.jpg'
    },
    ];
    
var container = document.getElementById('container');

for (let i = 0; i < books.length; i++) {
  let bookDiv = document.createElement('div');

  bookDiv.classList.add('book-div');
  let bookTit = document.createElement('p');
  bookTit.classList.add('bookNum');
  bookTit.src = books[i].title;

  
  bookTit.innerText= books[i].title;
  const bookImg = document.createElement('img');
  bookImg.classList.add('book-img');
  bookImg.src = books[i].image;


  let bookp = document.createElement('p');
  bookp.classList.add('book-author');
  bookp.innerText= books[i].author;
  

  let bookwork = document.createElement('p');
  bookwork.innerText= books[i].work;
  bookwork.classList.add('book-work');


  bookDiv.appendChild(bookTit);
  bookDiv.appendChild(bookp);
  bookDiv.appendChild(bookwork);
  bookDiv.appendChild(bookImg);
  container.appendChild(bookDiv);
}

