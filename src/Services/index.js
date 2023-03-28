import axios from 'axios';

export const getDataDetail = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const baseUrl = 'https://parseapi.back4app.com/classes/hotel/oF1yBSSlZH';
      const config = {
        headers: {
          'X-Parse-Application-Id': `5bKP3JX6zXWqpXMmI6tImTdZxDh59kb6IGVGlHHF`,
          'X-Parse-REST-API-Key': 'ovP2x3YltGJsu1t9RM6FpDNgU5n2hnQSAhatLxIq'
        }
      }

      const result = await axios.get(baseUrl, config);

      if (result.status === 200) {
        resolve(result.data['data_chosen'])
      }

    } catch (error) {
      console.log('error@getDataDetail.Services.index.js', error);
      resolve(false)
    }
  })
}