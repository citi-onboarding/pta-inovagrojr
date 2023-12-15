import { Request, Response } from "express";
import { Citi, Crud } from "../global";

class AreaController implements Crud {
  constructor(private readonly citi = new Citi("Area")) {}
  create = async (request: Request, response: Response) => {
    const { title, content } = request.body;

    const isAnyUndefined = this.citi.areValuesUndefined(
      title,
      content
    );
    if (isAnyUndefined) return response.status(400).send();

    const newArea = { title, content };
    const { httpStatus, message } = await this.citi.insertIntoDatabase(newArea);

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
    const { title, content } = request.body;

    const updatedValues = { title, content };

    const { httpStatus, messageFromUpdate } = await this.citi.updateValue(
      id,
      updatedValues
    );

    return response.status(httpStatus).send({ messageFromUpdate });
  };
}

export default new AreaController();
