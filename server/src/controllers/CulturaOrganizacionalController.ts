import { Request, Response, response } from "express";
import { Citi, Crud } from "../global";

class CulturaOrganizacionalController implements Crud {
  constructor(private readonly citi = new Citi("CulturaOrganizacional")) {}

  create = async (request: Request, response: Response) => {
    const { mission, vision, values } = request.body;

    const isAnyUndefined = this.citi.areValuesUndefined(
      mission,
      vision,
      values
    );

    if (isAnyUndefined) return response.status(400).send();

    const newCulturaOrganizacional = { mission, vision, values };
    const { httpStatus, message } = await this.citi.insertIntoDatabase(
      newCulturaOrganizacional
    );
    return response.status(httpStatus).send({ message });
  };

  get = async (request: Request, response: Response) => {
    const { httpStatus, values } = await this.citi.getAll();
    return response.status(httpStatus).send(values);
  };

  delete = async (request: Request, response: Response) => {
    const { id } = request.params;

    const { httpStatus, messageFromDelete } = await this.citi.deleteValue(id);

    return response.status(httpStatus).send({ messageFromDelete });
  };

  update = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { mission, vision, values } = request.body;

    const updatedValues = { mission, vision, values };
    const { httpStatus, messageFromUpdate } = await this.citi.updateValue(
      id,
      updatedValues
    );

    return response.status(httpStatus).send({ messageFromUpdate });
  };
}

export default new CulturaOrganizacionalController();
