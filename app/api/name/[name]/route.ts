import { NextApiRequest, NextApiResponse } from "next";

export const GET = (req: NextApiRequest, res: NextApiResponse, ctx: {params: {name: string}}) => {
        const {name}  = ctx.params

        return res.send(name)
}