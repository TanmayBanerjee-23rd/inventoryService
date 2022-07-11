class BaseValidators<dto> {

    validateId( id: number ): boolean {
        return ( !!id );
    };

    validateAdminUser( req ): boolean {
        return ( req.tokenData.decodedToken.userType === "admin" );
    };

    validateServiceUser( req ): boolean {
        return ( req.tokenData.decodedToken.userType === "service" );
    };

    protected validateObjFields( obj: dto, fieldsArr: string[] ): boolean {

        let isValid = true;

        fieldsArr.forEach( field => {
            isValid = !!( isValid && obj[ field ] );
        });

        return isValid;
    };
};

export default BaseValidators;