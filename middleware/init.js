/*
* author:lili
* Date:2018-4-26
* description: middleware is used to be used before rendering view
* init is used to get userId, islogin and so on
*/
export default function (context) {
  	context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
}