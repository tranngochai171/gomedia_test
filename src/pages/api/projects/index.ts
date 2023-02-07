import commonConstants from 'constants/common.constant';
import helper200 from 'helpers/helper.200';
import helper405 from 'helpers/helper.405';
import { NextApiRequest, NextApiResponse } from 'next';
import projectService from 'services/project.service';
import errorHandler from '../../../../errors/error-handler';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    switch (req.method) {
      case commonConstants.GET:
        const { ...rest } = { ...req.query };
        const responseData = await projectService.getProjects(rest);
        helper200.handle(res, responseData);
        break;
      default:
        // Method Not Allowed
        helper405.handle(res);
        break;
    }
  } catch (error) {
    errorHandler.send(error, res);
  }
}
