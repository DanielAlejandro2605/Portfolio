const dataJobs = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
]

const filterEngine = document.getElementById("filter-engine");
const jobsCards = document.getElementById('main-container');
const cardsArray = [];
let originalCardsInfo = [];
let cardsDisplayed = [];
let filterKeyWords = [];

// ACTION
// Create filter buttons dinamically
createFilterEngine();
// Creating JOB CARDS
createJobsCards(dataJobs);

// CREATING JOBS DINAMICALLY
function createJobsCards(jobItems){
    getCardInfo(jobItems);
    jobsCards.innerHTML = getHTMLFromCards(originalCardsInfo);
}

function getCardInfo(data){
  originalCardsInfo = data.map((job) => {
    job = `<article class="job-card">
    <img src="${job.logo}">
    <div class="company-information">
      <h5 class="company-name">${job.company}</h5>
      <h4 class="job-position">${job.position}</h4>
      <div class="job-features">
        <span>${job.postedAt} -</span>
        <span>${job.location} -</span>
        <span>${job.contract}</span>
      </div>
    </div>
    <div class="job-skills">
      ${getTagsJob(job)}
    </div>
  </article>`;
    cardsArray.push(job);
    return job;
  });
}

function getTagsJob(job){
  let tags = [job.role, job.level, ...job.languages, ...job.tools];
  let tagsHTML = '';
  for(let i = 0; i < tags.length; i++){
    tagsHTML += `<span>${tags[i]}</span>`;
  } 
  return tagsHTML;
}

function getHTMLFromCards(cards){
  return cards.join('');
}


// FILTER BUTTONS
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(function(filterBtn){
    filterBtn.addEventListener('click', function(){
      let buttonKeyWord = filterBtn.textContent.trim();
      if(toggleSelectiongButton(filterBtn)){
        let indexToDelete = filterKeyWords.indexOf(buttonKeyWord);
        filterKeyWords.splice(indexToDelete, 1);
      } else{
        filterKeyWords.push(buttonKeyWord);
      }
      filterCards(filterKeyWords);
      
      if(cardsDisplayed.length == 0){
        jobsCards.innerHTML = `<p class="message-alert">There is not job with these features<p>`;
      } else{
        jobsCards.innerHTML = getHTMLFromCards(cardsDisplayed);
      }
      
    });
})

function filterCards(filters){
  cardsDisplayed = cardsArray.filter((card) => {
    if(iteratingForEachKeyword(filters, card)){
      return card;
    }
  });
}

function iteratingForEachKeyword(filters, card){
  for(let i = 0; i < filters.length; i++){
    if(!card.includes(filters[i])){
      return false;
    }
  }
  return true;
}  
function toggleSelectiongButton(button){
    let origin = button.textContent;
    if(button.innerHTML.includes("img")){
        button.innerHTML = `<span class="filter-label">${origin}</span>`
        return true;
    } else {
        button.innerHTML += `<img class="icon-remove" src="./images/icon-remove.svg">`
        return false;
    }
}



// CREATING BUTTONS DINAMYCALLY

function createFilterEngine(){
    createRolesBtns();
    createLevelsBtns();
    createContractBtns();
    createLocationsBtns();
    createLanguagesBtns();
    createToolsBtns();
    createClearButton();
}
  
function createRolesBtns(){
    const roles = getRoles();
    // Create filter div
    let filterDiv = document.createElement('div');
    filterDiv.className = 'filter-div';
    // Create subtitle div
    let subtitle = document.createElement('div');
    subtitle.className = 'subtitle';
    subtitle.innerHTML = `<h4>ROLES</h4><img class="icon" src="./images/user.png">`;
    // Create filter buttons div
    let btnContainer = document.createElement('div');
    btnContainer.className = 'filter-btns-container';
    let btnsByRole = roles.map(function(role){
      return `<button class="filter-btn role" type="button" data-id="role">
                <span class="filter-label">${role}</span>
              </button>`
    }).join("");
    btnContainer.innerHTML = btnsByRole;
    // Modifying the document 
    filterDiv.append(subtitle);
    filterDiv.append(btnContainer);
    filterEngine.append(filterDiv);
}
  
function createLevelsBtns(){
    const levels = getLevels();  
    // Create filter div
    let filterDiv = document.createElement('div');
    filterDiv.className = 'filter-div';
    // Create subtitle div
    let subtitle = document.createElement('div');
    subtitle.className = 'subtitle';
    subtitle.innerHTML = `<h4>LEVELS</h4><img class="icon" src="./images/promotions.png">`;
    // Create filter buttons div
    let btnContainer = document.createElement('div');
    btnContainer.className = 'filter-btns-container';
    let btnsByLevel = levels.map(function(level){
      return `<button class="filter-btn level" type="button" data-id="level">
                <span class="filter-label">${level}</span>
              </button>`
    }).join("");
    btnContainer.innerHTML = btnsByLevel;
    // Modifying the document 
    filterDiv.append(subtitle);
    filterDiv.append(btnContainer);
    filterEngine.append(filterDiv);
}
  
