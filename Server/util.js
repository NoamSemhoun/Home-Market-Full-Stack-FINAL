const database = require('./../DataBase/index.js')


function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    
    return randomString;
}

function predicatePop(list, predicate) {
  const index = list.findIndex(predicate);
  if (index !== -1) {
    const removedElement = list.splice(index, 1)[0];
    return removedElement;
  }
}

function helpValidate(validateScheme,instance){
  const validation = validateScheme.validate(instance);
  if (validation.error) return {error:validation.error.details.map((detail)=>detail.message).join(' ')}
  return validation
}

function validate(instance, validateScheme, requireFeilds = []){

  if (requireFeilds.length === 0) return helpValidate(validateScheme,instance);

  for (const feild of requireFeilds){
      if (!(feild in instance)) return {error: `"${feild}" is required` };
  }
  return helpValidate(validateScheme,instance);
}

async function getUserId(apiKey){
  // when call update, check that the apikey can change the userId
  let metadata = await database.getTable('usersMetadata',{apiKey:apiKey},['id']);
  if (metadata.error) return metadata;
  metadata = metadata[0];

  let data = await database.getTable('users',{metadataId:metadata.id},['id']);
  if (data.error) return data;
  data = data[0];

  return data.id;
}


async function checkAccess(apiKey, userId){
  // when call update, check that the apikey can change the userId
  let metadata = await database.getTable('usersMetadata',{apiKey:apiKey},['userRank','id']);
  if (metadata.error) return metadata;
  if (metadata.userRank === 'admin') return {success:'Access Confirmed.'};

  let data = await database.getTable('users',{metadataId:metadata.id},['id']);
  if (data.error) return data;

  return data.id === parseInt(userId) ?
      {success:'Access Confirmed.'} : 
      {error:'Access Denied'};
}


function updateInstance(oldInstance, updatedInstance, accessFields){
  const newInstance = {...oldInstance};

  accessFields.forEach((field)=>{
    if (field in updatedInstance)
      newInstance[field] = updatedInstance[field];
  });

  return newInstance;
}

function getDatetime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

module.exports = {
    generateRandomString,
    validate,
    checkAccess,
    getUserId,
    predicatePop,
    updateInstance,
    getDatetime
}