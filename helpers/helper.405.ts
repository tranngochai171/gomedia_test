import { NextApiResponse } from 'next';

class Helper405 {
  handle(res: NextApiResponse) {
    res.status(405).send({ message: 'Method Not Allowed' });
  }
}

export default new Helper405();
