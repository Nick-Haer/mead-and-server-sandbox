import express from 'express';
import {meadifyMore, meadify} from "../middleware/meadified.js";

const router = express.Router();

router.get('/allMead', [meadify, meadifyMore], (req: any, res: any) => {
    try {
        res.status(200).send('billy');
    } catch (err) {
        res.status(500).json('whoops');
    }
});

// res.header("Access-Control-Allow-Origin", "*");
// res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

router.post('/melomel/:meadType', async (req, res) => {
    console.log(req.body, 'params');
    console.log(Object.keys(req.query), 'params');
    console.log(req.params, 'params');
    res.status(200).json({billy: 'bob'});
})


router.route('/allMead').get(meadify, async (req, res) => {
    console.log(req.body);
    try {
        res.status(200).json('billy bob')
    } catch (err) {
        res.status(500).json('oopsy daisy');
    }
})



export default router;