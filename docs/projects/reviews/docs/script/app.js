// Local reviews data
const reviews = [
{
    id: 1,
    name: "Safra Cats",
    job: "CEO",
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    text: "Safra Cats is an Israeli-born American billionaire banker and technology executive. She is the CEO of Oracle Corporation. She has been an executive at Oracle since April 1999, and a board member since 2001.",
},
{
    id: 2,
    name: "Jessie Charles",
    job: "Cloud Enginner",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    text: "Vehicula platea porta nascetur odio euismod iaculis volutpat ligula enim magnis at pulvinar dui scelerisque conubia, lobortis vestibulum est lacus vivamus tellus augue velit nam cubilia mauris suscipit tincidunt curae.", 
},
{
    id: 3,
    name: "Abigail Tyler",
    job: "CMO",
    img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    text: " Pellentesque ligula nisi sed vulputate quisque dictum a dis, sapien suscipit platea velit odio turpis fringilla sollicitudin, gravida nascetur fermentum ultrices fames per proin sagittis, sociosqu tincidunt tempor metus sociis pharetra habitasse.",
},
{
    id: 4,
    name : "Giovanny Conner",
    job: "Data Analist",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    text: "Senectus cum felis viverra dictumst porttitor urna convallis ac nulla montes, duis a ornare enim rhoncus nascetur blandit ridiculus odio nostra, orci auctor sagittis dui mollis egestas parturient purus cubilia.",
},
{
    id: 5,
    name: "Humberto Owens",
    job: "Marketing Agent",
    img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    text: "Aliquam quis lacinia in sed rutrum non curae tincidunt natoque senectus himenaeos fames netus torquent eros cursus, aptent justo nullam vivamus erat cras ullamcorper a tempor blandit vestibulum mauris penatibus mus nisl.",
},
{
    id: 6,
    name: "Susan Smith",
    job: "Web Developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
},
{
    id: 7,
    name: "Anna Johnson",
    job: "Web Designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
},
{
    id: 8,
    name: "Peter Jones",
    job: "Intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
},
{
    id: 9,
    name: "Bill Anderson",
    job: "The Boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
},
];

// Selecting data

const image = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

// Add event when the page is loaded
window.addEventListener("DOMContentLoaded", function(){
    showPerson();
})

// Function to show person
function showPerson(){
    let item = reviews[currentItem];
    image.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
// Function to prev person
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
});
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});

randomBtn.addEventListener('click', function(){
    currentItem = generateRandomValue(0, reviews.length -1);
    showPerson();
});

function generateRandomValue(min, max){
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

