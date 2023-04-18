import { Application, NextFunction, Request, Response } from 'express';
import httpContext from 'express-http-context2';
import { nanoid } from 'nanoid';

const REQUEST_ID_HTTP_HEADER_NAME = 'my-request-id';
const REQUEST_ID_CONTEXT_KEY = 'myRequestId';


function init(app: Application) {

	app.use(httpContext.middleware);

	app.use((req: Request, _: Response, next: NextFunction) => {
		const requestId: string = req.header(REQUEST_ID_HTTP_HEADER_NAME) || nanoid();

		httpContext.set<string>(REQUEST_ID_CONTEXT_KEY, requestId);
		next();
	});
}


export {
	init,
	REQUEST_ID_CONTEXT_KEY
}
