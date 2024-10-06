import { Router } from 'express'; 
import * as produtoModel from './produto.model'; 

const router = Router();

router.get('/', async (_: any, res: any) => {
  try {
    const data = await produtoModel.getAll();
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: 'Erro no servidor' });
  }
});

router.post('/', async (req: any, res: any)=> {
  try {
    const data = await produtoModel.store(req.body);
    return res.status(201).json({ data });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar produto' });
  }
});

export default router;