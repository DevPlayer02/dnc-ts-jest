import * as express from 'express'; 
import produtoFactory from './produto.factory'; 
import { ultimoValor } from '../../libs/tratamentos';

const router = express.Router();

router.get('/', async (_: Request, res: any) => {
  try {
    const data = await produtoFactory.getAll();
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: 'Erro no servidor' });
  }
});

router.post('/', async (req: Request, res: any)=> {
  try {
    const data = await produtoFactory.store(req.body);
    return res.status(201).json({ data });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar produto' });
  }
});

router.post('/ultimo-valor', async (req: any, res: any) => {
  try {
    const response = ultimoValor(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao calcular a soma' });
  }
});
export default router;