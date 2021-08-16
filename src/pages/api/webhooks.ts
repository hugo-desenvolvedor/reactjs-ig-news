import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('evento recebido');

    res.status(200).json({
        ok: true
    })
}