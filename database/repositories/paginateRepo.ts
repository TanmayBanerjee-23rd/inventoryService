import BaseRepo from "./baseRepo";

abstract class PaginateRepo<Entity> extends BaseRepo<Entity>{

    protected async findAllPageWise( conditionObj, skipCount, limitCount ) {
        return ( await this.getModel().find( conditionObj )
                        .skip( skipCount )
                        .limit( limitCount ).exec() );
    };
};

export default PaginateRepo;