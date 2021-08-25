import authConfig           from '../../config/auth';
import { UNAUTHORIZED }     from '../../config/httpResponse';

export default (req, res, next) => {
    
    let auth = req.headers.authorization;
    if (!auth || auth != authConfig.scret)
        return res.status(UNAUTHORIZED).json({ 
            error: 'Autorização inválida ou não encontrada!' 
        });

    return next();
};