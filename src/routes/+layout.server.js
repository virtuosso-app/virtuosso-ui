
/** @type {import('./$types').PageLoad} */
export async function load({ locals }) {
  // const token = cookies.get('virtuosso-tk');
  // console.log('COOKIES', token)
  return {
    user: locals.user
  }
}