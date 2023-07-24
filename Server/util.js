const database = require('./../../DataBase/index')


function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    
    return randomString;
}

function validate(instance, validateScheme, noAccessFeilds = [], requireFeilds = []){

  if (requireFeilds.length === 0) return validateScheme.validate(instance);

  for (const feild of requireFeilds){
      if (!(feild in instance)) return {error: `"${feild}" is required` };
  }
  for (const feild of noAccessFeilds){
      if (feild in instance) return {error: `You Can't Change ${feild} Feild!\nYou Can Ask for it from an Admin`}
  }
  return validateScheme.validate(instance);
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


async function checkAccess(apiKey,userId){
  // when call update, check that the apikey can change the userId
  let metadata = await database.getTable('usersMetadata',{apiKey:apiKey},['userRank','id']);
  if (metadata.error) return metadata;
  metadata = metadata[0];
  if (metadata.userRank === 'admin') return {success:'Access Confirmed.'};

  let data = await database.getTable('users',{metadataId:metadata.id},['id']);
  if (data.error) return data;
  data = data[0];

  return data.id === userId ?
      {success:'Access Confirmed.'} : 
      {error:'Access Denied'};
}


module.exports = {
    generateRandomString,
    validate,
    checkAccess,
    getUserId
}