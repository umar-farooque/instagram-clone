import client from './Client';

async function signup(creds) {
  console.log('Api is calling');
  return await client.post('/api/user/signup', creds);
}

export { signup };
