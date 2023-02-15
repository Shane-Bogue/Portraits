const PEOPLE = [ 
    {name: 'Ada Lovelace', pic: 'https://daily.jstor.org/wp-content/uploads/2019/10/ada_lovelace_pioneer_1050x700.jpg'},
    {name: 'Alan Turing', pic: 'https://cdn.britannica.com/81/191581-050-8C0A8CD3/Alan-Turing.jpg'},
    {name: 'Charles Babbage', pic: 'https://daily.jstor.org/wp-content/uploads/2015/06/Charles_Babbage_1860.jpg'},
    {name: 'Steve Jobs', pic: 'https://s.yimg.com/uu/api/res/1.2/yLirdFgMPMj8RmbIZikPMA--~B/Zmk9ZmlsbDtoPTc5Nzt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://www.blogcdn.com/www.engadget.com/media/2011/10/steve-jobs.jpg.cf.jpg'},
    {name: 'Bill Gates', pic: 'https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg'},
    {name: 'Elon Musk', pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Elon_Musk_Brazil_2022.png/1200px-Elon_Musk_Brazil_2022.png'},
]

class Person {
    constructor(name,pic) {
        this.name = name;
        this.pic = pic
    }

    Frame() {
        let container = document.createElement('div')
        let name = document.createElement('p');
        let image = document.createElement('img');
        name.textContent = this.name
        image.src = this.pic
        container.append(name,image)
        document.body.append(container)
    }
}

PEOPLE.forEach(ele => {
    let p = new Person(ele.name,ele.pic)
    p.Frame()
})
