import { version } from '../../package.json';
import { Router } from 'express';
import axios from 'axios';
import facets from './facets';
axios.defaults.adapter = require('axios/lib/adapters/http')
export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/facets', facets({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	api.get('/list', async (req, res) => {
		try {
			let result = await axios.get('https://blockchain.info/blocks?format=json');
			res.json(result.data.blocks);
		}catch(e) {
			console.log(e);
		}
	});

	api.get('/detail/:hash', async (req, res) => {
		try {
			let result = await axios.get(`https://blockchain.info/rawblock/${req.params.hash}`);
			result.data.tx = result.data.tx.map((item, index) => {
				item.id = index;
				return item;
			})
			res.json(result.data);
		}catch(e) {
			console.log(e);
		}
	});

	api.get("/transaction/:tx", async( req, res) => {
		try {
			let result = await axios.get(`https://blockchain.info/rawtx/${req.params.tx}`);
			res.json(result.data);
		}catch(e) {
			console.log(e);
		}
	})

	return api;
}
