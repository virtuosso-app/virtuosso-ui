import jwt from 'jsonwebtoken'; 
import { STRAPI_URL } from '$env/static/private';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const token = event.cookies.get('virtuosso-tk');
	if(token) {
		const user = await fetch(STRAPI_URL + 'api/users/me', {
								headers: {
									'Authorization': `Bearer ${token}`
								}
							})
							.then(res => res.json())
							.catch(err => console.error(err));

		event.locals.user = user;
	
	}
	const response = await resolve(event);	

	return response;
}


/** @type {import('@sveltejs/kit').HandleFetch} */
export async function handleFetch({ request, fetch, cookies }) {
	if (request.url.startsWith('https://strapi')) {
		console.log('REQUEST')
    let token = null
    let toReplace = 'https://strapi/'
		// // clone the original request, but change the URL
    if(request.url.startsWith('https://strapi-token')) {
			console.log('TOKEN')
      token = cookies.get('virtuosso-tk');
      toReplace = 'https://strapi-token'
    }
		request = new Request(
			request.url.replace(toReplace, STRAPI_URL),
			request
		);
    if(token) {
      request.headers.set('Authorization', `Bearer ${token}`);
    }
	}

	return fetch(request);
}