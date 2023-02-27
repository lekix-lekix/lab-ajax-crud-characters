const router = require('express').Router()
const Character = require('../models/Character.model')
/**
 * !All the routes here are prefixed with /api/characters
 */

/**
 * ? This route should respond with all the characters
 */
router.get('/', async (req, res, next) => {
	try {
		const allCharacters = await Character.find();
		res.status(200).json(allCharacters);
	} catch (error) {
		console.log('coucou')
		next(error);
	}
})

/**
 * ? This route should create one character and respond with
 * ? the created character
 */
router.post('/', async (req, res, next) => {
	try {
		const characterToCreate = { ...req.body};
		for (const property in characterToCreate) {
			if (property.length === 0  || property !== 'string') return property
		}
		const createdCharacter = await Character.create(characterToCreate);
		res.status(201).json(createdCharacter);
	} catch (error) {
		next(error);
	}
})

/**
 * ? This route should respond with one character
 */
router.get('/:id', async (req, res, next) => {
	try {
		const oneCharacter = await Character.findById(req.body.id);
		res.status(202).json(oneCharacter);
	} catch (error) {
		next(error);
	}
})

/**
 * ? This route should update a character and respond with
 * ? the updated character
 */
router.patch('/:id', async (req, res, next) => {
	const { characterId } = req.params;
	const characterToUpdate = { ...req.body};
	try {
		await Character.findByIdAndUpdate(characterId, characterToUpdate);
		res.json({ message: `Successfully updated character: ${characterId}`});
	} catch (error) {
		next(error);
	}
})

/**
 * ? Should delete a character and respond with a success or
 * ? error message
 */
router.delete('/:id', async (req, res, next) => {
	try {
		await Character.findByIdAndDelete(req.params.id);
		return `Character with id ${req.params.id} was deleted`	
	} catch (error) {
		next(error);
	}
})

module.exports = router
