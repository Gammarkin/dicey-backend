import {model as mongooseCreateModel, Schema} from 'mongoose';
import MongoModel from './MongoModel';
import IChar from '../interfaces/IChar';

const carMongooseSchema = new Schema<IChar>(
	{
		id: {
			type: Number,
			required: true,
		},
		playerTag: {
			type: String,
			required: true,
		},
		characterName: {
			type: String,
			required: true,
		},
		skills: {
			type: Object,
			required: true,
		},
		attributes: {
			type: Object,
			required: true,
		},
	},
	{versionKey: false}
);

class Car extends MongoModel<IChar> {
	constructor(model = mongooseCreateModel('Characters', carMongooseSchema)) {
		super(model);
	}
}

export default Car;
