import { Request, Response } from 'express';

export const meadify = async (req: Request, res: Response, next: any) => {
    console.log('reqe');
    // req.meadIsGood = true;
    next();
}

export const meadifyMore = async (req: Request, res: Response, next: any) => {
    console.log('req2');
    // req.meadIsGood = false;
    next();
}

// export const corsBegone = async (req: Request, res: Response, next: any) => {
//     res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// }