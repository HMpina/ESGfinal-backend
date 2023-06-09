import { getRepository } from "typeorm";
import { Timesheets } from '../entity/Timesheets';
import { Request, Response } from "express";
export const getTimesheets = async(request: Request, response: Response) => {
    const timesheets = await getRepository(Timesheets).find()
    return response.json(timesheets);
};
export const saveTimesheet = async(request: Request, response: Response) => {
    const timesheet = await getRepository(Timesheets).save(request.body)
    return response.json(timesheet);
};
export const getTimesheet = async(request: Request, response: Response) => {
    const {id} = request.params
    const timesheet = await getRepository(Timesheets).findOneById(id)
    return response.json(timesheet);
};

export const updateTimesheet = async(request: Request, response: Response) => {
    const {id} = request.params
    const timesheet = await getRepository(Timesheets).update(id, request.body)
    if (timesheet.affected == 1){
        const timesheetUpdated = await getRepository(Timesheets).findOneById(id)
        return response.json(timesheetUpdated);
    }
    else{
        return response.status(404).json( {message: `Tarefa não encontrada!`} )
    }
};
export const deleteTimesheet = async(request: Request, response: Response) => {
    const {id} = request.params
    const timesheet = await getRepository(Timesheets).delete(id)
    if (timesheet.affected == 1){
        return response.status(200).json( {message: "Tarefa excluída com sucesso!"} );
    }
    else{
        return response.status(404).json( {message: 'Tarefa não encontrada!'} )
    }
};