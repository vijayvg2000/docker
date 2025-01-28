import { AppDataSource } from "../data-source"
import { User } from "../entity/User"
import { Get, JsonController, Res } from "routing-controllers"

@JsonController('/users')
export class UserController {

    private userRepository = AppDataSource.getRepository(User)

    @Get()
    public async name(@Res() res: any): Promise<any> {
        return res.status(200).send(await this.userRepository.find());
    }
}