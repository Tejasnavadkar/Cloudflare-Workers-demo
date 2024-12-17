/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {

}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		// console.log(request.body);
		// console.log(request.headers);
		// // console.log("url--------------",request.url)
		// const { pathname } = new URL(request.url);  // to get path name like /user,/post etc

		// console.log("pathname-------",pathname)
		
		// if (request.method === "GET") {
		// 	return Response.json({
		// 		message: "you sent a get request"
		// 	});
		// } else {
		// 	return Response.json({
		// 		message: "you did not send a get request"
		// 	});
		// }


		return Response.json({
		 		message: "Hi there"
			});
	},
};
