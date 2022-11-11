export default interface IService<T> {
	create(item: T): Promise<T>;
	findAll(): Promise<T[]>;
	findById(id: string): Promise<T | null>;
	updateOne(id: string, item: T): Promise<T | null>;
	destroy(id: string): Promise<T | null>;
}
