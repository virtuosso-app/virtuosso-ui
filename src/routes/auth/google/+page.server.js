import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url, cookies }) {
  // console.log('PARAMS', url)
  const token = url.searchParams.get('access_token');

  if (!token) return { status: 401, error: 'Unauthorized' };

  const user = await fetch('https://strapi/api/auth/google/callback?access_token='+token)
    .then(res => res.json())
    .catch(err => console.error(err));
  
  if(user && user.jwt) {
    cookies.set('virtuosso-tk', user.jwt, {
      path: '/'
    });
    throw redirect(301, '/')
  }
  return { status: 401, error: 'Unauthorized' }
	
}