export function createRolesBtns(){
  const roles = getRoles();
  // Create filter div
  let filterDiv = document.createElement('div');
  filterDiv.className = 'filter-div';
  // Create subtitle div
  let subtitle = document.createElement('div');
  subtitle.className = 'subtitle';
  subtitle .innerHTML = `<h3>ROLES: </h3>`;
  // Create filter buttons div
  let btnContainer = document.createElement('div');
  btnContainer.className = 'filter-btns-container';
  let btnsByRole = roles.map(function(role){
    return `<button class="filter-btn" type="button" data-id="role">
              <span class="filter-label">${role}</span>
            </button>`
  }).join("");
  btnContainer.innerHTML = btnsByRole;
  // Modifying the document 
  filterDiv.append(subtitle);
  filterDiv.append(btnContainer);
  filterEngine.append(filterDiv);
}

export function createLevelsBtns(){
  const levels = getLevels();  
  // Create filter div
  let filterDiv = document.createElement('div');
  filterDiv.className = 'filter-div';
  // Create subtitle div
  let subtitle = document.createElement('div');
  subtitle.className = 'subtitle';
  subtitle .innerHTML = `<h3>LEVELS: </h3>`;
  // Create filter buttons div
  let btnContainer = document.createElement('div');
  btnContainer.className = 'filter-btns-container';
  let btnsByLevel = levels.map(function(level){
    return `<button class="filter-btn" type="button" data-id="level">
              <span class="filter-label">${level}</span>
            </button>`
  }).join("");
  btnContainer.innerHTML = btnsByLevel;
  // Modifying the document 
  filterDiv.append(subtitle);
  filterDiv.append(btnContainer);
  filterEngine.append(filterDiv);
}

export function createContractBtns(){
  const contracts = getContracts();
  // Create filter div
  let filterDiv = document.createElement('div');
  filterDiv.className = 'filter-div';
  // Create subtitle div
  let subtitle = document.createElement('div');
  subtitle.className = 'subtitle';
  subtitle .innerHTML = `<h3>CONTRACTS'S TYPE: </h3>`;
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

export function createLocationsBtns(){
  const locations = getLocations();
  // Create filter div
  let filterDiv = document.createElement('div');
  filterDiv.className = 'filter-div';
  // Create subtitle div
  let subtitle = document.createElement('div');
  subtitle.className = 'subtitle';
  subtitle .innerHTML = `<h3>LOCATION: </h3>`;
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

export function createLanguagesBtns(){
  const languages = getLanguages();
  // Create filter div
  let filterDiv = document.createElement('div');
  filterDiv.className = 'filter-div';
  // Create subtitle div
  let subtitle = document.createElement('div');
  subtitle.className = 'subtitle';
  subtitle .innerHTML = `<h3>LANGUAGES: </h3>`;
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

export function createToolsBtns(){
  const tools = getTools();
  // Create filter div
  let filterDiv = document.createElement('div');
  filterDiv.className = 'filter-div';
  // Create subtitle div
  let subtitle = document.createElement('div');
  subtitle.className = 'subtitle';
  subtitle .innerHTML = `<h3>TOOLS: </h3>`;
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

export function getRoles(){
  return dataJobs.reduce(
    function(values, item){
      if(!values.includes(item.role)){
        values.push(item.role);
      }
      return values;
    }, ["All"]
  );
}

export function getLevels(){
  return dataJobs.reduce(
    function(values, item){
      if(!values.includes(item.level)){
        values.push(item.level);
      }
      return values;
    }, ["All"]
  );
}

export function getContracts(){
  return dataJobs.reduce(
    function(values, item){
      if(!values.includes(item.contract)){
        values.push(item.contract);
      }
      return values;
    }, ["All"]
  );
}

export function getLocations(){
  return dataJobs.reduce(
    function(values, item){
      if(!values.includes(item.location)){
        values.push(item.location);
      }
      return values;
    }, ["All"]
  );
}

export function getLanguages(){
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
  }, ["All"]);
}

export function getTools(){
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
  }, ["All"]);
}
