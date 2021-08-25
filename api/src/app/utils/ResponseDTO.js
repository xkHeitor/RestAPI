import { BAD_REQUEST } from '../../config/httpResponse';


class ResponseDTO {

    constructor (res, status, error, data) {
        this.res    = res;
        this.error  = error;
        this.data   = data;
        this.status = { error: status.error || BAD_REQUEST, success: status.ok };
    }

    response () {
        return this.res
            .status(this.error ? this.status.error : this.status.success)
            .json({
                error:  this.error,
                data:   this.data
            });
    }

}

export default ResponseDTO;