import * as Yup from 'yup';
import { BAD_REQUEST } from '../../config/httpResponse';


export default async (req, res, next) => {
	let schema = Yup.object().shape({
		nome:   		Yup.string().required(),
		sexo:   		Yup.string().max(1).required(),
		idade:  		Yup.number(),
		hobby:			Yup.string(),
		datanascimento:	Yup.date().required(),
	});

	if (!(await schema.isValid(req.body)) )
		return res.status(BAD_REQUEST).json({ 
			error: 'Falha na validação, algum campo inválido!' 
		});

	return next();
};