function createContractBtns(){
    const contracts = getContracts();
    // Create filter div
    let filterDiv = document.createElement('div');
    filterDiv.className = 'filter-div';
    // Create subtitle div
    let subtitle = document.createElement('div');
    subtitle.className = 'subtitle';
    subtitle.innerHTML = `<h4>CONTRACT</h4><img class="icon" src="./images/agreement.png">`;
    // Create filter buttons div
    let btnContainer = document.createElement('div');
    btnContainer.className = 'filter-btns-container';
    let btnsByContract = contracts.map(function(contract){
      return `<button class="filter-btn" type="button" data-id="contract">
                <span class="filter-label">${contract}</span>
              </button>`
    }).join("");
    btnContainer.innerHTML = btnsByContract;
    // Modifying the document 
    filterDiv.append(subtitle);
    filterDiv.append(btnContainer);
    filterEngine.append(filterDiv);
}
  
function createLocationsBtns(){
    const locations = getLocations();
    // Create filter div
    let filterDiv = document.createElement('div');
    filterDiv.className = 'filter-div';
    //Create subtitle div
    let subtitle = document.createElement('div');
    subtitle.className = 'subtitle';
    subtitle.innerHTML = `<h4>LOCATION</h4><img class="icon" src="./images/placeholder.png">`;
    // Create filter buttons div
    let btnContainer = document.createElement('div');
    btnContainer.className = 'filter-btns-container';
    let btnsByLocation = locations.map(function(loc){
      return `<button class="filter-btn" type="button" data-id="contract">
                <span class="filter-label">${loc}</span>
              </button>`
    }).join("");
    btnContainer.innerHTML = btnsByLocation;
    // Modifying the document 
    filterDiv.append(subtitle);
    filterDiv.append(btnContainer);
    filterEngine.append(filterDiv);
}
  
function createLanguagesBtns(){
    const languages = getLanguages();
    // Create filter div
    let filterDiv = document.createElement('div');
    filterDiv.className = 'filter-div';
    // Create subtitle div
    let subtitle = document.createElement('div');
    subtitle.className = 'subtitle';
    subtitle.innerHTML = `<h4>LANGUAGE</h4><img class="icon" src="./images/coding.png">`;
    // Create filter buttons div
    let btnContainer = document.createElement('div');
    btnContainer.className = 'filter-btns-container';
    let btnsByLanguage = languages.map(function(lan){
      return `<button class="filter-btn" type="button" data-id="language">
                <span class="filter-label">${lan}</span>
              </button>`
    }).join("");
    btnContainer.innerHTML = btnsByLanguage;
    // Modifying the document 
    filterDiv.append(subtitle);
    filterDiv.append(btnContainer);
    filterEngine.append(filterDiv);
}
  
function createToolsBtns(){
    const tools = getTools();
    // Create filter div
    let filterDiv = document.createElement('div');
    filterDiv.className = 'filter-div';
    // Create subtitle div
    let subtitle = document.createElement('div');
    subtitle.className = 'subtitle';
    subtitle.innerHTML = `<h4>TOOLS</h4><img class="icon" src="./images/feature.png">`;
    // Create filter buttons div
    let btnContainer = document.createElement('div');
    btnContainer.className = 'filter-btns-container';
    let btnsByTools = tools.map(function(tool){
      return `<button class="filter-btn" type="button" data-id="tool">
                <span class="filter-label">${tool}</span>
              </button>`
    }).join("");
    btnContainer.innerHTML = btnsByTools;
    // Modifying the document
    filterDiv.append(subtitle);
    filterDiv.append(btnContainer);
    filterEngine.append(filterDiv);
}
  
function getRoles(){
    return dataJobs.reduce(
      function(values, item){
        if(!values.includes(item.role)){
          values.push(item.role);
        }
        return values;
      }, []
    );
}
  
function getLevels(){
    return dataJobs.reduce(
      function(values, item){
        if(!values.includes(item.level)){
          values.push(item.level);
        }
        return values;
      }, []
    );
}
  
function getContracts(){
    return dataJobs.reduce(
      function(values, item){
        if(!values.includes(item.contract)){
          values.push(item.contract);
        }
        return values;
      }, []
    );
}
  
function getLocations(){
    return dataJobs.reduce(
      function(values, item){
        if(!values.includes(item.location)){
          values.push(item.location);
        }
        return values;
      }, []
    );
}
  
function getLanguages(){
    return dataJobs.reduce((values, item) => {
      if(Array.isArray(item.languages)){
        let aux  = [];
        aux = item.languages;
        aux.forEach((e) => {
          if(!values.includes(e)){
            values.push(e);
          }
        })
      } else{
        if(!values.includes(item.languages)){
          values.push(item.languages);
        }
      }
      return values;
    }, []);
}
  
function getTools(){
    return dataJobs.reduce((values, item) => {
      if(Array.isArray(item.tools)){
        let aux  = [];
        aux = item.tools;
        aux.forEach((e) => {
          if(!values.includes(e)){
            values.push(e);
          }
        })
      } else{
        if(!values.includes(item.tools)){
          values.push(item.tools);
        }
      }
      return values;
    }, []);
}

function createClearButton(){
    let clearButton = document.createElement('button');
    clearButton.className = 'clear-button';
    clearButton.innerHTML = '<span>Clear</span>';

    filterEngine.append(clearButton);
}

let clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', function(){
  filterBtns.forEach((filterBtn) => {
    if(filterBtn.innerHTML.includes('img')){
      filterBtn.innerHTML = `<span class="filter-label">${filterBtn.textContent.trim()}</span>`
    }
    jobsCards.innerHTML = getHTMLFromCards(originalCardsInfo);
  });
  filterKeyWords = [];
})