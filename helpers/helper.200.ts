import { NextApiResponse } from 'next';

class Helper200 {
  handle(res: NextApiResponse, payload = {}) {
    res.status(200).send(payload);
  }
}

export default new Helper200();
