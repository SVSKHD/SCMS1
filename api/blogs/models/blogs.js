'use strict';
const axios=require('axios');
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {

afterCreate:async entry=>{
    axios.post(strapi.config.environments.production.staticWebsiteBuildUrl, entry)
    .catch(()=>{

    });
},
afterUpdate:async entry=>{
    axios.post(strapi.config.environments.production.staticWebsiteBuildUrl, entry)
    .catch(()=>{

    });
},
afterDestroy:async entry=>{
    axios.post(strapi.config.environments.production.staticWebsiteBuildUrl, entry)
    .catch(()=>{

    });
},


};
