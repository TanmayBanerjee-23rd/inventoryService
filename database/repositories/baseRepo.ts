import { Model } from 'mongoose';

abstract class BaseRepo<Entity> {

    protected abstract getModel(): Model<Entity>;

    public async create( entity: Entity ): Promise<Entity> {

        const modelInstance = this.getModel();

        const record: Entity = await modelInstance.create( entity );

        return record;
    };

    public async findOneById( id: number ) {
        return ( await this.getModel().findOne( { _id: id } ) );
    }

    protected async findOne( conditionObj ) {
        return ( await this.getModel().findOne( conditionObj ).exec() );
    };

    protected async findAll( conditionObj ) {
        return ( await this.getModel().find( conditionObj ).exec() );
    };

    protected async updateOne( conditionObj, updatedObj ) {
        return ( await this.getModel().updateOne( conditionObj, updatedObj ).exec() );
    };

    protected async updateMany( conditionObj, updatedObj ) {
        return ( await this.getModel().updateMany( conditionObj, updatedObj ).exec() );
    };

    protected async deleteOne( conditionObj ) {
        return ( await this.getModel().deleteOne( conditionObj ).exec() );
    };

    protected async deleteMany( conditionObj ) {
        return ( await this.getModel().updateMany( conditionObj ).exec() );
    };
};

export default BaseRepo;